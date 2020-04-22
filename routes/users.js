var express = require('express');
var router = express.Router();
var path = require('path');
var fs = require('fs');
var Records = require('../bin/records');
var Msg = require('../bin/messages');

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

/* POST CREATE */
router.post('/', function(req, res, next) {
  var firstname = req.body.firstname;
  var lastname = req.body.lastname;
  var date = req.body.date;
  var email = req.body.email;
  var phone = req.body.phone;
  var mobile = req.body.mobile;
  var profile = req.body.profile;
  var token = req.body.token;

  var userPostJSON = {"firstname": firstname, "lastname":lastname, "date":date, "email":email, "phone":phone, "mobile":mobile , "profile":profile}

  res.send(Msg.getSavedMessage() + JSON.stringify(userPostJSON))
});

module.exports = router;
