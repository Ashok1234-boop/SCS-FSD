require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

// Connect Database
connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Import Controller Functions (Curly Brace Style)
const { registerUser, loginUser } = require("./controllers/authControllers");
const { createComplaint } = require("./controllers/complaintControllers");

// Set Up Express Routers
const authRouter = express.Router();
const complaintRouter = express.Router();

// Assign Functions to Routes
authRouter.post("/register", registerUser);
authRouter.post("/login", loginUser);
complaintRouter.post("/", createComplaint);

// Mount Routers to Endpoint Paths
app.use("/api/auth", authRouter);
app.use("/api/complaints", complaintRouter);

// Test Route
app.get("/", (req, res) => {
  res.send("Smart Complaint Management System Backend Running");
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});