var express = require('express');
var router = express.Router();
var path = require('path');
var fs = require('fs');
var Geo = require('../bin/geography');

router.get('/', function(req, res, next) {
  res.send('default route for geo');
});

router.get('/countries', function(req, res, next) {
    res.send(Geo.ListCountries());
  });

  router.get('/states', function(req, res, next) {
    res.send(Geo.ListStates());
  });

  router.get('/country/:uid', function(req, res, next) {
    res.send(Geo.GetCountry(req.params.uid));
  });

  router.get('/country/cities/:uid', function(req, res, next) {
    res.send(Geo.ListCitiesByCountry(req.params.uid));
  });

module.exports = router;
