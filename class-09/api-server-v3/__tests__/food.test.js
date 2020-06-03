'use strict';
require('@code-fellows/supergoose');
const food = require('../models/food-model.js');
const obj = { name: 'apple', calories: 20, type: 'FRUIT' };

describe('Food Model', () => {
  it('create', () => {
    return food.create(obj).then((result) => {
      Object.keys(obj).forEach((key) => {
        expect(result[key]).toEqual(obj[key]);
      });
    });
  });
  it('get', () => {
    return food.get().then((result) => {
      Object.keys(obj).forEach((key) => {
        expect(result[0][key]).toEqual(obj[key]);
      });
    });
  });
});
