//setting up the express and the Router function to routes the views
const express = require('express');
const router = express.Router();
const passport =  require('passport');

//variable for the controller path
const controller = require('../controllers/index');

//router get and post functions for the routing
router.get('/',  controller.HomePage);
router.get('/dashboard', passport.checkAuthentication, controller.DashBoard);

//for using the routes of other routing files
router.use('/users', require('./users'));
router.use('/students', require('./students'));
router.use('/jobs', require('./jobs'));

//exporting the router to index file of root folder
module.exports = router;