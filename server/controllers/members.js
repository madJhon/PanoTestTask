const Members = require('../models/members');

exports.getMembers = (req, res, next) => {

  Members.fetchAll().then(data => {
    res.status(200).json(data[0]);
  });
}
