const Map = require('../models/MapModel');
/**
 *
 * @desc gets all the map collections
 */
const getMap = async (req, res) => {
  try {
    const maps = await Map.find();
    res.status(200).json({
      success: true,
      data: maps,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      data: error.message,
    });
  }
};

/**
 *
 * @desc get a map by id
 */
const getMapById = async (req, res) => {
  try {
    const map = await Map.findById(req.params.id);
    res.status(200).json({
      success: true,
      data: map,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      data: 'Object not founds',
    });
  }
};

/**
 * @desc delete a map by id
 */
const deleteMap = async (req, res) => {
  try {
    const map = await Map.findById(req.params.id);
    await map.remove();
    res.status(200).json({
      success: true,
      data: 'Object Deleted',
    });
  } catch (error) {
    res.status(404).json({
      message: 'Object Not FOund',
    });
  }
};

/**
 *
 * @desc save a map
 */
const postMap = async (req, res) => {
  const { player, mapData } = req.body;
  const level = (await Map.find()).length + 1;
  const newMap = new Map({
    player,
    map: mapData,
    level,
  });
  try {
    await newMap.save();
    res.status(201).json({
      success: true,
      data: newMap,
    });
  } catch (error) {
    res.status(409).json({
      success: false,
      data: error.message,
    });
  }
};
module.exports = { getMap, postMap, deleteMap, getMapById };
