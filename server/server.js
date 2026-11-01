const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const helmet = require("helmet");
const mongoSanitize = require("express-mongo-sanitize");
require("dotenv").config();

const registrationRoutes = require("./routes/reg");

const app = express();

// Security middleware
app.use(helmet());

app.use(cors({
    origin: "http://localhost:5173"
}));

app.use(express.json({ limit: "10kb" }));

app.use(mongoSanitize());

// Home route
app.get("/", (req, res) => {
    res.send("TechFest 2026 API is running!");
});

// Health check
app.get("/api/health", (req, res) => {
    res.json({ status: "ok" });
});

// Registration routes
app.use("/api/register", registrationRoutes);

// Connect MongoDB and start server
const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log("MongoDB connected successfully!");

        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });
    })
    .catch((error) => {
        console.error("MongoDB connection failed:", error.message);
    });