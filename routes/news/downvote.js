module.exports = function(req, res, next) {
  var User = require('../models/user.js');
  var News = require('../models/news.js');

  if (!User.currentUser() || Object.keys(User.currentUser()).length === 0) {
    res.send({ err: 'Login first to downvote a news.' });
  } else {
    News.downvote(req.body.news, function(err) {
      res.send({ err: err });
    });
  }
}
