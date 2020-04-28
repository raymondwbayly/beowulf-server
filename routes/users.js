var express = require('express');
var router = express.Router();
var Msg = require('../bin/messages');
var Sec = require('../bin/security');
var jsonEngine = require('../bin/engines/json');


/* GET Users listing. */
router.get('/', function(req, res, next) {
  res.send(jsonEngine.listRecords('users'));
});

/* GET Config Object JSON return. */
router.get('/:uid', function(req, res, next) {
  res.send(jsonEngine.getRecord('users', req.params.uid));
});

/* GET Config Object JSON return. */
router.get('/search/lastname/:uid', function(req, res, next) {
  res.send(jsonEngine.searchRecords('users', req.params.uid));
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
  var active = req.body.active;

  if(Sec.checkCookies(req.cookies).status){
    var userPostJSON = {"id": 0, "firstname": firstname, "lastname":lastname, "date":date, "email":email, "phone":phone, "mobile":mobile , "profile":profile,"active": active}
    jsonEngine.addRecord('users', userPostJSON);
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
  var active = req.body.active;

  if(Sec.checkCookies(req.cookies).status){
    var userPostJSON = {"id":id, "firstname": firstname, "lastname":lastname, "date":date, "email":email, "phone":phone, "mobile":mobile , "profile":profile, "active": active}
    jsonEngine.updateRecord('users', userPostJSON);
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
router.get('/active/:uid', function(req, res, next) {
  
  if(Sec.checkCookies(req.cookies).status){
    jsonEngine.checkActiveStatus('users', req.params.uid);
  res.send(Msg.getActiveCheckMessage())
  } else {
    res.send(Sec.checkCookies(req.cookies).message);
  }
});

module.exports = router;
