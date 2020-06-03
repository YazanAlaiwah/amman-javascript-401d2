module.exports = (req, res) => {
  res.status(404);
  res.statusMessage = 'Resource not found';
  res.json({ error: 'Not Found' });
};
