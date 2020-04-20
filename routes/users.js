var express = require('express');
var router = express.Router();
var path = require('path');
var fs = require('fs');
var Records = require('../bin/records');

// Users File for the static data
var usersJSON = path.join(__dirname, '../lib', 'users.json');
var userObj =  require(usersJSON);

/* GET Users listing. */
router.get('/', function(req, res, next) {
  var readable = fs.createReadStream(usersJSON);
  readable.pipe(res);
});

/* GET Config Object JSON return. */
router.get('/:uid', function(req, res, next) {
  res.send(Records.getSingleRecord(userObj.users,req.params.uid));
});

module.exports = router;
