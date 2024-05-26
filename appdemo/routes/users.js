var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send('respond with a resource');
});

// GET users/cool.
router.get('/cool', function (req, rsp, next) {
    rsp.send("I'm George, I'm cool!");
});

module.exports = router;
