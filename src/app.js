const path = require('path');
const express = require('express');
const exphbs = require('express-handlebars');// 1
const setData = require('./queries/set');
const queries = require('./queries/get.js');
const helpers = require("./views/helpers/helper")
const validate = require('./services/validate');
const valdations = require('./services/validations');

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
    helpers
  }),
);

app.get('/', (req, res) => {
  queries.getRecipes()
    .then((recipeArray) => {
      const data = {
        title: 'Recipes',
        recipes: recipeArray,
      };
      res.render('home', data);
    });
});


app.post('/recipe/add', validate(valdations.addRecipeValidation) ,(req, res) => {
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
      console.log('SET DATA ERROR : ', err);
    } else {
      res.redirect('/');
    }
  });
});

module.exports = app;
