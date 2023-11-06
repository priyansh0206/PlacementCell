//variable for accessing the User Modal
const User = require('../models/user');


//exporting the Users controller
module.exports.signIn = function (req, res) {
    return res.render('users-sign-in', {
        title: 'User SignIn'
    });
}

module.exports.signUp = function (req, res) {
    return res.render('users-sign-up', {
        title: 'User SignUp'
    });
}

module.exports.profile = function (req, res) {
    return res.render('profile', {
        title: 'User Profile'
    });
}

module.exports.createUser = async function (req, res) {
    try {
        const user = await User.create({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            username: req.body.username,
            password: req.body.password
        });
        console.log("User created is...", user);
        req.flash('success', 'User Account Created Successfully !');
        return res.redirect('/users/sign-in');
    } catch (error) {
        if(error.code === 11000){
            req.flash('error', 'User Email or Username Already exists !');
            return res.redirect('back');
        }
        req.flash('error', 'Something went wrong, Please try again !');
        return res.redirect('back');
    }
}