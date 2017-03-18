const mongoose = require('mongoose');
const renameIdPlugin = require('mongoose-rename-id');
const Schema = mongoose.Schema;

const roomSchema = new Schema({
  name: { type: String, required: true, unique: true },
  description: { type: String },
  members: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  admins: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  moderators: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  created_at: { type: Schema.Types.Date, default: Date.now }
});

roomSchema.plugin(renameIdPlugin({ newIdName: 'id' }));

module.exports = mongoose.model('Room', roomSchema);
