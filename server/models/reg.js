const mongoose = require("mongoose");

const registrationSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        lowercase: true,
        trim: true
    },
    department: {
        type: String,
        required: true
    },
    year: {
        type: Number,
        required: true
    },
    event: {
        type: String,
        required: true
    }
}, { timestamps: true });

module.exports = mongoose.model("Registration", registrationSchema);