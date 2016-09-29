const retweets = require('../data/queries/retweets');
module.exports = function tweetsRetweetCountMiddleware(req, res, next) {
  const limit = 50;
  const page = req.query.page || 0;
  const offset = limit * page;
  retweets(req.params.count, limit, offset)
    .then(result => {
      res.locals.results = result;
      next();
    })
    .catch(err => {
      next(err);
    });
};
