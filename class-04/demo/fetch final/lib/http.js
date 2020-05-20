const superagent = require('superagent');
const history = require('./models/history-collection.js');
class HTTP {
  fetch(opts) {
    if (opts) {
      return superagent(opts.method, opts.url)
        .send(opts.body)
        .then(this.render)
        .then(() => this.save(opts));
    }
  }
  render(results) {
    console.log(results);
  }
  async save(opts) {
    // const record = new History(opts);
    const record = await history.create(opts);
    return record;
  }
}

module.exports = HTTP;
