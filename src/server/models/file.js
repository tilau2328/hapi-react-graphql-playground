const mongoose = require('mongoose');
const renameIdPlugin = require('mongoose-rename-id');
const Schema = mongoose.Schema;

const fileSchema = new Schema({
  title: { type: String, required: true },
  path: { type: String, required: true },
  author: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  votes: [{ type: Schema.Types.ObjectId, ref: 'Vote' }],
  created_at: { type: Schema.Types.Date },
  updated_at: { type: Schema.Types.Date }
});

fileSchema.plugin(renameIdPlugin({ newIdName: 'id' }));

module.exports = mongoose.model('File', fileSchema);
