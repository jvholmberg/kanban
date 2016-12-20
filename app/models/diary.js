var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var DiarySchema = new Schema({
  title: String,
  workouts: [{
    title: { type: String, default: '#NoNameDay' },
    timestamp: { type: Date, default: Date.now },
    exercises: [{
      title: { type: String, default: '#Exercise' },
      sets: [{
        weight: { type: Number, default: 0 },
        reps: {  type: Number, default: 0}
      }]
    }]
  }]
});

DiarySchema.virtual('date')
  .get(function(){
    return this._id.getTimestamp();
  });

mongoose.model('Diary', DiarySchema);
