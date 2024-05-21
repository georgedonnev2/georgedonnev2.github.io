var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, rsp, next) {
  //res.render('index', { title: 'Express' });
  rsp.sendFile('/index.html', {root: '.'})
});

router.get('/gchart.js', function(req, rsp, next) {
  //res.render('index', { title: 'Express' });
  console.log("get gchart.js");
  rsp.send('get gchart...')
});


module.exports = router;
