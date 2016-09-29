const usernames = require('../data/queries/username');
module.exports = function tweetsByUsernameMiddleware(req, res, next) {
  const limit = 50;
  const page = req.query.page || 0;
  const offset = limit * page;
  usernames(req.params.user_name, limit, offset)
    .then(result => {
      res.locals.results = result;
      next();
    })
    .catch(err => {
      next(err);
    });
};
