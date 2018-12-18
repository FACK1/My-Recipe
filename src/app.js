const path = require('path');
const express = require('express');
const exphbs = require('express-handlebars');// 1
const queries = require('./queries/get.js');

const app = express();

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
  })

});

module.exports = app;
