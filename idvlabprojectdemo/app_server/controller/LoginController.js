var path = require('path');
var express = require('express');
//var router = express.Router();

module.exports.login = function(req,res){
    //res.sendFile(path.join(__dirname,'app_server/views/login.ejs'));
   res.render('login');
}

module.exports.signup = function(req,res){
    //res.sendFile(path.join(__dirname,'app_server/views/login.ejs'));
   res.render('signup');
}
module.exports.userList = function(req,res){
    res.render('userList');
}
module.exports.PostLogin = function(req,res){
    console.log('login post çağırıldı');
    res.render('login');
}
module.exports.PostSignup = function(req,res){
    res.render('signup');
}







/*module.exports.deneme = function(req,res){
    res.render('normal');
}
module.exports.menu3 = function(req,res){
    res.render('menu3');
}
*/

//router.get('/',module.exports.login);
//router.get('/deneme',module.exports.deneme);


//module.exports = router;