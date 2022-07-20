var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
  res.render('home/main');
});

/* GET signup page. */
router.get('/signup', (req, res) => {
  res.render('user/signup');
});

/* GET login page */
router.get('/login', (req, res) => {
  res.render('user/login');
});

/* GET home page */
router.get('/home', (req, res) => {
  res.render('home/home');
});

module.exports = router;
