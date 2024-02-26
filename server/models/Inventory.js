const { Schema, model } = require( 'mongoose' );
const inventorySchema = require( './Inventory' )

const inventorySchema = new Schema(
  {
    //id should be automatic, check if need to include cartId using graphQL
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
      type: Number,
      required: true
    }
  },
  {
    toJSON: {
      virtuals: true
    }
  }
);


const Inventory = model( 'Inventory', inventorySchema );

module.exports = Inventory;



