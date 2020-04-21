var express = require('express');
var router = express.Router();


/* GET tasks listing. */
router.get('/', function(req, res, next) {
    res.send('This is the default service for lookup');
});
module.exports = router;
