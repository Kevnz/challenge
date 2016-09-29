const knex = require('../index');

module.exports = function retweets(minNumberOfRetweets, limit, offset) {
  // paging info
  const results = {
    limit,
    offset
  };
  // total count
  return knex('tweets')
    .count('user_name')
    .where('retweet_count', '>', minNumberOfRetweets)
    .then(count => {
      results.count = count[0]["count(`user_name`)"];
      return null;
    })
    .then(()=> {
      // current page of tweets
      return knex.select()
        .from('tweets')
        .where('retweet_count', '>=', minNumberOfRetweets)
        .orderBy('created_at', 'asc')
        .limit(limit)
        .offset(offset);
    })
    .then(tweets => {
      results.tweets = tweets;
      return results;
    });
};
