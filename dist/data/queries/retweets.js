'use strict';

var knex = require('../index');

module.exports = function retweets(minNumberOfRetweets, limit, offset) {
  // paging info
  var results = {
    limit: limit,
    offset: offset
  };
  // total count
  return knex('tweets').count('user_name').where('retweet_count', '>=', minNumberOfRetweets).then(function (count) {
    results.count = count[0]["count(`user_name`)"];
    return null;
  }).then(function () {
    // current page of tweets
    return knex.select().from('tweets').where('retweet_count', '>=', minNumberOfRetweets).orderBy('created_at', 'asc').limit(limit).offset(offset);
  }).then(function (tweets) {
    results.tweets = tweets;
    return results;
  });
};