// initializing the express in project and setting up port
const express = require('express');
const port = 8000;

const cookieParser = require('cookie-parser');

//variable app for using the express
const app = express();

//variable db for calling the database connection
const db = require('./config/mongoose');

//variable for loading the SASS middleware
const sassMiddleWare = require('node-sass-middleware');

//variable for using the express layouts for enabling one page view
const expressLayouts = require('express-ejs-layouts');

//variable for using the sessions
const session = require('express-session');

//variable for using the sessions using MongoDB
const MongoStore = require('connect-mongo');

//variable for using the passport authentication
const passport = require('passport');
//variable for using the passport-local
const passLocal = require('./config/passport-local');

//variable for using the Flash Alerts
const flash = require('connect-flash');

//variable for accessing the custom middlewares
const customMware = require('./config/middleware');

app.use(express.urlencoded());
app.use(cookieParser());
//setup the SASS middleware for using the SCSS
app.use(sassMiddleWare({
    src: './assets/scss',
    dest: './assets/css',
    debug: true,
    outFile: 'extended',
    prefix: '/css'
}));
//setup the express layouts
app.use(expressLayouts);
//setup the views engine
app.set('view engine', 'ejs');
app.set('views', './views');
//setup for using the assets in ejs or views
app.use(express.static('assets'));


//setup for using the sessions in project using MongoDB
const store = MongoStore.create({
    mongoUrl: 'mongodb://127.0.0.1:27017/PlacementCell', // Replace with your MongoDB connection URL
    collectionName: 'sessions', // Optional: Specify the name of the collection (default is 'sessions')
    autoRemove: 'disabled', // Optional: Disable automatic session removal
});
//setup for using the Sessions with help of MongoStore
app.use(session({
    name: 'code_major',
    secret: 'MakeMyPlacement',
    saveUninitialized: false,
    resave: false,
    cookie: {
        maxAge: (1000 * 60 * 100)
    },
    store: store
}));
//setup the passport authentication
app.use(passport.initialize());
app.use(passport.session());

app.use(passport.setAuthenticatedUser);

//setup the flash notification for the popups
app.use(flash());
app.use(customMware.setFlash);

//setting up the host or the main page to render from the routes folder
app.use('/', require('./routes'));

//function after the server got started
app.listen(port, function(err){
    if(err){
        console.log("Error in starting the server...", err);
        return;
    }
    console.log("Server is running on Port ", port);
});