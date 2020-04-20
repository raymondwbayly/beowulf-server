var express = require('express');
var router = express.Router();
var path = require('path');
var fs = require('fs');

// Alerts File for the static data
var tasksJSON = path.join(__dirname, '../lib', 'tasks.json');
var taskJSON = path.join(__dirname, '../lib', 'task.json');

/* GET tasks listing. */
router.get('/', function(req, res, next) {
  var readable = fs.createReadStream(tasksJSON);
  readable.pipe(res);
});

/* GET task Object JSON return. */
router.get('/:uid', function(req, res, next) {
  var readable = fs.createReadStream(taskJSON);
  // req.params.uid is how to access the ID
  readable.pipe(res);
});

module.exports = router;
