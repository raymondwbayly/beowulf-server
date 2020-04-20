var express = require('express');
var router = express.Router();
var path = require('path');
var fs = require('fs');

// Alerts File for the static data
var storyJSON = path.join(__dirname, '../lib', 'news-story.json');
var newsJSON = path.join(__dirname, '../lib', 'news.json');

/* GET News listing. */
router.get('/', function(req, res, next) {
  var readable = fs.createReadStream(newsJSON);
  readable.pipe(res);
});

/* GET returns news story. */
router.get('/:uid', function(req, res, next) {
  var readable = fs.createReadStream(storyJSON);
  // req.params.uid is how to access the ID
  readable.pipe(res);
});

module.exports = router;
