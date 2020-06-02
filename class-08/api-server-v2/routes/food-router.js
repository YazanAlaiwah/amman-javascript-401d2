'use strict';
const express = require('express');
const food = require('../models/food-model.js');
const router = express.Router();
// var getFood; ==> undefined
// var postFood;
router.get('/food', getFood);
router.post('/food', postFood);

// var getFood = (req, res, next) => {}; //hoisting getFood == Undefined
// var postFood = (req, res, next) => {}; //hoisting postFood == Undefined
// const getFood = (req, res, next) => {}; //getFood is not defined
// const postFood = (req, res, next) => {}; //postFood is not defined
function getFood(req, res, next) {
  food
    .get()
    .then((data) => res.json(data))
    .catch((err) => next(err.message));
}
async function postFood(req, res, next) {
  // food
  //   .create(req.body)
  //   .then((data) => res.json(data))
  //   .catch(next);

  try {
    const data = await food.create(req.body);
    res.json(data);
  } catch (e) {
    next(e.message);
  }
}
module.exports = router;
