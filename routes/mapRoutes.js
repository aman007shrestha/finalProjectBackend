const express = require('express');
const router = express.Router();
const { getMap, postMap, deleteMap } = require('../controller/mapController');

router.route('/').get(getMap).post(postMap);
router.route('/:id').delete(deleteMap);
module.exports = router;
