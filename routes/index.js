var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
<<<<<<< HEAD
  res.render('Greetings', { title: 'Express' });
=======
  res.render('Shopkeeper/home', { title: 'Express' });
>>>>>>> 28f0f3de2877989834b7b13b371815717783cced
});

router.get('/', function(req, res, next) {
  res.render('Shopkeeper/home', { title: 'Home' });
});
router.get('/book', function(req, res, next) {
  res.render('Shopkeeper/booking', { title: 'Home' });
});
router.get('/comp', function(req, res, next) {
  res.render('Shopkeeper/complaint', { title: 'Home' });
});
router.get('/login', function(req, res, next) {
  res.render('Shopkeeper/loginShop', { title: 'Home' });
});
router.get('/op', function(req, res, next) {
  res.render('Shopkeeper/ownedProperty', { title: 'Home' });
});



module.exports = router;
