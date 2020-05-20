'use strict';

const model = require('./history-schema.js').model;

class History {
  constructor() {}
  create(obj) {
    const newRecord = new model(obj);
    return newRecord.save();
  }
  read(_id) {
    if (_id) {
      return model.findOne({ _id });
    } else {
      return model.find({});
    }
  }
  update(_id, obj) {
    return model.findByIdAndUpdate(_id, obj, { new: true });
  }
  delete(_id) {
    return model.findByIdAndDelete(_id);
  }
}
module.exports = new History();
