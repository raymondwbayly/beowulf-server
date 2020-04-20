var express = require('express');
var Msg = require('../bin/messages');
var Cfg = require('../bin/config');

var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: Cfg.getTitle(), version: Cfg.getVersion(), copyright: Cfg.getCopyright() });
});

module.exports = router;
