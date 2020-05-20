#!/usr/bin/env node
'use strict';
require('dotenv').config();
const Input = require('./lib/input.js');
const HTTP = require('./lib/http.js');

const options = new Input();
const http = new HTTP();
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
// options.valid => T | F
options.valid() ? http.fetch(options).then(mongoose.disconnect) : help();

function help() {
  console.log(`
  api USAGE: api -m <method> -u <url> -b <body>
  -m - HTTP Method (get | post | put |patch | delete)
  -u - URL (leading :port presumes localhost)
  -b - BODY to send for or put/patch
       Enclosed in single quotes
       JSON must be valid
  `);
  process.exit();
}
