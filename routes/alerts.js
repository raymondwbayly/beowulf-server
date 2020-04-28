var express = require('express');
var router = express.Router();
var Msg = require('../bin/messages');
var jsonEngine = require('../bin/engines/json');


// *********************************** URI ROUTE CALLS ******************************************** //

/* POST CREATE */
router.post('/', function(req, res, next) {

  var alertPostJSON = {'id': 0, 'title':req.body.title, 'date': req.body.date, 'description': req.body.description, 'author': req.body.author, 'email': req.body.email, 'active':'true'}
  jsonEngine.addRecord('alerts', alertPostJSON);
  res.send(Msg.getSavedMessage() + JSON.stringify(alertPostJSON))
});

/* GET LIST ALERTS. */
router.get('/', function(req, res, next) {
  res.send(jsonEngine.listRecords('alerts'));
});

/* GET READ SINGLE. */
router.get('/:uid', function(req, res, next) {
  res.send(jsonEngine.getRecord('alerts', req.params.uid));
});

/* PUT UPDATE RECORD */
router.put('/', function(req, res, next) {
  var id = req.body.id;
  var title = req.body.title;
  var date = req.body.date;
  var desc = req.body.description;
  var author = req.body.author;
  var email = req.body.email;
  var active = req.body.active;
  var alertPostJSON = {'id':id, 'title':title, 'date': date, 'description': desc, 'author': author, 'email': email, 'active': active}
  jsonEngine.updateRecord('alerts', alertPostJSON);
  res.send(Msg.getUpdatedMessage() + JSON.stringify(alertPostJSON))
});

/* DELETE delete record */
router.delete('/:uid', function(req, res, next) {

  res.send(Msg.getDeleteMessage() + 'ID:' + req.params.uid)
});

/* GET DEACTIVATE. */
router.get('/active/:uid', function(req, res, next) {
  jsonEngine.checkActiveStatus('alerts', req.params.uid);
  res.send(Msg.getActiveCheckMessage())
});

module.exports = router;
