//exporting the Users controller
module.exports.signIn = function(req, res){
    res.render('users-sign-in', {
        title : 'Users SignIn'
    });
}

module.exports.SignUp = function(req, res){
    res.render('users-sign-up', {
        title : 'Users SignUp'
    });
}