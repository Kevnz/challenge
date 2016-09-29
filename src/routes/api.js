const express = require('express');
const router = express.Router();
const tweetsByNameMiddlware = require('../middleware/username');
const tweetsByScreenNameMiddlware = require('../middleware/screenname');
const tweetsBetweenMiddleware = require('../middleware/between');
const searchTweetsMiddlware = require('../middleware/search');
const tweetsRetweetedMiddleware = require('../middleware/retweets');
const tweetByIdMiddleware = require('../middleware/tweet');
const userByUsernameMiddleware = require('../middleware/user-by-username');
const userByScreennameMiddleware = require('../middleware/user-by-screenname');

/*
 Using a middleware that then calls the various data query functions then have the results
 placed into the response for later use.
 */
router.get('/tweets/search', searchTweetsMiddlware, (req, res) => {
  res.send(res.locals.results);
});

router.get('/tweets/username/:user_name', tweetsByNameMiddlware, (req, res) => {
  res.send(res.locals.results);
});

router.get('/tweets/screenname/:user_name', tweetsByScreenNameMiddlware, (req, res) =>{
  res.send(res.locals.results);
});

router.get('/tweets/between', tweetsBetweenMiddleware, (req, res) => {
  res.send(res.locals.results);
});

router.get('/tweets/retweeted/:count', tweetsRetweetedMiddleware, (req, res) => {
  res.send(res.locals.results);
});

router.get('/tweet/:id', tweetByIdMiddleware, (req, res) => {
  res.send(res.locals.results);
});

router.get('/user/u/:user_name', userByUsernameMiddleware, (req, res) => {
  res.send(res.locals.results);
});

router.get('/user/s/:screen_name', userByScreennameMiddleware, (req, res) => {
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
