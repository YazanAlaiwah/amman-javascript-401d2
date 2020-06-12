'use strict';

const base64 = require('base-64');

const users = require('../models/users-model.js');

module.exports = (req, res, next) => {
  if (!req.headers.authorization) {
    next('Invalid Login');
    return;
  }

  let basic = req.headers.authorization.split(' ').pop();

  let [user, pass] = base64.decode(basic).split(':');

  return users
    .authenticateBasic(user, pass)
    .then((validUser) => {
      req.user = {
        username: validUser.username,
        fullname: validUser.fullname,
        email: validUser.email,
        acl: validUser.acl,
      };
      req.token = validUser.generateToken();
      next();
    })
    .catch((err) => next('Invalid Login'));
};
