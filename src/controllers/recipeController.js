const getData = require('../queries/get');
const setData = require('../queries/set');

const getRecipeRouter = (req, res, next) => {
  getData.getRecipeById(req.params.recipe_id, (getError, recipeDetails) => {
    if (getError) {
      next('500');
    } else {
      try {
        const data = {
          title: 'Recipe',
          recipe: recipeDetails,
        };
        res.render('recipe', data);
      } catch (e) {
        next('500');
      }
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
      next('500');
    } else {
      res.redirect('/');
    }
  });
};

module.exports = {
  getRecipeRouter,
  addRecipe,
};
