'use strict';
const mongoose = require('mongoose');

const history = new mongoose.Schema({
  url: { type: 'string', required: true },
  method: {
    type: 'string',
    uppercase: true,
    enum: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
  },
  body: { type: 'string' },
  headers: { type: 'string' },
});
// console.log('my schema', history, '&&&&&module', module.exports);
module.exports.schema = history.obj;
module.exports.model = mongoose.model('history', history);
