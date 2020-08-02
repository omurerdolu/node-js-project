var express = require('express');
var router = express.Router();
var controller = require('../controller/HomeController');
router.get('/',controller.index);
router.get('/login',controller.login);
router.get('/signup',controller.signup);



module.exports= router;