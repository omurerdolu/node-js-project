const express =  require('express');
const mongoose =  require('mongoose');
const users = require('../users');
const route = express.route();

route.post('/',(req,res)=>{
const{name,surname} = req.body;
let user ={};
user.name = name;
user.surname = surname;
let userModel = new users(user);
await userModel.save();
res.json(userModel);


});