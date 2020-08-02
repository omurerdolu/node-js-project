var express = require('express');
var router = express.Router();
var controller = require('../controller/ProjectListController');
router.get('/',controller.projectList);

module.exports= router; 