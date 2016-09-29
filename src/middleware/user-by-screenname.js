const userByScreenname = require('../data/queries/user-by-screenname');
module.exports = function userByScreennameMiddleware(req, res, next) {
  userByScreenname(req.params.screen_name)
    .then(result => {
      res.locals.results = result;
      next();
    })
    .catch(err => {
      next(err);
    });
};
