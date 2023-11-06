//exporting the Homepage controller
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