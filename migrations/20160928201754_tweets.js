/*
 Create the table to hold the tweets
 */
exports.up = function (knex) {
  return knex.schema
    .createTable('tweets', (t) => {

      t.integer('favorite_count').notNullable();
      t.timestamp('created_at').notNullable();
      t.boolean('is_retweet').notNullable();
      t.bigInteger('tweet_id').primary();
      t.string('screen_name').notNullable();
      t.text('text', 'longtext').notNullable();
      t.integer('retweet_count').notNullable();
      t.string('user_name').notNullable();
    });
};

exports.down = function (knex) {
  return knex.schema.dropTable('tweets');
};

