const db = require('../util/database');

module.exports = class Members {
  constructor() {}

  static fetchAll() {
    return db.execute('SELECT * FROM members');
  }
};
