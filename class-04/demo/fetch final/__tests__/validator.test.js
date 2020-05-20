'use strict';
const faker = require('faker');
const Validator = require('../lib/validator.js');
const str = 'yes';
const num = 1;
const bool = true;
const arr = ['a'];
const obj = { x: 'y' };
const func = () => {};
const schema = {
  name: { type: 'string', required: true },
  age: { type: 'number' },
  children: { type: 'array', valueType: 'string' },
};

const validator = new Validator(schema);
describe('validator module performs basic validations of', () => {
  it('strings', () => {
    expect(validator.isString(str)).toBeTruthy();
    expect(validator.isString(num)).toBeFalsy();
    expect(validator.isString(arr)).toBeFalsy();
    expect(validator.isString(obj)).toBeFalsy();
    expect(validator.isString(func)).toBeFalsy();
    expect(validator.isString(bool)).toBeFalsy();
  });
  it('numbers', () => {
    expect(validator.isNumber(str)).toBeFalsy();
    expect(validator.isNumber(num)).toBeTruthy();
    expect(validator.isNumber(arr)).toBeFalsy();
    expect(validator.isNumber(obj)).toBeFalsy();
    expect(validator.isNumber(func)).toBeFalsy();
    expect(validator.isNumber(bool)).toBeFalsy();
  });
  it('arrays', () => {
    expect(validator.isArray(str)).toBeFalsy();
    expect(validator.isArray(num)).toBeFalsy();
    expect(validator.isArray(arr)).toBeTruthy();
    expect(validator.isArray(obj)).toBeFalsy();
    expect(validator.isArray(func)).toBeFalsy();
    expect(validator.isArray(bool)).toBeFalsy();
  });
  it('array of type', () => {
    const numArray = [1, 2, 3];
    const strArray = ['a', 'b', 'c'];
    expect(validator.isArray(str)).toBeFalsy();
    expect(validator.isArray(num)).toBeFalsy();
    expect(validator.isArray(arr)).toBeTruthy();
    expect(validator.isArray(obj)).toBeFalsy();
    expect(validator.isArray(func)).toBeFalsy();
    expect(validator.isArray(bool)).toBeFalsy();
    expect(validator.isArray(numArray, 'number')).toBeTruthy();
    expect(validator.isArray(numArray, 'string')).toBeFalsy();
    expect(validator.isArray(strArray, 'number')).toBeFalsy();
    expect(validator.isArray(strArray, 'string')).toBeTruthy();
  });
  it('objects', () => {
    expect(validator.isObject(str)).toBeFalsy();
    expect(validator.isObject(num)).toBeFalsy();
    expect(validator.isObject(arr)).toBeFalsy();
    expect(validator.isObject(obj)).toBeTruthy();
    expect(validator.isObject(func)).toBeFalsy();
    expect(validator.isObject(bool)).toBeFalsy();
  });
  it('functions', () => {
    expect(validator.isFunction(str)).toBeFalsy();
    expect(validator.isFunction(num)).toBeFalsy();
    expect(validator.isFunction(arr)).toBeFalsy();
    expect(validator.isFunction(obj)).toBeFalsy();
    expect(validator.isFunction(func)).toBeTruthy();
    expect(validator.isFunction(bool)).toBeFalsy();
  });
  it('booleans', () => {
    expect(validator.isBoolean(str)).toBeFalsy();
    expect(validator.isBoolean(num)).toBeFalsy();
    expect(validator.isBoolean(arr)).toBeFalsy();
    expect(validator.isBoolean(obj)).toBeFalsy();
    expect(validator.isBoolean(func)).toBeFalsy();
    expect(validator.isBoolean(bool)).toBeTruthy();
  });
});

describe('Validator Module evaluates basic schema', () => {
  it('isValid()', () => {
    const testRecord = {};
    for (let field in schema) {
      switch (schema[field].type) {
        case 'boolean':
          testRecord[field] = faker.random.boolean();
          break;
        case 'number':
          testRecord[field] = faker.random.number();
          break;
        case 'string':
          testRecord[field] = faker.random.word();
          break;
        case 'array':
          testRecord[field] = [];
          testRecord[field].push(faker.random.arrayElement());
          testRecord[field].push(faker.random.arrayElement());
          testRecord[field].push(faker.random.arrayElement());
          break;
        default:
          break;
      }
    }
    expect(validator.isValid(testRecord)).toBeTruthy();
  });
});
