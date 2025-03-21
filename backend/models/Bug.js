const mongoose = require("mongoose");

const bugSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  status: {
    type: String,
    default: "open",
    enum: ["open", "in-progress", "resolved"],
  },
});

module.exports = mongoose.model("Bug", bugSchema);
