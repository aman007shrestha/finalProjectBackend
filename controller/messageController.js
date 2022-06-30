const Message = require('../models/MessageModel');

/**
 *
 * @desc Get all messages and choose only latest 5
 */
const getMessages = async (req, res) => {
  try {
    const messages = (await Message.find().sort('-created_on')).slice(0, 5);
    res.status(200).json({
      success: true,
      data: messages,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: error.message,
    });
  }
};

/**
 *
 * @desc save message
 */
const postMessages = async (req, res) => {
  const { player, message } = req.body;
  const newMessage = new Message({
    player,
    message,
  });
  try {
    await newMessage.save();
    res.status(201).json({
      success: true,
      data: newMessage,
    });
  } catch (error) {
    res.status(409).json({
      success: false,
      message: error.message,
    });
  }
};
module.exports = { postMessages, getMessages };
