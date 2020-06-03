const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const apiRouter = require('../routes/v1-router.js');
const paramsRouter = require('../routes/params');
const errorHandler = require('../middleware/500.js');
const notFoundHandler = require('../middleware/404.js');
const app = express();

//global middleware
app.use(express.json());
app.use(morgan('dev'));
app.use(cors());
app.use('/api/v1', apiRouter);
// app.use(paramsRouter);
app.get('/', (req, res) => {
  throw new Error('oh nooo');
});
app.use('*', notFoundHandler);
app.use(errorHandler);
module.exports = {
  server: app,
  start: (port) => {
    const PORT = port || 4000;
    app.listen(PORT, () => console.log('listing on port', PORT));
  },
};
