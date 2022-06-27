const mongoose = require('mongoose');
const MapSchema = new mongoose.Schema(
  {
    player: {
      type: String,
      required: [true, 'Requires player name'],
    },
    level: {
      type: Number,
    },
    map: {
      type: [],
      required: [true, 'Include map data'],
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
const Map = mongoose.model('Map', MapSchema);
module.exports = Map;
