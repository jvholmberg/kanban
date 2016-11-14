var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var StorySchema = new Schema({
  owner: Schema.Types.ObjectId,
  members: [{
    token: Schema.Types.ObjectId,
    permission: Number
  }],
  title: String,
  text: String,
  boards: [Schema.Types.ObjectId],
  history: [{
    member: Schema.Types.ObjectId,
    action: String,
    text: String,
    timestamp: { type: Date, default: Date.now }
  }]
});

StorySchema.virtual('date')
  .get(function(){
    return this._id.getTimestamp();
  });

mongoose.model('Story', StorySchema);
