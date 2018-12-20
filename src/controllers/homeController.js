const getData = require('../queries/get.js');

const homeRouter = (req, res, next) => {
  getData.getRecipes()
    .then((recipeArray) => {
      const data = {
        title: 'Recipes',
        recipes: recipeArray,
      };
      res.render('home', data);
    })
    .catch((getDataError) => {
      next('500');
    });
};

module.exports = {
  homeRouter,
};
