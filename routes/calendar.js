var express = require('express');
var router = express.Router();
var path = require('path');
var fs = require('fs');

// Users File for the static data
var calEventJSON = path.join(__dirname, '../lib', 'calendar-event.json');
var calDayJSON = path.join(__dirname, '../lib', 'calendar-day.json');
var calWeekJSON = path.join(__dirname, '../lib', 'calendar-week.json');
var calMonthJSON = path.join(__dirname, '../lib', 'calendar-month.json');


/* GET Returns the day. */
router.get('/', function(req, res, next) {
  var readable = fs.createReadStream(calDayJSON);
  readable.pipe(res);
});

/* GET Returns the event. */
router.get('/event/:uid', function(req, res, next) {
  var readable = fs.createReadStream(calEventJSON);
  // req.params.uid is how to access the ID
  readable.pipe(res);
});

/* GET Returns the day. */
router.get('/day', function(req, res, next) {
  var readable = fs.createReadStream(calDayJSON);
  // req.params.uid is how to access the ID
  readable.pipe(res);
});

/* GET Returns Current week. */
router.get('/week', function(req, res, next) {
  var readable = fs.createReadStream(calWeekJSON);
  // req.params.uid is how to access the ID
  readable.pipe(res);
});

/* GET Returns Current week. */
router.get('/month', function(req, res, next) {
  var readable = fs.createReadStream(calMonthJSON);
  // req.params.uid is how to access the ID
  readable.pipe(res);
});

/* GET Returns the day pass date. */
router.get('/day/:uid', function(req, res, next) {
  var readable = fs.createReadStream(calDayJSON);
  // req.params.uid is how to access the ID
  readable.pipe(res);
});

/* GET Returns specific week pass the week start date. */
router.get('/week/:uid', function(req, res, next) {
  var readable = fs.createReadStream(calWeekJSON);
  // req.params.uid is how to access the ID
  readable.pipe(res);
});

/* GET Returns Current month, pass month. */
router.get('/month/:uid', function(req, res, next) {
  var readable = fs.createReadStream(calMonthJSON);
  // req.params.uid is how to access the ID
  readable.pipe(res);
});

module.exports = router;
