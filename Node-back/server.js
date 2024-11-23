const express = require("express");
const mongoose = require("mongoose");
const User = require("./models/user.js");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((err) => {
    console.log("Database connection error:", err);
  });

// Routes
app.post("/api/users", async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.send(user);
  } catch (err) {
    console.log(err);
    res.status(500).send("Something went wrong: " + err);
  }
});

app.get("/api/users", async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json({ message: "Data fetched", users });
  } catch (err) {
    console.log(err);
    res.status(500).send("Something went wrong: " + err);
  }
});

// Start the server
app.listen(5001, () => {
  console.log("Server is running on port 5001");
});
