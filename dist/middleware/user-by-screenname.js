'use strict';

var userByScreenname = require('../data/queries/user-by-screenname');
module.exports = function userByScreennameMiddleware(req, res, next) {
  userByScreenname(req.params.screen_name).then(function (result) {
    res.locals.results = result;
    next();
  }).catch(function (err) {
    next(err);
  });
};