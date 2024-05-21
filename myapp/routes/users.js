var express = require('express');
var router = express.Router();

/* GET users listing. */
// router.get('/', function(req, res, next) {
// router for /user. /user is sepecified in app.js
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

//router for /user/cool
router.get('/cool', function(req, res, next) {
  res.send('respond with a resource -- COOL!');
});

module.exports = router;
