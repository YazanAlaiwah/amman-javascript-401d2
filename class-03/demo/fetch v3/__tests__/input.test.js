'use strict';
const minimist = require('minimist');
const Input = require('../lib/input.js');
jest.mock('minimist');
minimist.mockImplementation(() => {
  return {
    u: 'http://www.google.com',
    m: 'POST',
    b: 'testBody',
    h: 'hi',
  };
});
describe('INPUT MODULE', () => {
  describe('getMethod()', () => {
    it('default to GET when its called with no method', () => {
      const options = new Input();
      expect(options.getMethod()).toEqual('GET');
    });
    it('default to GET when its called with invalid method', () => {
      const options = new Input();
      expect(options.getMethod('mahmoud')).toEqual('GET');
    });
    it('uses the right methods when specified', () => {
      const options = new Input();
      expect(options.getMethod(options.method)).toEqual(options.method);
      expect(options.getMethod('POST')).toEqual('POST');
      expect(options.getMethod('GET')).toEqual('GET');
      expect(options.getMethod('PUT')).toEqual('PUT');
      expect(options.getMethod('PATCH')).toEqual('PATCH');
      expect(options.getMethod('DELETE')).toEqual('DELETE');
    });
  });
  describe('getURL()', () => {
    it('return undefined when url is not specified', () => {
      const options = new Input();
      expect(options.getURL()).toBeUndefined();
    });
    it('return undefined when url is invalid', () => {
      const options = new Input();
      expect(options.getURL('foo')).toBeUndefined();
    });
    it('return localhost when port is provided', () => {
      const options = new Input();
      expect(options.getURL(':3000')).toEqual('http://localhost:3000');
    });
    it('return formatted URL when URL is provided', () => {
      const options = new Input();
      const url = options.url;
      expect(options.getURL(url)).toEqual(url);
    });
  });
  describe('getBody()', () => {
    it('return undefined when input is not specified', () => {
      const options = new Input();
      expect(options.getBody()).toBeUndefined();
    });
    it('returns JSON when stringified obj is specified', () => {
      const options = new Input();
      const obj = { name: 'mahmoud' };
      expect(options.getBody(JSON.stringify(obj))).toEqual(obj);
    });
    it('returns string when string is specified', () => {
      const options = new Input();
      const str = 'mahmoud';
      expect(options.getBody(str)).toEqual(str);
    });
  });

  describe('valid()', () => {
    it('respects a proper object', () => {
      const options = new Input();
      expect(options.valid()).toBeTruthy();
    });
    it('reject invalid object', () => {
      const options = new Input();
      options.url = undefined;
      expect(options.valid()).toBeFalsy();
    });
  });
});
