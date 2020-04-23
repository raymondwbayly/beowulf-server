var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require('body-parser');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var authRouter = require('./routes/auth');
var alertsRouter = require('./routes/alerts');
var calendarRouter = require('./routes/calendar');
var configRouter = require('./routes/config');
var newsRouter = require('./routes/news');
var tasksRouter = require('./routes/tasks');
var lookupRouter = require('./routes/lookup');
var geoRouter = require('./routes/geography');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

//Body Parsing
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/auth', authRouter);
app.use('/alerts', alertsRouter);
app.use('/calendar', calendarRouter);
app.use('/cfg', configRouter);
app.use('/news', newsRouter);
app.use('/tasks', tasksRouter);
app.use('/lookup', lookupRouter);
app.use('/geo', geoRouter);


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
