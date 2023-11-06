module.exports.studentProfile = function(req, res){
    return res.render('student-profile', {
        title : 'Student Profile'
    });
}