const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const foodRouter = require('../routes/food-router.js');
const app = express();

//global middleware
app.use(express.json());
app.use(morgan('dev'));
app.use(cors());
app.use('/api/v1', foodRouter);
module.exports = {
  server: app,
  start: (port) => {
    const PORT = port || 4000;
    app.listen(PORT, () => console.log('listing on port', PORT));
  },
};
