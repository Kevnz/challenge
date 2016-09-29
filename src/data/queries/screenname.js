const knex = require('../index');

module.exports = function tweetsForUser(screenname, limit, offset) {
  // paging information
  const results = {
    limit,
    offset
  };
  // count of tweets that match
  return knex('tweets')
    .count('screen_name')
    .where('screen_name', screenname)
    .then(count => {
      results.count = count[0]["count(`screen_name`)"];
      return null;
    })
    .then(()=> {
      // just the current page of data
      return knex.select()
        .from('tweets')
        .where('screen_name', screenname)
        .orderBy('created_at', 'asc')
        .limit(limit)
        .offset(offset);
    })
    .then(tweets => {
      results.tweets = tweets;
      return results;
    });
};
