const userByUsername = require('../data/queries/user-by-username');
module.exports = function userByUsernameMiddleware(req, res, next) {
  userByUsername(req.params.user_name)
    .then(result => {
      res.locals.results = result;
      next();
    })
    .catch(err => {
      next(err);
    });
};
