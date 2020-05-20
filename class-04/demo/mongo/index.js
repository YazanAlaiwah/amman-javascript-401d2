'use strict';
require('dotenv').config();
const mongoose = require('mongoose');
// const Food = require('./models/food-schema.js');
const food = require('./models/food-collection.js');
const MONGODB_URI = process.env.MONGODB_URI;
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const mongo = async (foodItem) => {
  // const food = new Food(foodItem);
  // await food.save();
  console.log('foood', foodItem);
  const myFood = await food.create(foodItem);
  console.log('Food Created', food);
  // const oneFood = await Food.findById(food.id);
  // console.log('asdasdasdasd', myFood.id);
  const oneFood = await food.read(myFood._id);
  console.log('One food', oneFood);
  console.log('_________________________');
  // const allFood = await Food.find({});
  const allFood = await food.read();
  console.log('All Food', allFood);
  mongoose.disconnect();
};

const foodItem = {
  name: 'test22',
  calories: 22,
  type: 'vegetable',
};

mongo(foodItem);
