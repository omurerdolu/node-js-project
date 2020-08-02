var path = require('path');
var express = require('express');
const projectCreate = require('../models/projects');
const bodyParser = require('body-parser');
//var router = express.Router();

module.exports.project = function(req,res){
    res.render('project');
   // projectCreate.find(function(err,results){
     // res.render('project',{projects:results});
 //  })
  
}

module.exports.projectPost = function(req,res){
  
  var projectNew = new projectCreate({
    yourName : req.body.yourName,
    projectName : req.body.projectName,
    projectPhone : req.body.projectPhone,
    projectDescription : req.body.projectDescription

  });

  projectNew.save();
  console.log(req.body);

  res.render('project');
}
