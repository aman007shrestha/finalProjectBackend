const express = require('express');
const router = express.Router();
const { getScore, postScore } = require('../controller/scoreController');

router.route('/').get(getScore).post(postScore);
module.exports = router;
