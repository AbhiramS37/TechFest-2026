
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

const registrationRoutes = require("./routes/reg");

const app = express();

app.use(helmet());

app.use(cors({
    origin: [
        "http://localhost:5173",
        process.env.CLIENT_ORIGIN
    ].filter(Boolean)
}));

app.use(express.json({ limit: "10kb" }));

// NoSQL injection protection for request bodies
function containsUnsafeKeys(obj) {
    if (!obj || typeof obj !== "object") return false;

    return Object.entries(obj).some(([key, value]) => {
        if (key.startsWith("$") || key.includes(".")) {
            return true;
        }

        return containsUnsafeKeys(value);
    });
}

app.use((req, res, next) => {
    if (containsUnsafeKeys(req.body)) {
        return res.status(400).json({
            message: "Invalid request data"
        });
    }

    next();
});

app.get("/", (req, res) => {
    res.send("TechFest 2026 API is running!");
});

app.get("/api/health", (req, res) => {
    res.json({ status: "ok" });
});

app.use("/api/register", registrationRoutes);

module.exports = app;
