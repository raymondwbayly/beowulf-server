var express = require('express');
var router = express.Router();
var path = require('path');
var fs = require('fs');
var Records = require('../bin/records');
var Msg = require('../bin/messages');
var jsonEngine = require('../bin/json-engine');

// Alerts File for the static data
var newsJSON = path.join(__dirname, '../lib', 'news.json');
var storyObj =  require(newsJSON);
/* GET News listing. */
router.get('/', function(req, res, next) {
  res.send(jsonEngine.listRecords('news'));
});

/* GET returns news story. */
router.get('/:uid', function(req, res, next) {
  res.send(jsonEngine.getRecord('news', req.params.uid));
});

/* POST CREATE */
router.post('/', function(req, res, next) {
  var author = req.body.author;
  var authorid = req.body.authorid;
  var date = req.body.date;
  var media = req.body.media;
  var title = req.body.title;
  var story = req.body.story;
  var active = req.body.active;

  var newsPostJSON = {'id': 0, 'author': author, 'authorid': authorid, 'date': date, 'media': media, 'title': title, 'body': story, 'active':active}
  jsonEngine.addRecord('news', newsPostJSON);
  res.send(Msg.getSavedMessage() + JSON.stringify(newsPostJSON))
});

/* PUT UPDATE RECORD */
router.put('/', function(req, res, next) {
  var id = req.body.id;
  var author = req.body.author;
  var authorid = req.body.authorid;
  var date = req.body.date;
  var media = req.body.media;
  var title = req.body.title;
  var story = req.body.story;
  var active = req.body.active;
  var newsPostJSON = {'id':id,'author': author, 'authorid': authorid, 'date': date, 'media': media, 'title': title, 'body': story, 'active': active}
  jsonEngine.updateRecord('news', newsPostJSON);
  res.send(Msg.getUpdatedMessage() + JSON.stringify(newsPostJSON))
});

/* DELETE delete record */
router.delete('/:uid', function(req, res, next) {

  res.send(Msg.getDeleteMessage() + 'ID:' + req.params.uid)
});

module.exports = router;
