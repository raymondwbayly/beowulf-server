var express = require('express');
var router = express.Router();
var path = require('path');
var fs = require('fs');
var Records = require('../bin/records');
var Msg = require('../bin/messages');

// Alerts File for the static data
var newsJSON = path.join(__dirname, '../lib', 'news.json');
var storyObj =  require(newsJSON);
/* GET News listing. */
router.get('/', function(req, res, next) {
  var readable = fs.createReadStream(newsJSON);
  readable.pipe(res);
});

/* GET returns news story. */
router.get('/:uid', function(req, res, next) {
  res.send(Records.getSingleRecord(storyObj.news,req.params.uid));
});

/* POST CREATE */
router.post('/', function(req, res, next) {
  var author = req.body.author;
  var authorid = req.body.authorid;
  var date = req.body.date;
  var media = req.body.media;
  var title = req.body.title;
  var story = req.body.story;
  var token = req.body.token;

  var newsPostJSON = {'author': author, 'authorid': authorid, 'date': date, 'media': media, 'title': title, 'story': story, 'token': token}

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
  var token = req.body.token;
  var newsPostJSON = {'id':id,'author': author, 'authorid': authorid, 'date': date, 'media': media, 'title': title, 'story': story, 'token': token}
  res.send(Msg.getUpdatedMessage() + JSON.stringify(newsPostJSON))
});

module.exports = router;
