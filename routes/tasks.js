var express = require('express');
var router = express.Router();
var path = require('path');
var fs = require('fs');
var Records = require('../bin/records');
var Msg = require('../bin/messages');
var jsonEngine = require('../bin/json-engine');

// Alerts File for the static data
var tasksJSON = path.join(__dirname, '../lib', 'tasks.json');
var taskObj =  require(tasksJSON);

/* GET tasks listing. */
router.get('/', function(req, res, next) {
  var readable = fs.createReadStream(tasksJSON);
  readable.pipe(res);
});

/* GET task Object JSON return. */
router.get('/:uid', function(req, res, next) {
  res.send(Records.getSingleRecord(taskObj.tasks,req.params.uid));
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

  var taskPostJSON = {"author":author,"author-id":authorid, "assignee":assignee, "assignee-id":assigneeid, "title":title, "body":task, "status":status, "date-create":create, "date-complete":complete, "active":active}

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

  res.send(Msg.getUpdatedMessage() + JSON.stringify(taskPostJSON))
});

/* DELETE delete record */
router.delete('/:uid', function(req, res, next) {

  res.send(Msg.getDeleteMessage() + 'ID:' + req.params.uid)
});

/* GET task Object JSON return. */
router.get('/complete/:uid', function(req, res, next) {
  res.send('Task Marked as Complete');
});

module.exports = router;
