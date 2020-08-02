var loginRoute = require("./LoginRoutes");
var HomeRoute = require('./HomeRoutes');
var signupRoute = require('./SignupRoutes');
var userList = require('./userListRoutes');
var projectPage = require('./projectRoutes');
var projectList = require('./ProjectListRoutes');

module.exports = function(app){
    app.use('/',HomeRoute);
    app.use('/login',loginRoute);
    app.use('/signup',signupRoute);
    app.use('/userlist',userList);
    app.use('/project',projectPage);
    app.use('/projectlist',projectList);
}