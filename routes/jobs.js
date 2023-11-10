//setting up the express and the Router function to routes the views
const express = require('express');
const router = express.Router();
const passport =  require('passport');

//variable for the controller path
const controller = require('../controllers/jobs');

//router get and post functions for the routing
router.get('/portal', controller.jobPortal);
router.post('/create-interview', passport.checkAuthentication, controller.createInterview);
router.get('/delete-interview/:id', passport.checkAuthentication, controller.deleteInterview);

//exporting the router to index file of routes folder
module.exports = router;