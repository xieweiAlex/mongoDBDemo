var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mango = require('mongoskin');

var index = require('./routes/index');
var users = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);


const crypto = require('crypto');
var db = mango.db("mongodb://localhost:27017/homework7", {native_parser: true});

db.bind('homework7');


db.homework7.find().toArray(function (err, iterms) {
    if (err) throw err;
    var msg = iterms[0]['message'];
    console.log(msg);

    // update(data: string, input_encoding: HexBase64BinaryEncoding, output_encoding: Utf8AsciiBinaryEncoding): string;
    const decipher = crypto.createDecipher('aes256', 'asaadsaad');
    var str = decipher.update(msg, 'hex', 'utf8' );
    console.log("deciphered str: " + str);

    db.close();
});


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app.listen('3030');


