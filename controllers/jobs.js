const Interview = require('../models/interview');

module.exports.jobPortal = function(req, res){
    return res.render('jobs-portal', {
        title : 'Jobs Portal'
    });
}

module.exports.createInterview = async function (req, res) {
    try {
        // const mentorName = await User.findById(req.body.Mentor);
        const interview = await Interview.create({
            company: req.body.Company,
            requirement: req.body.Requirement,
            email: req.body.Email,
            date: req.body.Date,
            openings: req.body.Openings,
            location: req.body.Location,
        });
        console.log("Interview created is...", interview);
        req.flash('success', 'Interview Added Successfully !');
        return res.redirect('/dashboard');
    } catch (error) {
        req.flash('error', 'Something went wrong, Please try again !');
        console.log(error);
        return res.redirect('back');
    }
}