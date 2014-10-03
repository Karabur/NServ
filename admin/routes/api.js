'use strict';

var express = require('express');
var router = express.Router();

router.get('/servers', function(req, res) {

  var config = require("../../config.json");

  res.json(config['servers']);
});


module.exports = router;