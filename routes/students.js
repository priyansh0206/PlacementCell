//setting up the express and the Router function to routes the views
const express = require('express');
const router = express.Router();
const passport =  require('passport');

//variable for the controller path
const controller = require('../controllers/students');

//router get and post functions for the routing
router.get('/profile', passport.checkAuthentication, controller.studentProfile);
router.post('/create-student', passport.checkAuthentication, controller.createStudent);
router.get('/delete-student/:id', passport.checkAuthentication, controller.deleteStudent);
router.post('/update-interviews', passport.checkAuthentication, controller.updateInterviews);

//exporting the router to index file of routes folder
module.exports = router;