var express = require('express');
var router = express.Router();
var controller = require('../controller/UserListController');
router.get('/',controller.userList);

module.exports= router; 