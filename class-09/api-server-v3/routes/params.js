'use strict';

const express = require('express');
const router = express.Router();

function getZipCode(req, res, next) {
  console.log('hi');
  req.zip = Math.floor(Math.random() * 10000).toString();
  next();
}
function getId(req, res, next) {
  console.log(req.zip);
  next();
}
router.param('city', getZipCode);
router.param('city_id', getId);
// router.get('/places/amman/:mahmoud', (req, res, next) => {
//   console.log('hi from amman');
//   res.json({ zip: req.zip });
// });

router.get('/places/:city/:city_id', (req, res, next) => {
  console.log('hi from param');
  res.json({ zip: req.zip });
});

router.get('/test/:city', (req, res, next) => {
  console.log('hi from param');
  res.json({ test: req.zip });
});
module.exports = router;
