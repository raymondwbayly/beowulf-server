var express = require('express');
var router = express.Router();
var path = require('path');
var fs = require('fs');

//Consume the file stream for config (JSON)
var cfgJSON = path.join(__dirname, '../lib', 'config.json');
var versionNotesJSON = path.join(__dirname, '../lib', 'release-notes.json');

// Reads the config json and creates an object from it allowing teh system to return it as needed. 
var jsonString = fs.readFileSync(cfgJSON);
var cfgObj = JSON.parse(jsonString)

router.get('/', function(req, res, next) {
  res.send(cfgObj);
});

/* GET  version. */
router.get('/version', function(req, res, next) {
  res.send(cfgObj.version);
});

/* GET  version. */
router.get('/version/number', function(req, res, next) {
  res.send(cfgObj.version.number);
});

/* GET Config Object JSON return. */
router.get('/version/notes', function(req, res, next) {
  var readable = fs.createReadStream(versionNotesJSON);
  readable.pipe(res);
});

/* GET  support. */
router.get('/support', function(req, res, next) {
  res.send(cfgObj.support);
});


module.exports = router;
