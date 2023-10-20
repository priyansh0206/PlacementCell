//exporting the Users controller
module.exports.signIn = function(req, res){
    res.render('users-sign-in', {
        title : 'User SignIn'
    });
}

module.exports.signUp = function(req, res){
    res.render('users-sign-up', {
        title : 'User SignUp'
    });
}

module.exports.profile = function(req, res){
    res.render('profile', {
        title : 'User Profile'
    });
}