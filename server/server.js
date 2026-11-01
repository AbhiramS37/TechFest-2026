
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const helmet = require("helmet");
require("dotenv").config();

const registrationRoutes = require("./routes/reg");

const app = express();

// Security middleware
app.use(helmet());

app.use(cors({
    origin: [
        "http://localhost:5173",
        process.env.CLIENT_ORIGIN
    ].filter(Boolean)
}));

app.use(express.json({ limit: "10kb" }));

// Reject unsafe MongoDB operator keys in request bodies
function hasUnsafeKeys(value) {
    if (!value || typeof value !== "object") return false;

    return Object.entries(value).some(([key, child]) => {
        return key.startsWith("$") ||
            key.includes(".") ||
            hasUnsafeKeys(child);
    });
}

app.use((req, res, next) => {
    if (hasUnsafeKeys(req.body)) {
        return res.status(400).json({
            message: "Invalid request data"
        });
    }
    next();
});

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

// Start server after MongoDB connects
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
        process.exit(1);
    });
