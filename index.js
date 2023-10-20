// initializing the express in project and setting up port
const express = require('express');
const port = 8000;

//variable app for using the express
const app = express();

//variable db for calling the database connection
const db = require('./config/mongoose');

//variable for loading the SASS middleware
const sassMiddleWare = require('node-sass-middleware');

//variable for using the express layouts for enabling one page view
const expressLayouts = require('express-ejs-layouts');

app.use(express.urlencoded());
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