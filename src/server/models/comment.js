const mongoose = require('mongoose');
const renameIdPlugin = require('mongoose-rename-id');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
  text: { type: String, required: true },
  post: { type: Schema.Types.ObjectId, ref: 'Post' },
  file: { type: Schema.Types.ObjectId, ref: 'File' },
  author: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  votes: [{ type: Schema.Types.ObjectId, ref: 'Vote' }],
  created_at: { type: Schema.Types.Date, default: Date.now },
  updated_at: { type: Schema.Types.Date }
});

commentSchema.plugin(renameIdPlugin({ newIdName: 'id' }));

module.exports = mongoose.model('Comment', commentSchema);
