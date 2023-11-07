//exporting the Homepage controller
const Student = require('../models/student');
const User = require('../models/user');

module.exports.HomePage = function(req, res){
    return res.render('homepage', {
        title : 'Homepage'
    });
}

module.exports.DashBoard = function(req, res){ 
    return res.render('dashboard', {
        title : 'Dashboard'
    });
}