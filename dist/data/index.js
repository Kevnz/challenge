'use strict';

var config = require('xtconf')();
var knex = require('knex')(config.get('database-connection'));

module.exports = knex;