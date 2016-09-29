const readline = require('readline');
const fs = require('fs');
const path = require('path');
const knex = require('./src/data');
const tweets = [];
// read the contents of the file line by line
const lineReader = readline.createInterface({
  input: fs.createReadStream(path.join(__dirname, './tweets/chelsea_twitter.json'))
});

// for each line insert the data into an array
lineReader.on('line', (line) => {
  const parsedTweet = JSON.parse(line.toString());
  tweets.push(parsedTweet);
});

// when finished reading file insert into database
lineReader.on('close', () => {
  // batch insert as is a very large number of tweets.
  knex.batchInsert('tweets', tweets)
    .then(() => {
      process.exit(0);
    })
    .catch((err) => {
      console.log('error', err);
      process.exit(0);
    });
});

