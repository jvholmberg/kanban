var mongoose = require('mongoose')
  , Schema = mongoose.Schema;

var UserSchema = new Schema({
  username: String,
  password: String,
  diaries: [Schema.Types.ObjectId]
});

UserSchema.virtual('date')
  .get(() => {
    return this._id.getTimestamp();
  });

mongoose.model('User', UserSchema);
