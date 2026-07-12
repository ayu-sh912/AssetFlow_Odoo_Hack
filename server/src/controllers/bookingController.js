// controllers/bookingController.js

const Booking = require("../models/Booking");

// =============================
// Create Booking
// POST /api/bookings
// =============================
exports.createBooking = async (req, res) => {
    try {

        const { resourceName, bookedBy, bookingDate, purpose } = req.body;

        const booking = await Booking.create({
            resourceName,
            bookedBy,
            bookingDate,
            purpose,
            status: "Booked"
        });

        res.status(201).json({
            success: true,
            message: "Booking created successfully",
            booking
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }
};


// =============================
// Get All Bookings
// GET /api/bookings
// =============================
exports.getAllBookings = async (req, res) => {
    try {

        const bookings = await Booking.find();

        res.status(200).json({
            success: true,
            bookings
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }
};


// =============================
// Get Booking By ID
// GET /api/bookings/:id
// =============================
exports.getBookingById = async (req, res) => {
    try {

        const booking = await Booking.findById(req.params.id);

        if (!booking) {
            return res.status(404).json({
                success: false,
                message: "Booking not found"
            });
        }

        res.status(200).json({
            success: true,
            booking
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }
};


// =============================
// Update Booking
// PUT /api/bookings/:id
// =============================
exports.updateBooking = async (req, res) => {
    try {

        const booking = await Booking.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        if (!booking) {
            return res.status(404).json({
                success: false,
                message: "Booking not found"
            });
        }

        res.status(200).json({
            success: true,
            message: "Booking updated successfully",
            booking
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }
};


// =============================
// Cancel Booking
// DELETE /api/bookings/:id
// =============================
exports.cancelBooking = async (req, res) => {
    try {

        const booking = await Booking.findByIdAndDelete(req.params.id);

        if (!booking) {
            return res.status(404).json({
                success: false,
                message: "Booking not found"
            });
        }

        res.status(200).json({
            success: true,
            message: "Booking cancelled successfully"
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }
};