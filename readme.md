## Simple Challenge

Files to look at
* src/routes/api.js - http endpoint definitions
* src/middleware/*.js - middleware that gets/sets pagination info (were needed) and calls the data queries and sets results
* src/data/queries/*.js - Data queries
* importer.js - Processes the file with the tweets
* migrations/20160928201754_tweets - migration file that creates the table
* views/index.ejs

Commands to know
* npm install - installs
* npm run dev - runs the express app and restarts it when files change
* npm run build - builds the transpiled (babel is used) files and places them in the dist folder
* npm start - runs the app from the transpiled dist
* npm run migrate:run - runs the database migration
* npm run import - runs the import script

If you want to run locally MySQL must be installed and configured. To configure edit config.development.json
```javascript
{
  "database-connection": {
    "client": "mysql",
    "connection" : {
      "address" : "localhost",
      "user" : "<Your Database User>",
      "password" : "<Your Password>",
      "database" : "muz_test",
      "charset" : "utf8mb4"
    }
  }
}
```
The web app will be available at localhost:3000 and have links to show the api in use.

#### The returned results and pagination
For results that are multiple items, the json object has the offset and limit included as well as the total count and the current page of results. You can specify the current page (zero based) by passing a querystring parameter of page=<number> 
