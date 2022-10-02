var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('Greetings', { title: 'Express' });
});

router.get('/signUpAs', function(req, res, next) {
  res.render('signUpAs', { title: 'Home' });
});
router.get('/shopkeeperhome', function(req, res, next) {
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
router.get('/loginOwner', function(req, res, next) {
  res.render('Owner/loginOwner', { title: 'Login' });
});
router.get('/signupOwner', function(req, res, next) {
  res.render('Owner/signupOwner', { title: 'Signup' });
});
router.get('/homeOwner', function(req, res, next) {
  res.render('Owner/home', { title: 'Home' });
});


module.exports = router;
