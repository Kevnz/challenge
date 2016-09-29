'use strict';

var knex = require('../index');

module.exports = function tweetsForUser(screenname, limit, offset) {
  // paging information
  var results = {
    limit: limit,
    offset: offset
  };
  // count of tweets that match
  return knex('tweets').count('screen_name').where('screen_name', screenname).then(function (count) {
    results.count = count[0]["count(`screen_name`)"];
    return null;
  }).then(function () {
    // just the current page of data
    return knex.select().from('tweets').where('screen_name', screenname).orderBy('created_at', 'asc').limit(limit).offset(offset);
  }).then(function (tweets) {
    results.tweets = tweets;
    return results;
  });
};