const dbConnection = require('../database/db_connection.js');


const getRecipes = () => dbConnection.query('SELECT * FROM recipes;')
  .then(res => res.rows);

const getRecipeById = (id, cb) => {
  const getRecipeByIdQuery = 'SELECT * FROM recipes WHERE id = $1;';
  dbConnection.query(getRecipeByIdQuery, [id], (queryError, result) => {
    if (queryError) {
      cb(queryError);
    } else {
      cb(null, result.rows[0]);
    }
  });
};

module.exports = {
  getRecipes,
  getRecipeById,
};
