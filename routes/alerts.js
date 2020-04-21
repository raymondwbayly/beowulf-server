var express = require('express');
var router = express.Router();
var path = require('path');
var fs = require('fs');
var ejs = require('ejs');
var Msg = require('../bin/messages');
var Records = require('../bin/records');
var MockExpressRequest = require('mock-express-request');
var MockExpressResponse = require('mock-express-response');

var response = new MockExpressResponse();

// Alerts File for the static data
var alertsJSON = path.join(__dirname, '../lib', 'alerts.json');
var alertsObj =  require(alertsJSON);


// *********************************** URI ROUTE CALLS ******************************************** //

/* POST CREATE */
router.post('/', function(req, res, next) {
  var title = req.body.title;
  var date = req.body.date;
  var desc = req.body.description;
  var author = req.body.author;
  var email = req.body.email;
  var token = req.body.token;

  var alertPostJSON = {'title':title, 'date': date, 'description': desc, 'author': author, 'email': email, 'token': token}

  res.send(Msg.getSavedMessage() + JSON.stringify(alertPostJSON))
});

/* GET READ. */
router.get('/', function(req, res, next) {
  var readable = fs.createReadStream(alertsJSON);
  readable.pipe(res);
});

/* GET READ SINGLE. */
router.get('/:uid', function(req, res, next) {
  res.send(Records.getSingleRecord(alertsObj.alerts,req.params.uid));
});

/* PUT UPDATE RECORD */
router.put('/', function(req, res, next) {
  var id = req.body.id;
  var title = req.body.title;
  var date = req.body.date;
  var desc = req.body.description;
  var author = req.body.author;
  var email = req.body.email;
  var token = req.body.token;
  var alertPostJSON = {'id':id, 'title':title, 'date': date, 'description': desc, 'author': author, 'email': email, 'token': token}
  res.send(Msg.getUpdatedMessage() + JSON.stringify(alertPostJSON))
});

/* DELETE delete record */
router.delete('/', function(req, res, next) {
  res.send('this is the post function')
});

module.exports = router;
