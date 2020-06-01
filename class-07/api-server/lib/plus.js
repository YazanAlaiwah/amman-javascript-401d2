module.exports = (req, res, next) => {
  req.number = req.number + req.number;
  next();
};
