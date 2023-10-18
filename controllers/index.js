//exporting the Homepage controller
module.exports.HomePage = function(req, res){
    res.render('homepage', {
        title : 'Homepage'
    });
}

module.exports.DashBoard = function(req, res){
    res.render('dashboard', {
        title : 'Dashboard'
    });
}