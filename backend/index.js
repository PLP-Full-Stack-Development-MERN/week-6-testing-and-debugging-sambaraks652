const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bugRoutes = require("./routes/bugRoutes");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api", bugRoutes);

// Connect to MongoDB
mongoose
  .connect("mongodb://localhost:27017/bug-tracker")
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Failed to connect to MongoDB", err));

// Start the server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Something went wrong!" });
});
