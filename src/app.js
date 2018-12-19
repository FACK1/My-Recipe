const path = require('path');
const express = require('express');
const exphbs = require('express-handlebars');// 1
const setData = require('./queries/set');
const getData = require('./queries/get.js');
const validate = require('./services/validate');
const valdations = require('./services/validations');
const helpers = require('./views/helpers/helper');


const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static(path.join(__dirname, '..', 'public')));

app.set('views', path.join(__dirname, 'views'));// 2
app.set('view engine', 'hbs');// 3
// 4.
app.engine(
  'hbs',
  exphbs({
    extname: 'hbs',
    layoutsDir: path.join(__dirname, 'views', 'layouts'),
    defaultLayout: 'main',
    helpers,
  }),
);

app.get('/', (req, res, next) => {
  getData.getRecipes()
    .then((recipeArray) => {
      const data = {
        title: 'Recipes',
        recipes: recipeArray,
      };
      res.render('home', data);
    })
    .catch((getDataError) => {
      next(getDataError);
    });
});


app.post('/recipe/add', validate(valdations.addRecipeValidation), (req, res, next) => {
  /* eslint-disable */
  const {
    name, recipe, img_url, type,
  } = req.body;
  /* eslint-enable */
  const recipeObj = {
    name, recipe, img_url, type,
  };
  setData.addRecipe(recipeObj, (err) => {
    if (err) {
      next(err);
    } else {
      res.redirect('/');
    }
  });
});

app.get('/recipe/:recipe_id', (req, res, next) => {
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
});

app.use((error, req, res, next) => { // eslint-disable-line no-unused-vars
  res.status(500).render('serverError', { error });
});

module.exports = app;
