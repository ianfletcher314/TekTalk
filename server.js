const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const routes = require('./controllers');
const sequelize = require('./config/connection');
const helpers = require('./utils/helpers');

const app = express();
const PORT = process.env.PORT || 3001;

// sets up handlebars
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars')

// routing for handlebars 
app.get('/', (req,res) => {

  res.render('home')
})
app.get('/dashboard', (req,res) => {

  res.render('dashboard')
})
app.get('/comment', (req,res) => {

  res.render('comment')
})
app.get('/newpost', (req,res) => {

  res.render('newpost')
})
app.get('/home', (req,res) => {

  res.render('home')
})


sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});
