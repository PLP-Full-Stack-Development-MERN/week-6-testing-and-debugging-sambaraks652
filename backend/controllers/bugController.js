const Bug = require("../models/Bug");

// Create a new bug
exports.createBug = async (req, res) => {
  try {
    const { title, description } = req.body;
    const bug = new Bug({ title, description });
    await bug.save();
    res.status(201).json(bug);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Get all bugs
exports.getAllBugs = async (req, res) => {
  try {
    const bugs = await Bug.find();
    res.status(200).json(bugs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Update bug status
exports.updateBugStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    const bug = await Bug.findByIdAndUpdate(id, { status }, { new: true });
    res.status(200).json(bug);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Delete a bug
exports.deleteBug = async (req, res) => {
  try {
    const { id } = req.params;
    await Bug.findByIdAndDelete(id);
    res.status(200).json({ message: "Bug deleted successfully" });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
