'use strict';
const { server } = require('../../lib/server.js');
const supertest = require('supertest');
const mockRequest = supertest(server);

describe('sever', () => {
  it('should respond with 404 on an invalid route', () => {
    return mockRequest.get('/401-class').then((results) => {
      expect(results.status).toBe(404);
    });
  });
  it('should respond with 404 on an invalid method', () => {
    return mockRequest.delete('/fruit').then((results) => {
      expect(results.status).toBe(404);
    });
  });
  it('should respond with 200 on /api/v1/food', () => {
    return mockRequest.get('/api/v1/food').then((results) => {
      expect(results.status).toBe(200);
    });
  });
});
