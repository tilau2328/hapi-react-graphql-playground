const mongoose = require('mongoose');
const renameIdPlugin = require('mongoose-rename-id');
const Schema = mongoose.Schema;

const voteSchema = new Schema({
  author: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  value: { type: Schema.Types.Number, required: true }
});

voteSchema.plugin(renameIdPlugin({ newIdName: 'id' }));

module.exports = mongoose.model('Vote', voteSchema);
