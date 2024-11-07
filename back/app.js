var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors');

const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('db.sql');

db.serialize(() => {
  db.run("CREATE TABLE IF NOT EXISTS lorem (info TEXT)");
  db.all("PRAGMA table_info(lorem)", function(err, rows) {
    if (err) {
      console.error("Erreur lors de l'exécution de PRAGMA : ", err.message);
      return;
    }
    const columnExists = rows.some(row => row.name === 'name');

    if (columnExists) {
      console.log('Column exists');
    } else {
      db.run("ALTER TABLE lorem ADD COLUMN name TEXT", function(err) {
        if (err) {
          console.error("Erreur lors de l'ajout de la colonne : ", err.message);
        } else {
          console.log("Colonne ajoutée avec succès !");
        }
      });
    }
  });
});

db.close();

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var tableRouter = require('./routes/table');

var app = express();

app.set('view engine', 'jade');

app.use(cors());

app.use(logger('dev'));
app.use(express.json());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/table', tableRouter);

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
  res.render('error', {
    title: 'Erreur'
  });
});

module.exports = app;
