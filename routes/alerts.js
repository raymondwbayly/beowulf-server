var express = require('express');
var router = express.Router();
var path = require('path');
var fs = require('fs');
var ejs = require('ejs');
var Msg = require('../bin/messages');
var Records = require('../bin/records');
var jsonEngine = require('../bin/json-engine');
var MockExpressRequest = require('mock-express-request');
var MockExpressResponse = require('mock-express-response');

var response = new MockExpressResponse();


// *********************************** URI ROUTE CALLS ******************************************** //

/* POST CREATE */
router.post('/', function(req, res, next) {

  var alertPostJSON = {'id': 0, 'title':req.body.title, 'date': req.body.date, 'description': req.body.description, 'author': req.body.author, 'email': req.body.email, 'token': req.body.token}
  jsonEngine.addRecord('alerts', alertPostJSON);
  res.send(Msg.getSavedMessage() + JSON.stringify(alertPostJSON))
});

/* GET LIST ALERTS. */
router.get('/', function(req, res, next) {
  res.send(jsonEngine.listRecords('alerts'));
});

/* GET READ SINGLE. */
router.get('/:uid', function(req, res, next) {
  res.send(jsonEngine.getRecord('alerts', req.params.uid));
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
  var ret = jsonEngine.updateRecord('alerts', id, alertPostJSON);
  res.send(Msg.getUpdatedMessage() + JSON.stringify(alertPostJSON))
});

/* DELETE delete record */
router.delete('/:uid', function(req, res, next) {

  res.send(Msg.getDeleteMessage() + 'ID:' + req.params.uid)
});

module.exports = router;
