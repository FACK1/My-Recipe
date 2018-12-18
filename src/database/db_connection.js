const { Pool } = require('pg');
const url = require('url');
require('env2')('config.env');

const { DATABASE_URL } = process.env;
if (!DATABASE_URL) {
  throw Error('No DATABASE_URL in config.env file');
}

const option = {
  connectionString: DATABASE_URL,
};

const { hostname } = url.parse(process.env.DATABASE_URL);
option.ssl = (hostname !== 'localhost');

module.exports = new Pool(option);
