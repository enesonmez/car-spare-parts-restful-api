var express = require('express');
var router = express.Router();

var auth = require('../controller/auth_controller')


router.post('/', auth.jwtAuth);

module.exports = router;
