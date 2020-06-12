const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const roles = require('../models/roles-model.js');
const users = new mongoose.Schema(
  {
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    fullname: { type: String },
    email: { type: String },
    role: {
      type: String,
      default: 'user',
      enum: ['admin', 'editor', 'writer', 'user'],
    },
  },
  { toObject: { virtuals: true }, toJSON: { virtuals: true } }
  // this is not persisted into the db only to show on run time
);
// to put a doc in another doc
users.virtual('acl', {
  ref: 'roles', // the collection name
  localField: 'role', //users schema field
  foreignField: 'role', // roles schema field
  justOne: true,
});
users.pre('find', function () {
  // put the roles doc values on the acl key in the user doc
  // in pre we dont need to call .execPopulate()
  this.populate('acl');
});
users.pre('save', async function () {
  //this.password = "1234"
  this.password = await bcrypt.hash(this.password, 10);
});
users.post('save', async function () {
  // put the roles doc values on the acl key in the user doc
  // in post we need to call .execPopulate()
  await this.populate('acl').execPopulate();
});
module.exports = mongoose.model('users', users);
