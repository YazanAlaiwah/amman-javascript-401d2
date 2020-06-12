'use strict';

const users = require('../models/users-model.js');

module.exports = (req, res, next) => {
  if (!req.headers.authorization) {
    next('Invalid Login');
    return;
  }

  let token = req.headers.authorization.split(' ').pop();

  users
    .authenticateToken(token)
    .then((records) => {
      const validUser = records[0];
      req.user = {
        username: validUser.username,
        fullname: validUser.fullname,
        email: validUser.email,
        acl: validUser.acl,
      };
      console.log(req.user);
      req.token = token;
      next();
    })
    .catch((err) => {
      console.log('ERR', err);
      next('Invalid Login');
    });
};
