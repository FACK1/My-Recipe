const dbConnection = require('../database/db_connection');

const addRecipe = (recipe, cb) => {
  const addRecipeQuery = 'INSERT INTO recipes (name, recipe, img_url, type) VALUES ($1, $2, $3, $4) RETURNING id;';
  dbConnection.query(
    addRecipeQuery,
    [recipe.name, recipe.recipe, recipe.imgUrl, recipe.type],
    (queryError, result) => {
      if (queryError) {
        cb(queryError);
      } else {
        cb(null, result);
      }
    },
  );
};

module.exports = { addRecipe };
