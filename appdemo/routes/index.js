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

//
router.get('/img', function (req, rsp, next) {
    console.log("params: ", req.params);
    console.log("query: ", req.query);
    console.log("query/src: ", req.query.src);

    rsp.sendFile(req.query.src, {
        root: '.'
    })

});


// GET about page. 
router.get('/about', function (req, rsp, next) {

    rsp.render(
        "about",
        {
            title: "关于",

        });
});



module.exports = router;