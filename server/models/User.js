//Validators can be added here which will ensure that it meets minimum requirements.
//orders is a sub document and it connects with another schema.  
//database will make those many collections as models automatically read once server is running 
//Every collection will have fields which is first name etc. primary is objectId (NoSQL/Mongo assigned)
//information, for each user will be stored in a 'document' and everything is stored in a JSON format. 
//A vitrual field is to create something from an existing property in the schema (part of it), not
//stored on database, creating/computing information based on existing/stored info. Can use regex
//for email using match: [regex inside here]. Example of virtuals to not to show the id and only user
//it will be available under virual field. To create a post request you don't need id (only update)
//{
//  ToJson: {
//      virtuals: true
//},
//id: false
//}
//
//at bottom it will be 
//UserSchema.virtual('username').get(function() {
//return this.email.split('@')[0]; 
//})
//this will create a username in the database as jaani for your email
//The order schema has been nested here as sub document as every user has an order
//You can also create fields which use automatic methods such as createdAt etc. example-
//userCreated {
//Type: Date,
//default: Date.now
//},

const mongoose = require('mongoose');
const { Schema } = mongoose;
const bcrypt = require('bcrypt');
const Order = require('./Order');

const userSchema = new Schema({
  firstName: {
    type: String,
    required: true,
    trim: true
  },
  lastName: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
    minlength: 5
  },
  orders: [Order.schema]
});

//this is to add an extra layer of security to save anyone's password in encrypted/hashed form
// set up pre-save middleware to create password
userSchema.pre('save', async function(next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// compare the incoming password with the hashed password
userSchema.methods.isCorrectPassword = async function(password) {
  return await bcrypt.compare(password, this.password);
};

const User = mongoose.model('User', userSchema);

module.exports = User;
