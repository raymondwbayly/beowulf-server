var express = require('express');
var router = express.Router();
var path = require('path');
var fs = require('fs');
var Records = require('../bin/records');

// Alerts File for the static data
var tasksJSON = path.join(__dirname, '../lib', 'tasks.json');
var taskObj =  require(tasksJSON);

/* GET tasks listing. */
router.get('/', function(req, res, next) {
  var readable = fs.createReadStream(tasksJSON);
  readable.pipe(res);
});

/* GET task Object JSON return. */
router.get('/:uid', function(req, res, next) {
  res.send(Records.getSingleRecord(taskObj.tasks,req.params.uid));
});

module.exports = router;
