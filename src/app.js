const path = require('path');
const express = require('express');
const exphbs = require('express-handlebars');
const validate = require('./services/validate');
const valdations = require('./services/validations');
const helpers = require('./views/helpers/helper');
const homeController = require('./controllers/homeController');
const recipeController = require('./controllers/recipeController');


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

app.get('/', homeController.homeRouter);


app.post('/recipe/add', validate(valdations.addRecipeValidation), recipeController.addRecipe);

app.get('/recipe/:recipe_id', recipeController.getRecipeRouter);

app.use((error, req, res, next) => { // eslint-disable-line no-unused-vars
  res.status(500).render('serverError', { error });
});

module.exports = app;
