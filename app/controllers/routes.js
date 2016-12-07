var express = require('express')
  , router = express.Router()
  , mongoose = require('mongoose')
  , User = mongoose.model('User')
  , passport = require('passport');

module.exports = function(app) {
  app.use('/', router);
};

// Available routes for nonauthorized users
router.get('/', nonauthorizedFn);
router.get('/register', nonauthorizedFn);
router.get('/login', nonauthorizedFn);

// Available routes for authorized users
router.get('/profile', authorizedFn);
router.get('/assignments', authorizedFn);
router.get('/messages', authorizedFn);
router.get('/logout', authorizedFn);

function authorizedFn(req, res) {
  if (!req.user) return res.redirect('/');
  res.render('index');
}
function nonauthorizedFn(req, res) {
  if (req.user) return res.redirect('/profile');
  res.render('index');
}
