var express = require("express");
var router = express.Router();

var sparesController = require('../controller/spares_controller')


/* GET all spare. */
router.get("/", sparesController.getAllData);

module.exports = router;
