'use strict';

var knex = require('../index');

module.exports = function tweetsForUser(username, limit, offset) {
  // limit and offset are for paging
  var results = {
    limit: limit,
    offset: offset
  };
  // first count total tweets that match
  return knex('tweets').count('user_name').where('user_name', username).then(function (count) {
    // take total count and place in results object
    results.count = count[0]["count(`user_name`)"];
    return null;
  }).then(function () {
    // execute query to return this page of the tweets
    return knex.select().from('tweets').where('user_name', username).orderBy('created_at', 'asc').limit(limit).offset(offset);
  }).then(function (tweets) {
    results.tweets = tweets;
    return results;
  });
};