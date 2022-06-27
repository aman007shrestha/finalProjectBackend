const mongoose = require('mongoose');
const ScoreSchema = new mongoose.Schema({
  player: {
    type: String,
    required: [true, 'Requires player name'],
  },
  score: {
    type: Number,
    required: [true, 'Required Score'],
  },
  time: {
    type: Number,
    require: [true, 'Required Time'],
  },
  created_on: {
    type: Date,
    default: Date.now,
  },
});
const Score = mongoose.model('Score', ScoreSchema);
module.exports = Score;
