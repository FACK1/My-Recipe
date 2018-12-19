const dbConnection = require('../database/db_connection.js');


const getRecipes = () => dbConnection.query('SELECT * FROM recipes;')
  .then(res => res.rows)
  .catch((err) => {
    console.log({ err });
  });

module.exports = {
  getRecipes,
};
