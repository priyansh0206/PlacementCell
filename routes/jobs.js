//setting up the express and the Router function to routes the views
const express = require('express');
const router = express.Router();

//variable for the controller path
const controller = require('../controllers/jobs');

//router get and post functions for the routing
router.get('/portal', controller.jobPortal);
router.post('/create-interview', controller.createInterview);

//exporting the router to index file of routes folder
module.exports = router;