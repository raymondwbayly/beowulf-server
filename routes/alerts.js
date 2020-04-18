var express = require('express');
var router = express.Router();
var path = require('path');
var fs = require('fs');

// Alerts File for the static data
var alertsJSON = path.join(__dirname, '../lib', 'alerts.json');
var alertJSON = path.join(__dirname, '../lib', 'alert.json');

/* GET Auth listing. */
router.get('/', function(req, res, next) {
  var readable = fs.createReadStream(alertsJSON);
  readable.pipe(res);
});

/* GET Config Object JSON return. */
router.get('/:uid', function(req, res, next) {
  var readable = fs.createReadStream(alertJSON);
  // req.params.uid is how to access the ID
  readable.pipe(res);
});

module.exports = router;
