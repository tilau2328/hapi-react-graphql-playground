const mongoose = require('mongoose');
const renameIdPlugin = require('mongoose-rename-id');

const commentSchema = new mongoose.Schema({
  text: { type: String, required: true },
  post: { type: Schema.Types.ObjectId, ref: 'Post' },
  file: { type: Schema.Types.ObjectId, ref: 'File' },
  author: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  votes: [{ type: Schema.Types.ObjectId, ref: 'Vote' }],
  created_at: { type: Schema.Types.Date },
  updated_at: { type: Schema.Types.Date }
});

commentSchema.plugin(renameIdPlugin({ newIdName: 'id' }));

module.exports = mongoose.model('Comment', commentSchema);
