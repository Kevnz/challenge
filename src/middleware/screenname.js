const screenname = require('../data/queries/screenname');
module.exports = function tweetsByScreenNameMiddleware(req, res, next) {
  const limit = 50;
  const page = req.query.page || 0;
  const offset = limit * page;
  screenname(req.params.screen_name, limit, offset)
    .then(result => {
      res.locals.results = result;
      next();
    })
    .catch(err => {
      next(err);
    });
};
