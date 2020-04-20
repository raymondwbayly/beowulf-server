var express = require('express');
var router = express.Router();
var path = require('path');
var fs = require('fs');
var ejs = require('ejs');
var Records = require('../bin/records');
var MockExpressRequest = require('mock-express-request');
var MockExpressResponse = require('mock-express-response');

var response = new MockExpressResponse();

// Alerts File for the static data
var alertsJSON = path.join(__dirname, '../lib', 'alerts.json');
var alertsObj =  require(alertsJSON);

/* GET Auth listing. */
router.get('/', function(req, res, next) {
  var readable = fs.createReadStream(alertsJSON);
  readable.pipe(res);
});

/* GET Config Object JSON return. */
router.get('/:uid', function(req, res, next) {
  res.send(Records.getSingleRecord(alertsObj.alerts,req.params.uid));
});

module.exports = router;
