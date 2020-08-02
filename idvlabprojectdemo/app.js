var fs = require('fs');
var express = require('express');
var path = require('path');
var app = express ();
var ejsLayouts = require('express-ejs-layouts');
var bodyParser = require('body-parser');
//var db = require('./app_server/models/db')
//var dbCloud= require('./app_server/models/expressMongoDb')
var dbConnect= require('./app_server/models/mongoDB');
app.set('view engine','ejs')
app.set('views',path.join(__dirname,'/app_server/views'));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(ejsLayouts);
app.use('/public',express.static(path.join(__dirname,'public')));
require('./app_server/routes/RouteManager')(app);
//var Kullanici = require('./app_server/models/kullanici');




































/*var newUser = new Kullanici({
    name: 'omur',
    surname:'erdolu',
    username : 'oerdolu',
    password : '12345'
});
newUser.save(function(err){
if(err){
    console.log(err);
}
else{
    console.log('kayıt edildi');
}
});
*/
//---------------EJS Öncesi Çalışmalarım-------------------------

//var loginController = require("./app_server/controller/LoginController");
//app.use('/',loginController);
/* app.get('/',function(req,res){
  fs.readFile('index.html',function(err,data){
        res.write(data);
        res.end();
        res.sendFile(path.join(__dirname,'index.html'));
    });*/


/*var homeController = function(req,ress){
    fs.readFile('index.html',function(err,data){
        response.write(data);
        response.end();
    });


}*/
/*router["/"] =homeController;
var myServer = http.createServer(function(req, res){
    if(req.url in router)//tabloda urlnin olup olmadığını kontrol ediyou
    router[req.url](req,res);
});*/

app.listen(3000);
 
console.log("Başarılı");