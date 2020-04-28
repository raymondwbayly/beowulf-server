var express = require('express');
var router = express.Router();
var Msg = require('../bin/messages');
var jsonEngine = require('../bin/engines/json');
 


/* GET tasks listing. */
router.get('/', function(req, res, next) {
  res.send(jsonEngine.listRecords('tasks'));
});

/* GET task Object JSON return. */
router.get('/:uid', function(req, res, next) {
  res.send(jsonEngine.getRecord('tasks', req.params.uid));
});

/* POST CREATE */
router.post('/', function(req, res, next) {
  var author = req.body.author;
  var authorid = req.body.authorid;
  var assignee = req.body.assignee;
  var assigneeid = req.body.assigneeid;
  var title = req.body.title;
  var task = req.body.task;
  var status = req.body.status;
  var create = req.body.create;
  var complete = req.body.complete;
  var active = req.body.active;

  var taskPostJSON = {"id":0, "author":author,"author-id":authorid, "assignee":assignee, "assignee-id":assigneeid, "title":title, "body":task, "status":status, "date-create":create, "date-complete":complete, "active":active}
  jsonEngine.addRecord('tasks', taskPostJSON);
  res.send(Msg.getSavedMessage() + JSON.stringify(taskPostJSON))
});

/* PUT UPDATE RECORD */
router.put('/', function(req, res, next) {
  var id = req.body.id;
  var author = req.body.author;
  var authorid = req.body.authorid;
  var assignee = req.body.assignee;
  var assigneeid = req.body.assigneeid;
  var title = req.body.title;
  var task = req.body.task;
  var status = req.body.status;
  var create = req.body.create;
  var complete = req.body.complete;
  var active = req.body.active;

  var taskPostJSON = {"id":id,"author":author,"author-id":authorid, "assignee":assignee, "assignee-id":assigneeid, "title":title, "body":task, "status":status, "date-create":create, "date-complete":complete, "active":active}
  jsonEngine.updateRecord('tasks', taskPostJSON);
  res.send(Msg.getUpdatedMessage() + JSON.stringify(taskPostJSON))
});

/* DELETE delete record */
router.delete('/:uid', function(req, res, next) {
  res.send(Msg.getDeleteMessage() + 'ID:' + req.params.uid)
});

/* GET DEACTIVATE. */
router.get('/active/:uid', function(req, res, next) {
  jsonEngine.checkActiveStatus('tasks', req.params.uid);
  res.send(Msg.getActiveCheckMessage())
});

module.exports = router;
