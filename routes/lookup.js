var express = require('express');
var router = express.Router();
var Msg = require('../bin/messages');
var Sec = require('../bin/security');
var lookupEngine = require('../bin/engines/lookup');


/* GET tasks listing. */
router.get('/', function(req, res, next) {
    res.send('Accessing Lookup, use timezones, titles for records');
});

/* GET Job Title List. */
router.get('/jobtitles', function(req, res, next) {
    res.send(lookupEngine.listRecords('titles'));
});

/* GET Retrieve Job Title Zone. */
router.get('/jobtitle/:uid', function(req, res, next) {
    res.send(jsonEngine.getRecord('titles', req.params.uid));
});

/* GET Time Zones List. */
router.get('/timezones', function(req, res, next) {
    res.send(lookupEngine.listRecords('timezones'));
});

/* GET Retrieve a Time Zone. */
router.get('/timezone/:uid', function(req, res, next) {
    res.send(jsonEngine.getRecord('timeszones', req.params.uid));
});



module.exports = router;



