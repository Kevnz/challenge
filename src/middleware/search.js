const search = require('../data/queries/search');
module.exports = function tweetsThatMatchTextMiddleware(req, res, next) {
  const limit = 50;
  const page = req.query.page || 0;
  const offset = limit * page;
  search(req.query.q, limit, offset)
    .then(result => {
      res.locals.results = result;
      next();
    })
    .catch(err => {
      next(err);
    });
};
