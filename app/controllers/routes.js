var express = require('express')
  , router = express.Router()
  , mongoose = require('mongoose')
  , User = mongoose.model('User')
  , passport = require('passport');

module.exports = function(app) {
  app.use('/', router);
};

router.get('/', (req, res) => {
  res.render('index');
});

router.get('/profile', fn);
router.get('/assignments', fn);
router.get('/messages', fn);

router.get('/logout', (req, res) => {
  if (!req.user) return res.redirect('/');
  res.redirect('/profile');
});

function fn(req, res) {
  if (!req.user) return res.redirect('/');
  res.render('application');
}
