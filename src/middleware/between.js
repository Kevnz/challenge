const betweenTweets = require('../data/queries/between');
module.exports = function tweetsBetweenMiddleware(req, res, next) {
  const limit = 50;
  const page = req.query.page || 0;
  const offset = limit * page;
  const startDate = req.query.start || '2016-09-19 07:25:37';
  const endDate = req.query.end || '2016-09-19 13:02:01';

  betweenTweets(startDate, endDate, limit, offset)
    .then(result => {
      res.locals.results = result;
      next();
    })
    .catch(err => {
      next(err);
    });
};
