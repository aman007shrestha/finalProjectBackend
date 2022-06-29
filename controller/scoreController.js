const Score = require('../models/Score');

const getScore = async (req, res) => {
  try {
    const scores = (await Score.find().sort('-score')).slice(0, 5);
    res.status(200).json({
      success: true,
      data: scores,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: error.message,
    });
  }
};

const postScore = async (req, res) => {
  const { player, score, time } = req.body;
  const newScore = new Score({
    player,
    score,
    time,
  });
  try {
    await newScore.save();
    res.status(201).json({
      success: true,
      data: newScore,
    });
  } catch (error) {
    res.status(409).json({
      success: false,
      message: error.message,
    });
  }
};
module.exports = { postScore, getScore };
