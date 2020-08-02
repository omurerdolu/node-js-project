var path = require('path');
var express = require('express');
var usersManager = require('../models/users');


module.exports.signup = function(req,res){
   
  // res.render('signup');
   res.render('signup');

}
module.exports.login =function(req,res){
res.render('login');

}

module.exports.signupPost =function(req,res){
  var newUser = new usersManager({
    fullname :req.body.fullname,
    mail : req.body.mail,
    phone : req.body.phone,
    password : req.body.password,
    
    passwordAgain : req.body.passwordAgain
    
    
      });
      newUser.save(function(err){


      });
    
   res.render('signup');
   console.log(req.body);

 


console.log(newUser);


}

