const Bootcamp = require("../models/Bootcamp");

// @desc get all bootstraps
// @route GET /api/v1/bootcamps
// @access Public
exports.getBootCamps = async (req, res, next) => {
  try {
    const bootcamps = await Bootcamp.find();
    res
      .status(200)
      .json({ status: true, count: bootcamps.length, data: bootcamps });
  } catch (error) {
    res.status(400).json({ status: false });
  }
};

// @desc get single bootstraps
// @route GET /api/v1/bootcamps/:id
// @access Public
exports.getBootCamp = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.findById(req.params.id);
    if (!bootcamp) {
      return res.status(400).json({ status: false });
    }
    res.status(200).json({ status: true, data: bootcamp });
  } catch (error) {
    res.status(400).json({ status: false });
  }
};

// @desc Create new bootstrap
// @route POST /api/v1/bootcamps
// @access Private
exports.createBootcamp = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.create(req.body);
    res.status(201).json({ success: true, data: bootcamp });
  } catch (error) {
    res.status(400).json({ status: false });
  }
};

// @desc update bootstrap
// @route PUT /api/v1/bootcamps/:id
// @access Private
exports.updateBootcamp = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!bootcamp) {
      return res.status(400).json({ status: false });
    }
    res.status(200).json({ status: true, body: bootcamp });
  } catch (error) {
    res.status(400).json({ status: false });
  }
};

// @desc delete bootstrap
// @route PUT /api/v1/bootcamps/:id
// @access Private
exports.deleteBootcamp = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.findByIdAndDelete(req.params.id);
    if (!bootcamp) {
      return res.status(400).json({ status: false });
    }
    res.status(200).json({ status: true });
  } catch (error) {
    res.status(400).json({ status: false });
  }
};
