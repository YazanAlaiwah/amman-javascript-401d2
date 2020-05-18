// const http = {};

// http.fetch = function (opts) {
//   if (opts) {
//     console.log('Fetching', opts.url);
//     console.log('Method', opts.method);
//   }
// };

// module.exports = http;

class HTTP {
  fetch(opts) {
    if (opts) {
      const fakeResult = {
        count: 2,
        results: [{ name: 'mahmoud' }, { name: 'ahmad' }],
      };
      this.render(fakeResult);
    }
  }
  render(results) {
    console.log(results);
  }
}

module.exports = HTTP;
