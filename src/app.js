const path = require('path')
const express = require('express');
const recipesData = require('../data.json');
const exphbs = require('express-handlebars');//1
const app = express();

app.use(express.static(path.join(__dirname, '..', 'public')));
app.set('views',path.join(__dirname,'views'));//2
app.set('view engine','hbs');//3
//4.
app.engine(
  'hbs',
  exphbs({
    extname:'hbs',
    layoutsDir:path.join(__dirname,'views','layouts'),
    defaultLayout:'main'
  })
)
app.get('/', (req, res) => {
  res.render("home", {
    title: 'Recipes',
    recipes:recipesData,
  })
})
module.exports = app
