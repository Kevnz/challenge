'use strict';

var usernames = require('../data/queries/username');
module.exports = function tweetsByUsernameMiddleware(req, res, next) {
  var limit = 50;
  var page = req.query.page || 0;
  var offset = limit * page;
  usernames(req.params.user_name, limit, offset).then(function (result) {
    res.locals.results = result;
    next();
  }).catch(function (err) {
    next(err);
  });
};