//var createError = require('http-errors');
function createError(status, message) {
  const error = new Error(message || 'Internal Server Error');
  error.status = status || 500;
  return error;
}
var express = require('express');
var axios = require('axios');
var bodyParser = require('body-parser');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('db.sql');

// Créer la table "users" si elle n'existe pas
db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    userName TEXT NOT NULL,
    age INTEGER NOT NULL,
    localisation TEXT NOT NULL
  )`);
});


db.close();

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

app.set('view engine', 'jade');


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
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

module.exports = app;
