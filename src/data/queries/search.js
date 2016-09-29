const knex = require('../index');

module.exports = function tweetsForUser(searchTerm, limit, offset) {
  // put paging information in object to return
  const results = {
    limit,
    offset
  };
  // first count the tweets that match the query
  return knex('tweets')
    .count('tweet_id')
    .where('text', 'like', `%${searchTerm}%`)
    .then(count => {
      results.count = count[0]["count(`tweet_id`)"];
      return null;
    })
    .then(()=> {
      // get just one page of results
      return knex.select()
        .from('tweets')
        .where('text', 'like', `%${searchTerm}%`)
        .orderBy('created_at', 'asc')
        .limit(limit)
        .offset(offset);
    })
    .then(tweets => {
      results.tweets = tweets;
      // return full object with page of tweets and offset and limit info
      return results;
    });
};
