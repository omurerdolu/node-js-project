var express = require('express');
var router = express.Router();
var controller = require('../controller/SignupController');
router.get('/',controller.signup);
router.post('/signup',controller.signupPost);
module.exports= router; 