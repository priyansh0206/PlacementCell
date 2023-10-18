//variable for the mongoose library
const mongoose = require('mongoose');

//defining the MongoDB server from which it needs to be connected
mongoose.connect('mongodb://127.0.0.1:27017/PlacementCell');

//assigning variable for Mongo Connection
const db = mongoose.connection;

//event listener for the 'error' event on the database connection
db.on('error', console.error.bind(console, 'Error in connecting the DB'));

//event listener for the 'open' event on the database connection
//The once method ensures that the event listener is triggered only once.
db.once('open', function(){
    console.log("Connection to Database Successful");
});

module.exports = db;