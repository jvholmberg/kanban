var express = require('express')
  , router = express.Router()
  , mongoose = require('mongoose')
  , User = mongoose.model('User')
  , passport = require('passport');

module.exports = function(app) {
  app.use('/', router);
};

router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/profile', (req, res, next) => {
  if (!req.user) return res.redirect('/');
  res.render('application');
});

router.get('/dashboard', (req, res, next) => {
  if (!req.user) return res.redirect('/');
  res.render('application');
});
