const mongoose = require('mongoose');
const renameIdPlugin = require('mongoose-rename-id');
const Schema = mongoose.Schema;

const postSchema = new Schema({
  text: { type: String, required: true },
  room: { type: Schema.Types.ObjectId, ref: 'Room' },
  files: [{ type: Schema.Types.ObjectId, ref: 'File' }],
  author: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  votes: [{ type: Schema.Types.ObjectId, ref: 'Vote' }],
  created_at: { type: Schema.Types.Date },
  updated_at: { type: Schema.Types.Date }
});

postSchema.plugin(renameIdPlugin({ newIdName: 'id' }));

module.exports = mongoose.model('Post', postSchema);
