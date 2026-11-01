const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");

const Registration = require("../models/reg");

// POST - Register for an event
router.post(
    "/",
    [
        body("name")
            .trim()
            .notEmpty().withMessage("Name is required")
            .isLength({ max: 100 }),

        body("email")
            .trim()
            .isEmail().withMessage("Enter a valid email")
            .normalizeEmail(),

        body("department")
            .trim()
            .notEmpty().withMessage("Department is required"),

        body("year")
            .isInt({ min: 1, max: 4 })
            .withMessage("Year must be between 1 and 4"),

        body("event")
            .trim()
            .notEmpty().withMessage("Event is required")
    ],
    async (req, res) => {
        try {
            const errors = validationResult(req);

            if (!errors.isEmpty()) {
                return res.status(400).json({
                    errors: errors.array()
                });
            }

            const { name, email, department, year, event } = req.body;

            const registration = new Registration({
                name,
                email,
                department,
                year,
                event
            });

            await registration.save();

            res.status(201).json({
                message: "Registration successful!",
                registration
            });

        } catch (error) {
            console.error(error);

            res.status(500).json({
                message: "Registration failed"
            });
        }
    }
);

// GET - View all registrations
router.get("/", async (req, res) => {
    try {
        const registrations = await Registration.find();

        res.status(200).json(registrations);

    } catch (error) {
        res.status(500).json({
            message: "Failed to fetch registrations"
        });
    }
});

module.exports = router;