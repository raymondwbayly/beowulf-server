var express = require('express');
var router = express.Router();

/* GET Auth listing. */
router.get('/', function(req, res, next) {
  res.send('The News Service');
});

module.exports = router;