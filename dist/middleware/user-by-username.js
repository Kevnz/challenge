'use strict';

var userByUsername = require('../data/queries/user-by-username');
module.exports = function userByUsernameMiddleware(req, res, next) {
  userByUsername(req.params.user_name).then(function (result) {
    res.locals.results = result;
    next();
  }).catch(function (err) {
    next(err);
  });
};