var express = require('express');
var router = express.Router();

/* GET Auth listing. */
router.get('/', function(req, res, next) {
  res.json({key:"value12"});
});

module.exports = router;
