'use strict';

var retweets = require('../data/queries/retweets');
module.exports = function tweetsRetweetCountMiddleware(req, res, next) {
  var limit = 50;
  var page = req.query.page || 0;
  var offset = limit * page;
  retweets(req.params.count, limit, offset).then(function (result) {
    res.locals.results = result;
    next();
  }).catch(function (err) {
    next(err);
  });
};