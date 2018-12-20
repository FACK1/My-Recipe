const getData = require('../queries/get');
const setData = require('../queries/set');

const getRecipeRouter = (req, res, next) => {
  getData.getRecipeById(req.params.recipe_id, (getError, recipeDetails) => {
    if (getError) {
      next(getError);
    } else {
      const data = {
        title: 'Recipe',
        recipe: recipeDetails,
      };
      res.render('recipe', data);
    }
  });
};

const addRecipe = (req, res, next) => {
  const {
    name, recipe, imgUrl, type,
  } = req.body;
  const recipeObj = {
    name, recipe, imgUrl, type,
  };
  setData.addRecipe(recipeObj, (err) => {
    if (err) {
      next(err);
    } else {
      res.redirect('/');
    }
  });
};

module.exports = {
  getRecipeRouter,
  addRecipe,
};
