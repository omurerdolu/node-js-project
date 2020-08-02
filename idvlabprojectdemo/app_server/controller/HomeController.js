var path = require('path');
var express = require('express');
//var router = express.Router();

module.exports.index = function(req,res){
    //res.sendFile(path.join(__dirname,'app_server/views/login.ejs'));
   console.log(req.body)
   res.render('login');
}
module.exports.login = function(req,res){
    res.render('login');
}
module.exports.signup = function(req,res){
    res.render('signup');
}