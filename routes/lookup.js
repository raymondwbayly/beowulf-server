var express = require('express');
var router = express.Router();
var Msg = require('../bin/messages');
var Sec = require('../bin/security');
var lookupEngine = require('../bin/engines/lookup');

/************ THIS IS THE DEFAULT ROUTE  */

/* GET tasks listing. */
router.get('/', function(req, res, next) {
    res.send('Accessing Lookup, use timezones, titles for records');
});

/************ JOB TITLE ROUTES */

/* GET Job Title List. */
router.get('/jobtitles', function(req, res, next) {
    res.send(lookupEngine.listRecords('titles'));
});

/* GET Retrieve Job Title Zone. */
router.get('/jobtitle/:uid', function(req, res, next) {
    res.send(lookupEngine.getRecord('titles', req.params.uid));
});

/************ TIMEZONE ROUTES  */

/* GET Time Zones List. */
router.get('/timezones', function(req, res, next) {
    res.send(lookupEngine.listRecords('timezones'));
});

/* GET Retrieve a Time Zone. */
router.get('/timezone/:uid', function(req, res, next) {
    res.send(lookupEngine.getRecord('timezones', req.params.uid));
});



module.exports = router;



