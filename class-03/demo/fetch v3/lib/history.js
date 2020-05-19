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

module.exports = mongoose.model('history', history);
