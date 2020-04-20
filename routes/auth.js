var express = require('express');
var router = express.Router();

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

module.exports = router;
