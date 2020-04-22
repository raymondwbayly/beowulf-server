var express = require('express');
var router = express.Router();
var path = require('path');
var fs = require('fs');
var Msg = require('../bin/messages');
var Records = require('../bin/records');

// Users File for the static data
var calEventJSON = path.join(__dirname, '../lib/schedule', 'calendar-event.json');
var calDayJSON = path.join(__dirname, '../lib/schedule', 'calendar-day.json');
var calWeekJSON = path.join(__dirname, '../lib/schedule', 'calendar-week.json');
var calMonthJSON = path.join(__dirname, '../lib/schedule', 'calendar-month.json');


/* GET Returns the day. */
router.get('/', function(req, res, next) {
  var readable = fs.createReadStream(calDayJSON);
  readable.pipe(res);
});


// EVENT CALLS *****************************************************************************************

/* GET Returns the event. */
router.get('/event/:uid', function(req, res, next) {
  var readable = fs.createReadStream(calEventJSON);
  // req.params.uid is how to access the ID
  readable.pipe(res);
});

/* POST CREATE */
router.post('/event', function(req, res, next) {
  var token = req.body.token;
  var id = req.body.id;
  var user = req.body.user;
  var name = req.body.name;
  var email = req.body.email;
  var location = req.body.location;
  var duration = req.body.duration;
  var startdate = req.body.startdate;
  var starttime = req.body.starttime;
  var enddate = req.body.enddate;
  var endtime = req.body.endtime;
  var subject = req.body.subject;
  var description = req.body.description;
  var attendee1id = req.body.aid1;
  var attendee1fn = req.body.afn1;
  var attendee1ln = req.body.aln1;
  var attendee1em = req.body.aem1;
  var attendee2id = req.body.aid2;
  var attendee2fn = req.body.afn2;
  var attendee2ln = req.body.aln2;
  var attendee2em = req.body.aem2;

  var eventPostJSON = {"id": id,"user": user,"name": name,"email": email,"location": location,"Duration": duration,"start-date": startdate,"start-time": starttime,"end-date": enddate,"end-time": endtime,"subject": subject,"body": description,"attendees": [{"id": attendee1id,"firstname": attendee1fn,"lastname": attendee1ln,"email": attendee1em},{"id": attendee2id,"firstname": attendee2fn,"lastname": attendee2ln,"email": attendee2em}]}

  res.send(Msg.getSavedMessage() + JSON.stringify(eventPostJSON))
});

/* PUT UPDATE RECORD */
router.put('/event', function(req, res, next) {
  var token = req.body.token;
  var id = req.body.id;
  var user = req.body.user;
  var name = req.body.name;
  var email = req.body.email;
  var location = req.body.location;
  var duration = req.body.duration;
  var startdate = req.body.startdate;
  var starttime = req.body.starttime;
  var enddate = req.body.enddate;
  var endtime = req.body.endtime;
  var subject = req.body.subject;
  var description = req.body.description;
  var attendee1id = req.body.aid1;
  var attendee1fn = req.body.afn1;
  var attendee1ln = req.body.aln1;
  var attendee1em = req.body.aem1;
  var attendee2id = req.body.aid2;
  var attendee2fn = req.body.afn2;
  var attendee2ln = req.body.aln2;
  var attendee2em = req.body.aem2;
  var eventPostJSON = {"id": id,"user": user,"name": name,"email": email,"location": location,"Duration": duration,"start-date": startdate,"start-time": starttime,"end-date": enddate,"end-time": endtime,"subject": subject,"body": description,"attendees": [{"id": attendee1id,"firstname": attendee1fn,"lastname": attendee1ln,"email": attendee1em},{"id": attendee2id,"firstname": attendee2fn,"lastname": attendee2ln,"email": attendee2em}]}

  res.send(Msg.getUpdatedMessage() + JSON.stringify(eventPostJSON))
});


// DAY CALLS *****************************************************************************************

/* GET Returns the day. */
router.get('/day', function(req, res, next) {
  var readable = fs.createReadStream(calDayJSON);
  // req.params.uid is how to access the ID
  readable.pipe(res);
});

/* GET Returns the day pass date. */
router.get('/day/:uid', function(req, res, next) {
  var readable = fs.createReadStream(calDayJSON);
  // req.params.uid is how to access the ID
  readable.pipe(res);
});


// WEEK CALLS *****************************************************************************************

/* GET Returns Current week. */
router.get('/week', function(req, res, next) {
  var readable = fs.createReadStream(calWeekJSON);
  // req.params.uid is how to access the ID
  readable.pipe(res);
});

/* GET Returns specific week pass the week start date. */
router.get('/week/:uid', function(req, res, next) {
  var readable = fs.createReadStream(calWeekJSON);
  // req.params.uid is how to access the ID
  readable.pipe(res);
});



// MONTH CALLS *****************************************************************************************

/* GET Returns Current week. */
router.get('/month', function(req, res, next) {
  var readable = fs.createReadStream(calMonthJSON);
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
