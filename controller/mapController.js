const Map = require('../models/MapModel');

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

const getMapById = async (req, res) => {
  console.log(req.params.id);
  try {
    const map = await Map.findById(req.params.id);
    res.status(200).json({
      success: true,
      data: map,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      data: "Object not founds"
    })
  }
};

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

const postMap = async (req, res) => {
  const { player, mapData } = req.body;
  console.log(mapData);
  const level = (await Map.find()).length;
  console.log(level);

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
