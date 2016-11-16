var mongoose = require('mongoose')
  , Schema = mongoose.Schema;

var UserSchema = new Schema({
  token: String,
  username: String,
  password: String,
  displayName: String,
  email: String,
  conversations: [{
    recipient: String,
    messages: [{
      from: String,
      text: String,
      timestamp: { type: Date, default: Date.now }
    }]
  }],
  notifications: [{
    type: String,
    text: String,
    timestamp: { type: Date, default: Date.now }
  }],
  memberOf: [Schema.Types.ObjectId],
  pendingInvites: [Schema.Types.ObjectId]
});

UserSchema.virtual('date')
  .get(() => {
    return this._id.getTimestamp();
  });

mongoose.model('User', UserSchema);
