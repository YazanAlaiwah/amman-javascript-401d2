'use strict';

const foodModel = require('./food-schema.js');

class Food {
  constructor() {}
  create(obj) {
    const newRecord = new foodModel(obj);
    return newRecord.save();
  }
  read(_id) {
    if (_id) {
      return foodModel.findOne({ _id });
    } else {
      return foodModel.find({});
    }
  }
  update(_id, obj) {
    return foodModel.findByIdAndUpdate(_id, obj, { new: true });
  }
  delete(_id) {
    return foodModel.findByIdAndDelete(_id); // return the record
    // return foodModel.findByIdAndRemove(_id); // return something?
  }
}
module.exports = new Food();
