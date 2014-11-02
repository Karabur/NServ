'use strict';

var express = require('express');
var _ = require('lodash');
var router = express.Router();
var servers = require('../../lib/serversRepo');

router.get('/servers', function(req, res) {
  res.json(servers.getServers());
});

router.get('/servers/:id', function(req, res) {
  var server = servers.getServer(req.params.id);
  if (!server) { res.status(404); }
  else { res.json(server); }
});

router.post('/servers', function(req, res) {
  var server = servers.create(req.body.name);
  res.json(server);
});


module.exports = router;