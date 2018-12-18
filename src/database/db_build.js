const fs = require('fs');
const path = require('path');
const dbConnection = require('./db_connection');

fs.readFile(path.join(__dirname, 'db_build.sql'), 'utf8', (readFileError, file) => {
  if (readFileError) {
    // eslint-disable-next-line no-console
    console.log('Filed to read SQL file, ERROR:: ', readFileError);
  } else {
    dbConnection.query(file, (queryError) => {
      if (queryError) {
        // eslint-disable-next-line no-console
        console.log('Filed to run SQL query, ERROR:: ', queryError);
      } else {
        // eslint-disable-next-line no-console
        console.log('SUCCESS');
      }
    });
  }
});
