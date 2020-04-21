var express = require('express');
var router = express.Router();
var path = require('path');
var fs = require('fs');
var ejs = require('ejs');
var Records = require('../bin/records');

// Lookup Libraries
var timezonesPATH = path.join(__dirname, '../lib/lookup', 'timezones.json');
var timezonesJSON =  require(timezonesPATH);

var jobtitlesPATH = path.join(__dirname, '../lib/lookup', 'titles.json');
var jobtitlesJSON =  require(jobtitlesPATH);


/* GET tasks listing. */
router.get('/', function(req, res, next) {
    res.send('This is the default service for lookup');
});

/* GET Time Zones List. */
router.get('/jobtitles', function(req, res, next) {
    var readable = fs.createReadStream(jobtitlesPATH);
    readable.pipe(res);
});

/* GET Retrieve a Time Zone. */
router.get('/jobtitle/:uid', function(req, res, next) {
    res.send(Records.getSingleRecord(jobtitlesJSON.titles,req.params.uid));
});



module.exports = router;



