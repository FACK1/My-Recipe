const path = require('path');
const express = require('express');
const exphbs = require('express-handlebars');// 1
//const recipesData = require('../data.json');
const setData = require('./queries/set');

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
  }),
);
app.get('/', (req, res) => {
  res.render('home', {
    title: 'Recipes',
    recipes: [{ name: 'name1', image_url: 'hhh', recipe: 'resipe1' }],
  });
});


app.post('/recipe/add', (req, res) => {
   const {name,recipe,img_url,type}= req.body;
  const recipeObj = { name, recipe, img_url, type };
  setData.addRecipe(recipeObj, (err, id) => {
    if (err) {
      console.log('SET DATA ERROR : ', err);
    } else {
      res.redirect('/');
    }
  });
});


module.exports = app;
