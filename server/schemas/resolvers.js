//Here we are creating a backend system by importing the models accessed by queries and mutations
//This entire stucture needs to be 100% revised and major corrections are need. LoggedIn be revised
//Need proper understanding for what resolvers is doing, this is just a hint. Context is logged in 

const { User, Inventory} = require( '../models' )

const { AuthenticationError } = require( 'apollo-server-express' )
const { signToken } = require( '../utils/auth' )
const { sendEmail } = require( '../utils/nodemailer' )
const bcrypt = require('bcrypt');
// const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc')

const resolvers = {
  Query:  {
    
  //The main way to order history in resolvers will be to to be similar to cart resolver and then
  //the array of cart will be assigned to another array called Order after session ID is reported
  //back from the payment provider after payment, provided cart is >0 qty using if statement 
    
    me: async (parent, args, context) => {
        if (context.user) {
          const userData = await User.findOne({ _id: context.user._id })
            .select('-__v -password')  
            .populate('cart');   
           
            //then we will also include the order history in it 
            
          return userData;
        }
        throw new AuthenticationError('Not logged in');
    },
    user: async (parent, { username }, context) => {
      if (context.user) {
        return User.findOne({ username })
          .select('-__v -password')
          .populate('cart')
 
            //then we will also include the order history in it 
        }
        throw new AuthenticationError('Not logged in');
    },

    inventory: async (parent) => {
      return inventory.find().sort({ createdAt: -1 });
    },
//check and edit createdAt: -1 and take it off if necessary, sort may not be needed 
//check the use of sort() and take it off if necessary
//this is to display inventory as seed files straight on landing page without need to log in

    product: async (parent, { _id }) => {
      return inventory.findOne({ _id });
    },

//Add one for filter of certain category abd group of products

cart: async (parent) => {
  return cart.find().sort({ createdAt: -1 });
}
//check and edit createdAt: -1 and take it off if necessary, sort may not be needed 
//check the use of sort() and take it off if necessary
//this is to display cart items with need to log in, may have to include the context code above 




  },

  Mutation: {
    
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

    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);
        // send welcome email
      const emailData = { username: args.username, email: args.email }
      sendEmail( emailData, 'signup' )
    
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

    addCart: async (parent, { input }, context) => {
      if( context.user ){
          
        const Product = await Product.create({ ...args, username: context.user.username });
        console.log(Product)
              const user =  await Product.findByIdAndUpdate(
               
                 context.user._id,
                  { $push: { cart : product } },
            //      { new: true }
                )
                .populate('cart');
                ;
      
        console.log(user)
                return user;
              }
      throw new AuthenticationError('Incorrect credentials');
    },
    

    removeCart: async (parent, { _id }, context) => {
      if( context.user ){
        const product = await Product.deleteOne({ ...args, username: context.user.username });
        console.log(product)
        const user =  await User.findByIdAndUpdate(
           
          context.user._id,
           { $pull: { cart: _id } },
  //check here if _id is working as supposed to and need not to change with cartId
           //      { new: true }
         )
  
    .populate('inventory');
    ;
    
    //this part needs fixing
    console.log(user)
    return user;   
      
      }
      throw new AuthenticationError('Incorrect credentials');
    }
  

  }
}

module.exports = resolvers;
