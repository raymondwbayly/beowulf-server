var express = require('express');
var router = express.Router();
var path = require('path');
var fs = require('fs');

// Users File for the static data
var usersJSON = path.join(__dirname, '../lib', 'users.json');
var userJSON = path.join(__dirname, '../lib', 'user.json');

/* GET Users listing. */
router.get('/', function(req, res, next) {
  var readable = fs.createReadStream(usersJSON);
  readable.pipe(res);
});

/* GET Config Object JSON return. */
router.get('/:uid', function(req, res, next) {
  var readable = fs.createReadStream(userJSON);
  // req.params.uid is how to access the ID
  readable.pipe(res);
});

module.exports = router;
