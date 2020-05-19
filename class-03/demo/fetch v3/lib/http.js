const superagent = require('superagent');
const History = require('./history.js');
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
    const record = new History(opts);
    const saved = await record.save();
    return saved;
  }
}

module.exports = HTTP;
