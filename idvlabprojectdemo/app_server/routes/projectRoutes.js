var express = require('express');
var router = express.Router();
var controller = require('../controller/projectController');
router.get('/',controller.project);
router.post('/',controller.projectPost);

module.exports= router; 