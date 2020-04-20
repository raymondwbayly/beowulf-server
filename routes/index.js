var express = require('express');
var Msg = require('../bin/messages');

var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: Msg.getTitle() });
});

module.exports = router;
