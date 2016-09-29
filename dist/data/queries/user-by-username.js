'use strict';

var knex = require('../index');

module.exports = function userByUsername(username) {
  return knex('tweets').select('user_name', 'screen_name').where('user_name', username).limit(1).then(function (results) {
    return results[0];
  });
};