const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const User = require("./models/User");

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect(
  "mongodb://admin:password123@localhost:27017/formdb?authSource=admin"
);

mongoose.connection.once("open", () => {
  console.log("MongoDB connected");
});

// API route
app.post("/submit", async (req, res) => {
  try {
    const { name, age } = req.body;

    const user = new User({ name, age });
    await user.save();

    res.status(201).json({ message: "Data saved successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(5001, () => {
  console.log("Server running on port 5001");
});
