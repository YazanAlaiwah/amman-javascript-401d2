'use strict';
const HTTP = require('../lib/http.js');

jest.spyOn(global.console, 'log');

describe('HTTP Module', () => {
  it('does nothing when fetch() is called with invalid options', () => {
    const http = new HTTP();
    http.fetch();
    expect(console.log).not.toHaveBeenCalled();
  });
  it('logs options when fetch() with options', () => {
    const http = new HTTP();
    http.fetch({ url: 'https://www.google.com', method: 'POST' });
    expect(console.log).toHaveBeenCalled();
  });
});
