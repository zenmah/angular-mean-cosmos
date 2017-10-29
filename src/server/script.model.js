const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const scriptSchema = new Schema(
  {
    name: String,
    content: String,
    sequence: Number
  },
  {
    collection: 'scripts',
    read: 'nearest'
  }
);

const Script = mongoose.model('Script', scriptSchema);

module.exports = Script;
