const mongoose = require('mongoose');
const renameIdPlugin = require('mongoose-rename-id');

const voteSchema = new mongoose.Schema({
  author: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  value: { type: Int, required: true }
});

voteSchema.plugin(renameIdPlugin({ newIdName: 'id' }));

module.exports = mongoose.model('Vote', voteSchema);
