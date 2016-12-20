var express = require('express')
  , router = express.Router()
  , mongoose = require('mongoose')
  , User = mongoose.model('User')
  , Diary = mongoose.model('Diary')
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
*   2. Email is not already taken
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
    if (err) return console.log(err);
    if (user) return console.log(user);

    // Encrypt password
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(req.body.password, salt, (err, hash) => {

        Diary.create({
          title: 'Notebook',
          workouts: [{
            id: 0,
            title: '#Armday',
            exercises: [{
              title: 'Bicep curl',
              sets: [
                { weight: 25, reps: 12 },
                { weight: 25, reps: 10 },
                { weight: 22, reps: 10 },
              ]
            }, {
              title: 'Triceps',
              sets: [
                { weight: 40, reps: 12 },
                { weight: 40, reps: 10 },
                { weight: 40, reps: 8 },
              ]
            }]
          }]
        }, (err, diary) => {
          if (err) return console.log(err);

          // Create user
          User.create({
            username: req.body.username,
            password: hash,
            diaries: [diary._id]
          }, (err, user) => {
            if (err) return console.log(err);

            res.redirect('/');
          });
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
    successRedirect: '/dashboard',
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
