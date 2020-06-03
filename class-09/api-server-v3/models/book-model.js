const bookSchema = require('./book-schema.js');
const Model = require('./model.js');

class Books extends Model {
  constructor() {
    super(bookSchema);
  }
}

module.exports = new Books(bookSchema);
