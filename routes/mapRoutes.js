const express = require('express');
const router = express.Router();
const {
  getMap,
  postMap,
  deleteMap,
  getMapById,
} = require('../controller/mapController');

router.route('/').get(getMap).post(postMap);
router.route('/:id').delete(deleteMap).get(getMapById);
module.exports = router;
