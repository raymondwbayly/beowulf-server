var express = require('express');
var router = express.Router();
var path = require('path');
var fs = require('fs');

var userJSON = path.join(__dirname, '../lib', 'user.json');

/* GET Auth listing. */
router.post('/', function(req, res) {
  var user_id = req.body.id;
  var token = req.body.token;
  var geo = req.body.geo;
  var rtString = '';

  if (token === '2234FFR1RRDF'){
    rtString = 'Application is Authorized with Token ' + token + '  Application ID: ' + user_id + '  and Location of ' + geo;

  } else {
    rtString = 'Application is not Authorized the token ' + token + ' Was not in our system';
  }
  res.send(rtString);
});

router.post('/user', function(req, res) {
  var user_id = req.body.id;
  var token = req.body.token;
  var geo = req.body.geo;
  var pass = req.body.password;

  if(token === '2234FFR1RRDF'){
    var readable = fs.createReadStream(userJSON);
    readable.pipe(res);
  } else {
    res.send({"message":"this user is not authorized", "user":user_id, "location":geo, "Token":token, "Password":pass});
  }
});

module.exports = router;
