const passport = require('passport');

const LocalStrategy = require('passport-local').Strategy;

const User = require('../models/user');

//authentication using passport
passport.use(new LocalStrategy(
    {
        usernameField: 'username',
        passReqToCallback: true
    },
    async function (req, username, password, done) {
        try {
            // console.log("heremain");
            const user = await User.findOne({ username: username });
            if (!user || user.password !== password) {
                req.flash('error','Invalid Username / Password');
                // console.log("here2");
                return done(null, false);
            }

            return done(null, user);
        } catch (err) {
            req.flash('error', err);
            // console.log("here");
            return done(err);
        }
    }
));

passport.serializeUser(function(user,done){
    done(null, user.id);
});

passport.deserializeUser(async function(id, done){
    try {
        const user = await User.findById(id);
        
        if (!user) {
            console.log("User not found");
            return done(null, false);
        }

        return done(null, user);
    } catch (err) {
        console.error("Error in finding the user --> Passport:", err);
        return done(err);
    }
});

//for checking the user is authenticated or not
passport.checkAuthentication = function(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    return res.redirect('/users/sign-in');
}

//for setting up the authenticated user
passport.setAuthenticatedUser = function(req, res, next){
    if(req.isAuthenticated()){
        res.locals.user = req.user;
    }
    next();
}



module.exports= passport;