# Intro to Objection and Knex Clinic

We've been hosting a weekly gaming session for friends and have amassed a ton of boardgames! We need a better way to organize them so we can keep track of all the games we currently have. Time to put those new database skills to the test!

### Setup

Clone down the `main` branch to get the starter code.

All the React code has been provided, but it will be up to us set up the database and API endpoints to respond to the requests coming in from the `BoardGamesIndex` and `BoardGamesShow` components.

### Goals

- Create a table for `boardgames`. The `title`, `minimum amount of players`, and `maximum amount of players` are required.
- Now let's add an optional `description` column to the `boardgames` table in another migration.
- Work in the `repl` with `yarn run console` from within the `server` folder in your terminal
- The `fetch` statements have already been set up and will not need to be edited. Add the correct API endpoints that each `fetch` is looking for.
- Make sure you are now returning a `json` object at these endpoints!
