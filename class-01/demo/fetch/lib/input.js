'use strict';
const isUrl = require('is-url');
const minimist = require('minimist');

/**
 *  sample input would be
 *  node index.js --m "GET" --u "https://www.google.com"
 *
 */
function Input() {
  console.log('this is the row argv', process.argv, process.argv.slice(2));
  const argv = minimist(process.argv.slice(2));
  console.log('minimist()', argv);
  console.log(argv[Object.keys(argv)[1]]);
  this.method = this.getMethod(argv.m || argv.method);
  this.url = this.getURL(argv.u);
}
/**
 * method = GET | POST |PUT|PATCH |DELETE |(asdasd => GET)
 */
Input.prototype.getMethod = function (method) {
  const vaildMethods = /get|post|put|patch|delete/i;
  return vaildMethods.test(method) ? method : 'GET';
};
Input.prototype.getURL = function (url) {
  return isUrl(url) ? url : undefined;
};

module.exports = Input;
