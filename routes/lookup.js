var express = require('express');
var router = express.Router();
var path = require('path');
var fs = require('fs');
var ejs = require('ejs');
var Records = require('../bin/records');


/* GET tasks listing. */
router.get('/', function(req, res, next) {
    res.send('This is the default service for lookup');
});
module.exports = router;



