var express = require('express');
var router = express.Router();
var path = require('path');
var fs = require('fs');
var Records = require('../bin/records');

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

module.exports = router;
