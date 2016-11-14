var mongoose = require('mongoose')
  , Schema = mongoose.Schema;

var UserSchema = new Schema({
  token: String,
  username: String,
  password: String,
  displayName: String,
  email: String,
  memberOf: [Schema.Types.ObjectId],
  pendingInvites: [Schema.Types.ObjectId]
});

UserSchema.virtual('date')
  .get(() => {
    return this._id.getTimestamp();
  });

mongoose.model('User', UserSchema);
