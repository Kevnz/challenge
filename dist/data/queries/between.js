'use strict';

var knex = require('../index');

module.exports = function tweetsForUser(start, end, limit, offset) {
  // paging information
  var results = {
    limit: limit,
    offset: offset
  };
  // query to get total number of tweets that match
  return knex('tweets').count('tweet_id').whereBetween('created_at', [start, end]).then(function (count) {
    results.count = count[0]["count(`tweet_id`)"];
    return null;
  }).then(function () {
    // query to get page of tweets that match
    return knex.select().from('tweets').whereBetween('created_at', [start, end]).orderBy('created_at', 'asc').limit(limit).offset(offset);
  }).then(function (tweets) {
    results.tweets = tweets;
    return results;
  });
};