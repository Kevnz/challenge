'use strict';

var search = require('../data/queries/search');
module.exports = function tweetsThatMatchTextMiddleware(req, res, next) {
  var limit = 50;
  var page = req.query.page || 0;
  var offset = limit * page;
  search(req.query.q, limit, offset).then(function (result) {
    res.locals.results = result;
    next();
  }).catch(function (err) {
    next(err);
  });
};