const File = require('../models/File');

exports.uploadFile = async (req, res) => {
  try {
    const { filename, path, price } = req.body;
    const file = await File.create({ user: req.user.id, filename, path, price });
    res.status(201).json(file);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getFiles = async (req, res) => {
  const files = await File.find({ user: req.user.id });
  res.json(files);
};
