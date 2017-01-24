var express = require('express');
var router = express.Router();

var app = express();

/* GET home page. */
router.get('/', function(req, res, next) {

    console.log("inside js: " + res.app.locals.cipher);

    res.render('index', { cipher: res.app.locals.cipher });
});

module.exports = router;
