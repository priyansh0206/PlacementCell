//setting up the express and the Router function to routes the views
const express = require('express');
const router = express.Router();
const passport = require('passport');

//variable for the controller path
const controller = require('../controllers/users');

//router get and post functions for the routing
router.get('/sign-in', controller.signIn);
router.get('/sign-up', controller.signUp);
router.get('/profile', controller.profile);

router.post('/create-user', controller.createUser);
router.post('/update-user/:id', controller.updateUser);
router.post('/update-profile/:id', controller.updateProfile);

router.post('/create-session', passport.authenticate('local', {failureRedirect: '/users/sign-in'}), controller.createSession);
router.get('/delete-session', controller.deleteSession);
//exporting the router to index file of routes folder
module.exports = router;