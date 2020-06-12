'use strict';

const Model = require('./model.js');
const schema = require('./users-schema.js');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const SECRET = process.env.SECRET || 'mysecret';
class User extends Model {
  constructor() {
    super(schema);
  }
  authenticateToken(token) {
    try {
      let parsedToken = jwt.verify(token, SECRET);
      let query = { _id: parsedToken.id };
      return this.get(query);
    } catch (e) {
      throw new Error('Invalid Token');
    }
  }

  authenticateBasic(username, password) {
    let query = { username };
    return this.get(query)
      .then((user) => user && user.comparePassword(password))
      .catch((error) => {
        throw error;
      });
  }

  comparePassword(password) {
    return bcrypt
      .compare(password, this.password)
      .then((valid) => (valid ? this : null));
  }

  generateToken(user) {
    let token = {
      id: user._id,
      capabilities: user.acl ? user.acl.capabilities : [],
      type: user.type || 'user',
    };

    return jwt.sign(token, SECRET);
  }
  can(user, capability) {
    return user.acl.capabilities.includes(capability);
  }
}

module.exports = new User();
