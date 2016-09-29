'use strict';

var express = require('express');
var router = express.Router();
var tweetsByNameMiddlware = require('../middleware/username');
var tweetsByScreenNameMiddlware = require('../middleware/screenname');
var tweetsBetweenMiddleware = require('../middleware/between');
var searchTweetsMiddlware = require('../middleware/search');
var tweetsRetweetedMiddleware = require('../middleware/retweets');
var tweetByIdMiddleware = require('../middleware/tweet');
var userByUsernameMiddleware = require('../middleware/user-by-username');
var userByScreennameMiddleware = require('../middleware/user-by-screenname');

/*
 Using a middleware that then calls the various data query functions then have the results
 placed into the response for later use.
 */
router.get('/tweets/search', searchTweetsMiddlware, function (req, res) {
  res.send(res.locals.results);
});

router.get('/tweets/username/:user_name', tweetsByNameMiddlware, function (req, res) {
  res.send(res.locals.results);
});

router.get('/tweets/screenname/:user_name', tweetsByScreenNameMiddlware, function (req, res) {
  res.send(res.locals.results);
});

router.get('/tweets/between', tweetsBetweenMiddleware, function (req, res) {
  res.send(res.locals.results);
});

router.get('/tweets/retweeted/:count', tweetsRetweetedMiddleware, function (req, res) {
  res.send(res.locals.results);
});

router.get('/tweet/:id', tweetByIdMiddleware, function (req, res) {
  res.send(res.locals.results);
});

router.get('/user/u/:user_name', userByUsernameMiddleware, function (req, res) {
  res.send(res.locals.results);
});

router.get('/user/s/:screen_name', userByScreennameMiddleware, function (req, res) {
  res.send(res.locals.results);
});
module.exports = router;

/*
1. Find all tweets that match a given string.
2. Find all tweets by a given user name
3. Find all tweets between the given date/time
5. Find all tweets with more than x retweet counts
6. Find a tweet by tweet id
4. Find a user by user name
 */