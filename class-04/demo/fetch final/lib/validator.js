'use strict';
class Validator {
  constructor(schema) {
    this.schema = schema;
  }
  isValid(data) {
    let valid = true;
    for (let fieldName in this.schema) {
      const field = this.schema[fieldName];
      const isRequired = field.required ? this.isTruthy(data[fieldName]) : true;
      const isType = fieldName.type
        ? this.isCorrectType(data[fieldName], field)
        : true;
      if (!(isRequired && isType)) {
        valid = false;
      }
    }
    return valid;
  }
  isCorrectType(input, field) {
    switch (field.type) {
      case 'string':
        return this.isString(input);
      case 'number':
        return this.isNumber(input);
      case 'array':
        return this.isArray(input);
      case 'object':
        return this.isObject(input);
      case 'boolean':
        return this.isBoolean(input);
      case 'function':
        return this.isFunction(input);
      default:
        return false;
    }
  }

  isString(input) {
    return typeof input === 'string';
  }
  isNumber(input) {
    return typeof input === 'number';
  }
  isBoolean(input) {
    return typeof input === 'boolean';
  }
  isArray(input, valueType) {
    return (
      Array.isArray(input) &&
      (valueType ? input.every((val) => typeof val === valueType) : true)
    );
  }
  isObject(input) {
    return typeof input === 'object' && !(input instanceof Array);
  }
  isFunction(input) {
    return typeof input === 'function';
  }
  isTruthy(input) {
    return !!input;
  }
}

module.exports = Validator;
