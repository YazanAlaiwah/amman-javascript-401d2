const express = require('express');
const authRouter = express.Router();
const auth = require('../auth/middleware/basic.js');
const user = require('../auth/models/users-model.js');
authRouter.post('/signup', (req, res, next) => {
  console.log('BODY', req.body);

  user
    .create(req.body)
    .then((userRecord) => {
      req.token = user.generateToken(userRecord);
      req.user = {
        username: userRecord.username,
        fullname: userRecord.fullname,
        email: userRecord.email,
        acl: userRecord.acl,
      };
      res.cookie('auth', req.token);
      res.set('auth', req.token);
      res.json({ user: req.user, token: req.token });
    })
    .catch(next);
});

authRouter.post('/signin', auth, (req, res, next) => {
  res.cookie('auth', req.token);
  res.set('auth', req.token);
  res.json({ user: req.user, token: req.token });
});

module.exports = authRouter;
