//exporting the Homepage controller
const Student = require('../models/student');
const User = require('../models/user');
const Interview = require('../models/interview');



module.exports.HomePage = function(req, res){
    return res.render('homepage', {
        title : 'Homepage'
    });
}

module.exports.DashBoard = async function(req, res){ 
    const student = await Student.find({});
    const interview = await Interview.find({});
    return res.render('dashboard', {
        title : 'Dashboard',
        student: student,
        interview: interview
    });
}