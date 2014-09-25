var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

router.use('/partials', function(req, res) {
  res.render('partials' + req.url);
});

router.use('/views', function(req, res) {
  res.render('views' + req.url);
});

module.exports = router;
