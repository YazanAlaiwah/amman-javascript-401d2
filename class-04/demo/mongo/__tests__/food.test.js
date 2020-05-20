'use strict';
require('@code-fellows/supergoose');

const Food = require('../models/food-collection.js');
describe('Food Model', () => {
  it('create() a new food item', () => {
    const foodItem = { name: 'test food', calories: 55, type: 'fruit' };
    return Food.create(foodItem).then((record) => {
      Object.keys(foodItem).forEach((key) => {
        expect(record[key]).toEqual(foodItem[key]);
      });
    });
  });
  it('read() food items', () => {
    const foodItem = { name: 'test food', calories: 55, type: 'fruit' };
    const expectedItem = { name: 'TEST FOOD', calories: 55, type: 'fruit' };
    return Food.create(foodItem).then((record) => {
      return Food.read(record._id).then((item) => {
        Object.keys(foodItem).forEach((key) => {
          expect(item[key]).toEqual(expectedItem[key]);
        });
      });
    });
  });
});
