'use strict';

const mongoose = require('mongoose');

const food = new mongoose.Schema({
  name: { type: 'string', required: true },
  calories: { type: 'number', required: true },
  type: {
    type: 'string',
    enum: ['fruit', 'vegetable', 'protein'],
  },
});

food.post('findOne', function (doc) {
  doc.name = doc.name.toUpperCase();
});
food.post('find', function (doc) {
  doc = doc.map((item) => item.name.toLowerCase());
});
food.post('init', function (doc) {
  console.log('hi from post init');
});
// food.pre('save', function () {
//   //this ==> record
//   //doc ==> undefined
//   // if you have enum (it will be validated)
//   this.type = this.type.toUpperCase();
//   // this.name = this.name.toUpperCase();
// });
module.exports = mongoose.model('food', food);
