var express = require('express')
  , router = express.Router()
  , mongoose = require('mongoose')
  , User = mongoose.model('User')
  , Story = mongoose.model('Story')
  , passport = require('passport');

module.exports = function(app, io) {
  app.use('/story', router);
};

router.post('/create', (req, res, next) => {
  if (!req.user) return res.redirect('/');

  Story.create({
    owner: data.owner,
    members: [{
      token: data.owner,
      permission: 0
    }],
    title: data.title,
    text: data.text,
    boards: [],
    items: [],
    history: [{
      member: data.owner,
      action: 'CREATE_STORY',
      text: ''
    }]
  }, (err, story) => {
    if (err) return next(err);

    next(story)
  });
})
