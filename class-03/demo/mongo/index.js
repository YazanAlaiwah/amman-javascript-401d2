'use strict';
require('dotenv').config();
const mongoose = require('mongoose');
const Food = require('./models/food-schema.js');
const MONGODB_URI = process.env.MONGODB_URI;
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const mongo = async (foodItem) => {
  const food = new Food(foodItem);
  await food.save();
  console.log('Food Created', food);
  const oneFood = await Food.findById(food.id);
  console.log('One food', oneFood);
  const allFood = await Food.find({});
  console.log('All Food', allFood);
  mongoose.disconnect();
};

const foodItem = {
  name: 'Carrots',
  calories: 23,
  type: 'vegetable',
};

mongo(foodItem);
