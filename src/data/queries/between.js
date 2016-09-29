const knex = require('../index');

module.exports = function tweetsForUser(start, end, limit, offset) {
  // paging information
  const results = {
    limit,
    offset
  };
  // query to get total number of tweets that match
  return knex('tweets')
    .count('tweet_id')
    .whereBetween('created_at', [start, end])
    .then(count => {
      results.count = count[0]["count(`tweet_id`)"];
      return null;
    })
    .then(()=> {
      // query to get page of tweets that match
      return knex.select()
        .from('tweets')
        .whereBetween('created_at', [start, end])
        .orderBy('created_at', 'asc')
        .limit(limit)
        .offset(offset);
    })
    .then(tweets => {
      results.tweets = tweets;
      return results;
    });
};
