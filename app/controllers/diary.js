var express = require('express')
  , router = express.Router()
  , mongoose = require('mongoose')
  , Diary = mongoose.model('Diary')

module.exports = function(app) {
  app.use('/diary', router);
};

/*
* Create Workout
* @type: POST
* @desc: Create an activity in diary
*
*/
router.post('/', (req, res) => {
  Diary.findById(req.body.diaryId, (err, diary) => {
    if (err) return console.log(err);

    var record = req.body.activity;
    record['id'] = new mongoose.Types.ObjectId();
    diary.activities.push(record);

    diary.save();
    res.json(diary);
  });
});

/*
* Update Workout
* @type: put
* @desc: Update an existing activity in diary
*
*/
router.put('/', (req, res) => {
  Diary.findById(req.body.diaryId, (err, diary) => {
    if (err) return console.log(err);

    var record = req.body.activity;
    diary.activities.push(record);

    diary.save();
    res.json(diary);
  });
});

/*
* Get all Workouts
* @type: GET
* @desc:
*
*/
router.get('/', (req, res) => {
  Diary.findById(req.user.diaries[0], (err, diary) => {
    if (err) return console.log(err);
    res.json(diary);
  })
});
