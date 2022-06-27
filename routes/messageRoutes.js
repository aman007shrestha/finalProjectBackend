const express = require('express');
const router = express.Router();
const {
  getMessages,
  postMessages,
} = require('../controller/messageController');

router.route('/').get(getMessages).post(postMessages);
module.exports = router;
