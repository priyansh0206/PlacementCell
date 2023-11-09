const Student = require('../models/student');
const User = require('../models/user');

module.exports.studentProfile = async function(req, res){
    const student = await Student.find({});
    const user = await User.find({});
    // console.log(res.locals.user);
    return res.render('student-profile', {
        title : 'Student Profile',
        student: student,
        user: user,
        locals : res.locals
    });
}

module.exports.createStudent = async function (req, res) {
    try {
        const mentorName = await User.findById(req.body.Mentor);
        const student = await Student.create({
            name: req.body.Name,
            courseName: req.body.Course,
            mentorName: mentorName.firstName + ' ' + mentorName.lastName,
            mentorID: req.body.Mentor,
            email: req.body.Email,
            dob: req.body.DOB,
            grades: req.body.Grades,
            address: req.body.Address,
            city: req.body.City,
            pincode: req.body.Pincode
        });
        console.log("Student created is...", student);
        req.flash('success', 'Student Added Successfully !');
        return res.redirect('/students/profile');
    } catch (error) {
        if(error.code === 11000){
            req.flash('error', 'Provided student email already exists !');
            return res.redirect('back');
        }
        req.flash('error', 'Something went wrong, Please try again !');
        return res.redirect('back');
    }
}

module.exports.deleteStudent = async function(req, res){
    try {
        await Student.deleteOne({_id: req.params.id});
        req.flash('success', 'Student Deleted Successfully !');
        return res.redirect('/students/profile');
    } catch (error) {
        req.flash('error', 'Something went wrong, Please try again !');
        return res.redirect('back');
    }
}

module.exports.updateInterviews = async function(req, res){
    console.log(req.body);
}