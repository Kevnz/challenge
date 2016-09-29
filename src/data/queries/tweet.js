const knex = require('../index');

module.exports = function tweetById(id, limit, offset) {
  return knex('tweets')
    .where('tweet_id', id)
    .then(tweets => {
      return tweets[0];
    });
};
