const mongoose = require('mongoose');
const user = new mongoose.Schema({
    fullname:{
    type:String

},
mail:{
    type:String

},
phone:{
    type:String

},
password:{
    type:String,
    required:true,
    uniqye:true


},
passwordAgain:{
    type:String,
    required:true,
    uniqye:true
}


});

var userCreate = mongoose.model('userCreate',user);

module.exports = userCreate;
