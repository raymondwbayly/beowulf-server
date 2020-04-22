var express = require('express');
var router = express.Router();
var path = require('path');
var fs = require('fs');
var Msg = require('../bin/messages');
var Records = require('../bin/records');

var usersJSON = path.join(__dirname, '../lib', 'users.json');
var userObj =  require(usersJSON);

/* GET Auth listing. */
router.post('/', function(req, res) {
  var user_id = req.body.id;
  var token = req.body.token;
  var geo = req.body.geo;
  var rtString = '';

  if (token === '2234FFR1RRDF'){
    rtString = Msg.getAuthorized() + ' with Token ' + token + '  Application ID: ' + user_id + '  and Location of ' + geo;
    res.cookie('app-token', token).send('App Token cookie set' + '\n' + rtString);

  } else {
    rtString = Msg.getUnAuthorized() + ' the token ' + token + ' Was not in our system';
  }
  res.send(rtString);
});

router.post('/user', function(req, res) {
  var user_id = req.body.id;
  var token = req.body.token;
  var geo = req.body.geo;
  var pass = req.body.password;

  if(token === '2234FFR1RRDF'){
    res.cookie('user-token', token).send('User Token cookie set' + '\n' + JSON.stringify(Records.getSingleRecord(userObj.users,4)));
  } else {
    res.send({"message":Msg.getUnAuthorized() , "user":user_id, "location":geo, "Token":token, "Password":pass});
  }
});

module.exports = router;
