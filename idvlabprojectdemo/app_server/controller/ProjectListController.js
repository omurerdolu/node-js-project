const projectCreate = require('../models/projects')
module.exports.projectList = function(req,res){
   
   projectCreate.find(function(err,results){
    res.render('projectList',{users:results});
   });
}