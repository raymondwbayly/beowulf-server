var express = require('express');
var router = express.Router();
var path = require('path');
var fs = require('fs');
var Records = require('../bin/records');
var Msg = require('../bin/messages');
var Sec = require('../bin/security');

// Users File for the static data
var usersJSON = path.join(__dirname, '../lib', 'users.json');
var userObj =  require(usersJSON);

/* GET Users listing. */
router.get('/', function(req, res, next) {
  if(Sec.checkCookies(req.cookies).status){
    var readable = fs.createReadStream(usersJSON);
    readable.pipe(res);
  } else {
    res.send(Sec.checkCookies(req.cookies).message);
  }
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

  if(Sec.checkCookies(req.cookies).status){
    var userPostJSON = {"firstname": firstname, "lastname":lastname, "date":date, "email":email, "phone":phone, "mobile":mobile , "profile":profile}
    res.send(Msg.getSavedMessage() + JSON.stringify(userPostJSON))
  } else {
    res.send(Sec.checkCookies(req.cookies).message);
  }

});

/* PUT UPDATE RECORD */
router.put('/', function(req, res, next) {
  var id = req.body.id;
  var firstname = req.body.firstname;
  var lastname = req.body.lastname;
  var date = req.body.date;
  var email = req.body.email;
  var phone = req.body.phone;
  var mobile = req.body.mobile;
  var profile = req.body.profile;
  var token = req.body.token;

  if(Sec.checkCookies(req.cookies).status){
    var userPostJSON = {"id":id, "firstname": firstname, "lastname":lastname, "date":date, "email":email, "phone":phone, "mobile":mobile , "profile":profile}
    res.send(Msg.getUpdatedMessage() + JSON.stringify(userPostJSON))
  } else {
    res.send(Sec.checkCookies(req.cookies).message);
  }
});

/* DELETE delete record */
router.delete('/:uid', function(req, res, next) {

  if(Sec.checkCookies(req.cookies).status){
    res.send(Msg.getDeleteMessage() + 'ID:' + req.params.uid)
  } else {
    res.send(Sec.checkCookies(req.cookies).message);
  }

});

/* GET Config Object JSON return. */
router.get('/deactivate/:uid', function(req, res, next) {
  
  if(Sec.checkCookies(req.cookies).status){
    res.send('User has been deactivated on the server');
  } else {
    res.send(Sec.checkCookies(req.cookies).message);
  }
});

module.exports = router;
