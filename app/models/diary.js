var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var DiarySchema = new Schema({
  owner: Schema.Types.ObjectId,
  activities: [{
    title: { type: String, default: '#NoNameDay' },
    exercises: [{
      title: { type: String, default: '#Exercise' },
      sets: [{
        weight: { type: Number, default: 0 },
        reps: {  type: Number, default: 0}
      }]
    }],
    timestamp: { type: Date, default: Date.now }
  }]
});

DiarySchema.virtual('date')
  .get(function(){
    return this._id.getTimestamp();
  });

mongoose.model('Diary', DiarySchema);
