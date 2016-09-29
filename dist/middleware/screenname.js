'use strict';

var screenname = require('../data/queries/screenname');
module.exports = function tweetsByScreenNameMiddleware(req, res, next) {
  var limit = 50;
  var page = req.query.page || 0;
  var offset = limit * page;
  screenname(req.params.screen_name, limit, offset).then(function (result) {
    res.locals.results = result;
    next();
  }).catch(function (err) {
    next(err);
  });
};