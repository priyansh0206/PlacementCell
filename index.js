// initializing the express in project and setting up port
const express = require('express');
const port = 8000;

//variable app for using the express
const app = express();

app.use(express.urlencoded());
//setup the views engine
app.set('view engine', 'ejs');
app.set('views', './views');

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