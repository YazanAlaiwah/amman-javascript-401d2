const express = require('express');
const basicAuth = require('./basic-auth-middleware');
const users = require('./users.js');
const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());

app.post('/signup', (req, res) => {
  users
    .save(req.body)
    .then((user) => {
      const token = users.generateToken(user);
      res.json({ token }); // => {token:aklndkalsndalksnd}
    })
    .catch((err) => res.status(403).send(err.message));
});
app.post('/signin', basicAuth, (req, res) => {
  // req.token == undefined
  // basicAuth will add token to the req
  res.json({ token: req.token });
});
app.get('/users', basicAuth, (req, res) => {
  res.json(users.list());
});
app.listen(PORT, () => console.log('server is up'));
