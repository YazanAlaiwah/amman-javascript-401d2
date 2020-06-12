'use strict';

const express = require('express');
const authRouter = require('./routers/auth.js');
const apiRouter = require('./routers/v1.js');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use(authRouter);
app.use(apiRouter);
module.exports = {
  server: app,
  start: (port) => {
    app.listen(port, () => {
      console.log(`Server Up on ${port}`);
    });
  },
};
