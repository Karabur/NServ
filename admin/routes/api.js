'use strict';

var express = require('express');
var router = express.Router();

router.get('/servers', function(req, res) {
  res.json([{
    name:'Test'
  }, {
    name:'Test2'
  }]);
});


module.exports = router;