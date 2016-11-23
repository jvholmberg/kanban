var express = require('express')
  , router = express.Router()
  , mongoose = require('mongoose')
  , User = mongoose.model('User')
  , passport = require('passport')
  , bcrypt = require('bcryptjs');

module.exports = function(app) {
  app.use('/user', router);
};

/*
* Register User
* @type: POST
* @desc: Register user if following is valid...
*   1. Passwords match
*   2. Username is not already taken
*   ... If valid, encrypt password and add user to database
*
*/
router.post('/create', (req, res) => {

  // Check if passwords match
  if (req.body.password !== req.body.password2) {
    return res.redirect('/register');
  }

  // Check if username is taken
  User.findOne({ username: req.body.username }, (err, user) => {
    if (err) return done(err);
    if (user) return done(err);

    // Encrypt password
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(req.body.password, salt, (err, hash) => {

        // Create user
        User.create({
          token: req.body.username,
          username: req.body.username,
          password: hash,
          displayName: req.body.displayName,
          email: req.body.email,
          conversations: [],
          notifications: [],
          memberOf: [],
          pendingInvites: []
        }, (err) => {
          console.log(err);
          res.redirect('/');
        });
      });
    });
  });
});

/*
* Login User
* @type: POST
* @desc: If username and passwords match grant user access.
*
*/
router.post('/login',
  passport.authenticate('local', {
    successRedirect: '/profile',
    failureRedirect: '/'
  })
);

/*
* Logout User
* @type: POST
* @desc: Logout user
*
*/
router.post('/logout', (req, res) => {
  req.logout();
  res.json(null);
});

/*
* Get My User
* @type: GET
* @desc:
*
*/
router.get('/me', (req, res) => {
  if (!req.user) return res.redirect('/');
  res.json({
    token: req.user.token,
    username: req.user.username,
    displayName: req.user.displayName,
    conversations: req.user.conversations,
    notifications: req.user.notifications,
    pendingInvites: req.user.pendingInvites,
    memberOf: req.user.memberOf
  });
});

/*
* Search for User
* @type: GET
* @desc:
*
*/
router.get('/search/:query', (req, res) => {
  if (!req.user) return res.redirect('/');

});
