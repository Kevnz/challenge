'use strict';

var betweenTweets = require('../data/queries/between');
module.exports = function tweetsBetweenMiddleware(req, res, next) {
  var limit = 50;
  var page = req.query.page || 0;
  var offset = limit * page;
  var startDate = req.query.start || '2016-09-19 07:25:37';
  var endDate = req.query.end || '2016-09-19 13:02:01';

  betweenTweets(startDate, endDate, limit, offset).then(function (result) {
    res.locals.results = result;
    next();
  }).catch(function (err) {
    next(err);
  });
};