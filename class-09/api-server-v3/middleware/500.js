module.exports = (err, req, res, next) => {
  console.log('hi from err', err);
  res.status(500);
  res.statusMessage = 'Server Error';
  res.json({ error: err });
};
