'use strict';

var express = require('express');
var _ = require('lodash');
var router = express.Router();

router.get('/servers', function(req, res) {
  var config = require("../../config.json");
  res.json(config['servers']);
});

router.get('/servers/:id', function(req, res) {
  var config = require("../../config.json");
  var server = _.find(config['servers'], function (srv) {
    return srv.id == req.params.id;
  });
  if (!server) { res.status(404); }
  else { res.json(server); }
});


module.exports = router;