//variable for accessing the User Modal
const User = require('../models/user');
const fs = require('fs');
const path = require('path');

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
        if (error.code === 11000) {
            req.flash('error', 'User Email or Username Already exists !');
            return res.redirect('back');
        }
        req.flash('error', 'Something went wrong, Please try again !');
        return res.redirect('back');
    }
}

module.exports.updateUser = async function (req, res) {
    try {
        if (req.user.id == req.params.id) {
            const user = await User.findById(req.params.id);
            user.firstName = req.body.FirstName;
            user.lastName = req.body.LastName;
            user.email = req.body.Email;
            user.contact = req.body.Contact;
            user.empID = req.body.EmployeeID;
            await user.save();
            req.flash('success', 'Details Updated Successfully');
            return res.redirect('back');
        }
        req.flash('error', 'Authentication Error !');
        return res.redirect('back');
    } catch (error) {
        req.flash('error', 'Internal Error ! Please try again.');
        return res.redirect('back');
    }
}

module.exports.updateProfile = async function (req, res) {

    try {
        if (req.user.id == req.params.id) {
            const user = await User.findById(req.params.id);
            User.uploadedAvatar(req, res, async function (err) {
                if (err) {
                    console.log("***Multer error ***", err);
                    req.flash('error', 'Server error in uploading the profile avatar');
                    return res.redirect('back');
                }
                if (req.file) {
                    if (user.avatar && user.avatar != '/images/user_profile.png') {
                        try {
                            fs.unlinkSync(path.join(__dirname, "..", user.avatar));
                        } catch (error) {
                            req.flash('error', 'Internal Error ! Please try again.');
                            return res.redirect('back');
                        }
                    }
                    user.avatar = User.avatarPath + '\/' + req.file.filename;
                }
                await user.save();
                req.flash('success', 'Your Profile Picture updated successfully');
                return res.redirect('back');
            });
        }
    } catch (error) {
        req.flash('error', 'Internal Error ! Please try again.');
        return res.redirect('back');
    }
}

module.exports.createSession = async function (req, res) {
    req.flash('success', 'Logged in Successfully');
    return res.redirect('/dashboard');
}

module.exports.deleteSession = async function (req, res) {
    await req.logout(function (err) {
        if (err) {
            req.flash('error', 'Error in signout !');
            return res.redirect('/dashboard');
        }
        req.flash('success', 'You have logged out !');
        return res.redirect('/');
    });
}