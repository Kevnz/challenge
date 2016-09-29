'use strict';

var knex = require('../index');

module.exports = function tweetById(id, limit, offset) {
  return knex('tweets').where('tweet_id', id).then(function (tweets) {
    return tweets[0];
  });
};