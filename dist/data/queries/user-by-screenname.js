'use strict';

var knex = require('../index');

module.exports = function userByScreenname(screenname) {
  return knex('tweets').select('user_name', 'screen_name').where('screen_name', screenname).limit(1).then(function (results) {
    return results[0];
  });
};