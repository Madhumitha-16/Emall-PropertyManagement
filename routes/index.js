var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('Shopkeeper/home', { title: 'Express' });
});

router.get('/', function(req, res, next) {
  res.render('Shopkeeper/home', { title: 'Home' });
});
router.get('/book', function(req, res, next) {
  res.render('booking', { title: 'Home' });
});



module.exports = router;
