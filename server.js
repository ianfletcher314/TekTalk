const path = require('path')
const express = require('express')
const session = require('express-session')
const exphbs = require('express-handlebars')
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const nocache = require('nocache')


const routes = require('./controllers')
const sequelize = require('./config/connection')
const helpers = require('./utils/helpers')

const hbs = exphbs.create({helpers})
const app = express();
const PORT = process.env.PORT || 3001;

// sets up handlebars
app.use(express.json())
app.use(nocache())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'public')))
app.engine('handlebars',hbs.engine ); //exphbs({defaultLayout: 'main'})
app.set('view engine', 'handlebars')

const sess = {
  secret: "pingpong",
  cookie: {maxAge:300000},
  resave: false,
  saveUnitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
}
app.use(session(sess))

// routing for handlebars 
app.use(routes);


sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});
