var express = require('express');
var router = express.Router();
var controller = require('../controller/LoginController');
router.get('/',controller.login);
router.post('/',controller.PostLogin);
router.get('/signup',controller.signup);
router.post('/signup',controller.PostSignup);
//router.get('/',controller.signup);
module.exports= router; 