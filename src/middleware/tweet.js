const tweetById = require('../data/queries/tweet');
module.exports = function tweetByIdMiddleware(req, res, next) {
  tweetById(req.params.id)
    .then(result => {
      res.locals.results = result;
      next();
    })
    .catch(err => {
      next(err);
    });
};
