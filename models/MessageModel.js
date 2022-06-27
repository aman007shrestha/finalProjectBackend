const mongoose = require('mongoose');
const MessageSchema = new mongoose.Schema(
  {
    player: {
      type: String,
      required: [true, 'Requires player name'],
    },
    message: {
      type: String,
      required: [true, 'Include Message'],
    },
    created_on: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);
const Message = mongoose.model('Message', MessageSchema);
module.exports = Message;
