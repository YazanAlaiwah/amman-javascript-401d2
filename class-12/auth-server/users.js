const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const SECRET = process.env.SECRET || 'mysecret';
const db = {};
const Users = {};
/*
  db
  {
    'mahmoud':{
      username:"mahmoud",
      password:"jkabndajnsdjkasndkjlasndasjndasjkdn;asjkndajksndasjnd"
    }
  }
 */
//signup
Users.save = async function (record) {
  /**
   * record
   * {username:"mahmoud",password:"1234"}
   */
  if (!db[record.username]) {
    record.password = await bcrypt.hash(record.password, 5);
    db[record.username] = record;
    return record;
  }
  return Promise.reject(); // ==>.catch
};
// user:pass
//signin
Users.authenticateBasic = async function (user, pass) {
  const valid = await bcrypt.compare(pass, db[user].password);
  return valid ? db[user] : Promise.reject('wrong password');
};
//signin/signup
Users.generateToken = function (user) {
  const token = jwt.sign({ username: user.username }, SECRET);
  return token;
};
//findall
Users.list = () => db;
module.exports = Users;
