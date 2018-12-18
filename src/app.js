const path = require('path');
const express = require('express');
const exphbs = require('express-handlebars');// 1
const setData = require('./queries/set');
const queries = require('./queries/get.js');

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
  queries.getRecipes()
    .then(recipeArray =>{
      const data ={
        title: 'Recipes',
        recipes: recipeArray,
      }
      res.render('home',data)
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
