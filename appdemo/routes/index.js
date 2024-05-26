var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    //res.render('index', { title: 'Express' });
    res.redirect("/student"); // redirect to ip+port/student if get request by ip+port.
});

router.get('/index.html', function (req, res, next) {
    res.redirect("/student"); // redirect to ip+port/student if get request by ip+port/index.html.
});

// GET about page. 
router.get('/about', function (req, rsp, next) {
    rsp.send('This is about page.');
});

module.exports = router;