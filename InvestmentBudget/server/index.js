const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json()); // Ensure JSON parsing is enabled

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Connected to MongoDB"))
    .catch(err => console.error("MongoDB connection error:", err));

const transactionRoutes = require("./routes/transactions");
app.use("/api/transactions", transactionRoutes); // Ensure this is present

app.listen(5000, () => console.log("Server running on port 5000"));

