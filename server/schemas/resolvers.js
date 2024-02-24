//Here we are creating a backend system by importing the models accessed by queries and mutations
//This entire stucture needs to be 100% revised and major corrections are need. LoggedIn be revised
//Need proper understanding for what resolvers is doing, this is just a hint. Context is logged in 

const { User, Inventory, Cart, Order } = require( '../models' )

const { AuthenticationError } = require( 'apollo-server-express' )
const { signToken } = require( '../utils/auth' )
const { sendEmail } = require( '../utils/nodemailer' )
const bcrypt = require('bcrypt');
// const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc')

const resolvers = {
  Query:  {
//this query needs to be checked for path and populate
    order: async (parent, { _id }, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id).populate({
          path: 'orders.order',
          populate: 'order'
        });

        return user.orders.id(_id);
      }

      throw new AuthenticationError('Not logged in');
    },

    //this is the main place where the stripe session will return session: session.id and this will be used in 
  //the Cart/index.js, as import { QUERY_CHECKOUT } from '../../utils/queries';   and passed in as data
  //in UseEffect with stripePromise, each session.id will differ based on product

    checkout: async (parent, args, context) => {
      const url = new URL(context.headers.referer).origin;
      const line_items = [];

      const cartData = []
      if( args.cart.length > 0 ){
        for( let i = 0; i < args.cart.length; i++){
          // populate and store the virtual props of auction as it was not reachable within the me query on the front end
          const cartData = await Cart.findOne({ _id: args.cart[i] })
            .populate('cart'); 
            cartData.push( { title: cartData.title, description: cartData.description, price: cartData.cartInfo} )
          }
        }

      for (let i = 0; i < cartData.length; i++) {
        const product = await stripe.products.create({
          name: cartData[i].title,
          description: cartData[i].description
        });

        const price = await stripe.prices.create({
          product: product.id,
          unit_amount: cartData[i].price * 100,
          currency: 'cad',
        });

        line_items.push({
          price: price.id,
          quantity: 1
        });
      }
      console.log( line_items)

      const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items,
        mode: 'payment',
        success_url: `${url}/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${url}/`
      });

      return { session: session.id };
    },

    me: async (parent, args, context) => {
        if (context.user) {
          const userData = await User.findOne({ _id: context.user._id })
            .select('-__v -password')  
            .populate('order');   
            
          if( userData.order.length > 0 ){
            for( let i = 0; i < userData.order.length; i++){
              // populate and store the virtual props of auction as it was not reachable within the me query on the front end
              const orderData = await Order.findOne({ _id: orderData.order[i]._id })
                .populate('order'); 
                orderData.order[i].orderInfoStore = orderData.orderInfo
            }
          }
          if( userData.order.length > 0 ){
            //create empty store prop
            userData.orderStore = []
            for( let i = 0; i < userData.order.length; i++){
              // populate and store the virtual props of auction as it was not reachable within the me query on the front end
              const orderData = await Order.findOne({ _id: orderData.order[i].orderId })
                .populate('order'); 
              userData.orderStore.push( orderData )
            }
          }  
          return userData;
        }
        throw new AuthenticationError('Not logged in');
    },
    user: async (parent, { username }, context) => {
      if (context.user) {
        return User.findOne({ username })
          .select('-__v -password')
          .populate('oder')
        }
        throw new AuthenticationError('Not logged in');
    },
    cart: async (parent, { id }, context) => {
      if (context.user) {
        const matchCart = await Cart.findOne({ _id: id })
        .populate('cart');
        return matchCart
      }
      throw new AuthenticationError('Not logged in');
    },
    orderByOwner: async (parent, args, context) => {
      if (context.user) {
        return Order.find({ ownerId: context.user._id })
        .populate('order');
      }
      throw new AuthenticationError('Not logged in');
    },
  },

  Mutation: {
    addInventory: async (parent, { input }, context) => {
      if( context.user ){
          // spread auction data
        const inventoryData = { ...input }
          // set ownerId based on context
        inventoryData.ownerId = context.user._id

          // create auction
        const inventory = await Inventory.create( inventoryData );  

          // add auction reference to user
        const updatedUser  = await User.findOneAndUpdate(
          {_id: inventoryData.ownerId},
          { $push: { inventory: inventory._id } },
          { new: true, runValidators: true }
          ).populate('inventory');

        const emailData = { username: context.user.username, email: context.user.email, 
        id: inventory._id, title: inventory.title }
        sendEmail( emailData, 'new-inventory' )

        return updatedUser ;
      }
      throw new AuthenticationError('Incorrect credentials');
    },
    
    addCart: async (parent, { input }, context) => {
      if( context.user ){
          // spread auction data
        const cartData = { ...input }
          // set ownerId based on context
        cartData.ownerId = context.user._id

          // create auction
        const cart = await Cart.create( cartData );  

          // add auction reference to user
        const updatedUser  = await User.findOneAndUpdate(
          {_id: cartData.ownerId},
          { $push: { cart: cart._id } },
          { new: true, runValidators: true }
          ).populate('cart');

        const emailData = { username: context.user.username, email: context.user.email, 
        id: cart._id, title: cart.title }
        sendEmail( emailData, 'new-cart' )

        return updatedUser ;
      }
      throw new AuthenticationError('Incorrect credentials');
    },
    

    deleteCart: async (parent, { _id }, context) => {
      if( context.user ){
          // get data for current bid
        const currentCart = await Cart.findOne( { _id } )

          // if context user matches the owner of the bid, allow delete
        if( currentCart.userId == context.user._id) {

            // delete bid
          const bid = await Cart.deleteOne( { _id } );  

            // pull bid from user array
          const updatedUser  = await User.findOneAndUpdate(
            {_id: currentCart.userId },
            { $pull: { Cart: _id } },
            { new: true, runValidators: true }
            ).populate('cart');

              // pull bid from autcion array
          const updatedCart  = await Cart.findOneAndUpdate(
            {_id: currentCart.cartId},
            { $pull: { cart: _id } },
            { new: true, runValidators: true }
            ).populate('cart');

          return updatedCart
        }
        return currentCart
      }
      throw new AuthenticationError('Incorrect credentials');
    },
  





    addOrder: async (parent, { order }, context) => {
      if (context.user) {
        const order = new Order({ order });

        await User.findByIdAndUpdate(context.user._id, { $push: { orders: order } });

        return order;
      }

      throw new AuthenticationError('Not logged in');
    },
    

    updateOrder: async (parent, args, context) => {
      console.log( args )
      if( context.user ){
        const updatedOrder = []
        for( var i = 0; i < args.ids.length; i++){
          const updatedOrder = await Order.findOneAndUpdate( 
            { _id: args.ids[i] },
            { paid: true },
            { new: true, runValidators: true }
            );
            updatedOrder.push(updatedOrder)
          }
          return updatedOrder;
      }
      throw new AuthenticationError('Incorrect credentials');
    },

    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);
        // send welcome email
      const emailData = { username: args.username, email: args.email }
      sendEmail( emailData, 'signup' )
    
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });
      
      if (!user) {
        throw new AuthenticationError('Incorrect credentials');
      }
      
      const correctPw = await user.isCorrectPassword(password);
    
      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }
    
      const token = signToken(user);
      return { token, user };
    },
  
    updatePassword: async (parent, args, context) => {
      if( context.user ){
          // find user by context
        const currentUser = await User.findOne( { _id: context.user._id } );
          // see if password correct
        const correctPw = await currentUser.isCorrectPassword(args.currentPassword);
          // fail validation if not correct
        if (!correctPw) {
          throw new AuthenticationError('Incorrect credentials');
        }
          // hash new password
        const newPass = await bcrypt.hash( args.newPassword, 10 )
          // update user password
        const user = await User.findOneAndUpdate( 
          { _id: context.user._id },
          { password: newPass },
          { new: true, runValidators: true }
          );

          // send password change email
        const emailData = { username: user.username, email: user.email }
        sendEmail( emailData, 'password' )
          // sign new token
        const token = signToken(user);
        return { token, user };
      }
      throw new AuthenticationError('Incorrect credentials');
    },

  }
}

module.exports = resolvers;
