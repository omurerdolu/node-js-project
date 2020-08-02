var path = require('path');
var express = require('express');
var getUser = require('../models/users');
const userCreate = require('../models/users');
//var router = express.Router();

module.exports.userList = function(req,res){
   userCreate.find(function(err,results){
      res.render('userList2',{users:results});
   })
  
}
