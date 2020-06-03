'use strict';
const { server } = require('../lib/server.js');
const supergoose = require('@code-fellows/supergoose');
const mockRequest = supergoose(server);

describe('Food API', () => {
  it('can post()', () => {
    const obj = { name: 'apple', calories: 100, type: 'FRUIT' };
    return mockRequest
      .post('/api/v1/food')
      .send(obj)
      .then((data) => {
        const record = data.body; // _id
        Object.keys(obj).forEach((key) => {
          expect(record[key]).toEqual(obj[key]);
        });
      });
  });
  it('can get()', () => {
    const obj = { name: 'orange', calories: 100, type: 'FRUIT' };
    return mockRequest
      .post('/api/v1/food')
      .send(obj)
      .then((data) => {
        return mockRequest.get('/api/v1/food').then((result) => {
          Object.keys(obj).forEach((key) => {
            expect(result.body[1][key]).toEqual(obj[key]);
          });
        });
      });
  });
});
