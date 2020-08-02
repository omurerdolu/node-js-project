const mongoose = require('mongoose');
const project = new mongoose.Schema({
    yourName:{
    type:String

},
projectName:{
    type:String

},
projectPhone:{
    type:String

},projectDescription:{
    type:String

}


});

var projectCreate = mongoose.model('projectCreate',project);

module.exports = projectCreate;
