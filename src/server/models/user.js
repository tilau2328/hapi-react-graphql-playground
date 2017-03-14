const mongoose = require('mongoose');
const renameIdPlugin = require('mongoose-rename-id');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  followers: [{ type: Schema.Types.ObjectId, ref: 'User' }]
});

userSchema.plugin(renameIdPlugin({ newIdName: 'id' }));

module.exports = mongoose.model('User', userSchema);
