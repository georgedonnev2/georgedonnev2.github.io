var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/** nothing just for demo
 * access by ip:port/users/cool
*/
router.get('/cool', function(req, res, next) {
  res.send('respond with a resource -- cool!!!');
});
module.exports = router;
