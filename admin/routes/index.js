var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

router.use('/partials', function(req, res) {
  res.render('partials' + req.url);
});

module.exports = router;
