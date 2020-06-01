'use strict';
const express = require('express');
const logRequest = require('./logger.js');
const plus = require('./plus.js');
const app = express();

// global middleware
app.use(express.json()); //body-parser to add body to the req
app.use(logRequest);

// query string
app.get('/fruit', (req, res) => {
  console.log(req.query);
  const data = {
    type: req.query.type,
  };
  res.status(200).json(data);
  // res.json(data);
});
//params
app.get('/fruit/:type/:name/', (req, res) => {
  console.log(req.params);
  const data = {
    type: req.params.type,
  };
  res.json(data);
});
app.post('/fruit', (req, res) => {
  console.log('this is what we got', req.body); //undefined if not parsed
  res.status(201).send('fruit added!');
});
app.put('/fruit/:fruit_id', (req, res) => {
  console.log(
    `fruit with id: ${req.params.fruit_id} got updated with ${req.body}` //undefined if not parsed
  );
  res.status(201).json(req.body);
});
function square(n) {
  return (req, res, next) => {
    if (typeof n !== 'number') {
      next('Not a number!');
    } else {
      req.number = n * n;
      next();
    }
  };
}
app.get('/middleware', square(33), plus, (req, res) => {
  console.log(req.number);
  res.json({ square: req.number });
});

// app.get(
//   '/middleware',
//   square(10),
//   (req, res, next) => {
//     req.number = req.number + req.number;
//     next();
//   },
//   (req, res) => {
//     console.log(req.number);
//     res.json({ square: req.number });
//   }
// );

// app.get()
function errorHandler(err, req, res, next) {
  res.status(500);
  res.statusMessage = 'Server Error :(';
  res.json({ error: err });
}
function notFoundHandler(req, res, next) {
  res.status(404);
  res.statusMessage = 'Resource Not Found';
  res.json({ error: 'not Found' });
}
let db = [];
app.post('/api/v1/food', (req, res) => {
  const { name } = req.body;
  console.log('name', name);
  const record = { name }; //{name:}
  record.id = db.length + 1;
  db.push(record);
  res.json(record);
});

app.get('/api/v1/food', (req, res) => {
  const count = db.length;
  const results = db;
  res.json({ count, results });
});

app.use('*', notFoundHandler);
app.use(errorHandler);
module.exports = {
  server: app,
  start: (port) => {
    const PORT = port || process.env.PORT || 3000;
    app.listen(PORT, () => console.log(`Listening on ${PORT}`));
  },
};
