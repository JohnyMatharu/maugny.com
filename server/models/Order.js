const { Schema, model } = require( 'mongoose' );
const orderSchema = require( './Order' )

//this needs revision and will be base for order histry on customer service page after login set


const orderSchema = new Schema(
  {
    //this will be later controlled by log in
    // ownerId: {
    //   type: Schema.Types.ObjectId,
    //   ref:  'User'
    // },
    purchaseDate: {
        type: Date,
        default: Date.now
      },
      cart: [
        {
          type: Schema.Types.ObjectId,
          ref: 'Cart'
        }
      ],
    item: {
      type: String,
      required: true,
      trim: true
    },
    description: {
      type: String,
      required: true,
      trim: true
    },
    image: {
      type: Image,
      required: true
    },
    quantity: {
      type: Number,
      required: true
    },
    price: {
      type: Boolean,
      required: true
    }
  },
  {
    toJSON: {
      virtuals: true
    }
  }
);



// this bottom part needs to be checked 


const Order = model( 'Order', orderSchema );

module.exports = Order;
