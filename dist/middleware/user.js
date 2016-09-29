'use strict';

var tweetById = require('../data/queries/tweet');
module.exports = function tweetByIdMiddleware(req, res, next) {
  tweetById(req.params.id).then(function (result) {
    res.locals.results = result;
    next();
  }).catch(function (err) {
    next(err);
  });
};