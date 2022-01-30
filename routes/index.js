var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
    res.status(200).send({
        api: "car spares",
        endpoints: ["get  /api/token", "get  /api/spares"],
    });
});

module.exports = router;
