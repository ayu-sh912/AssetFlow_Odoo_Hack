// controllers/reportController.js

const Asset = require("../models/Asset");
const Allocation = require("../models/Allocation");
const Maintenance = require("../models/Maintenance");
const Booking = require("../models/Booking");

// =============================
// Asset Report
// GET /api/reports/assets
// =============================
exports.getAssetReport = async (req, res) => {
    try {

        const assets = await Asset.find();

        res.status(200).json({
            success: true,
            totalAssets: assets.length,
            assets
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }
};


// =============================
// Allocation Report
// GET /api/reports/allocations
// =============================
exports.getAllocationReport = async (req, res) => {
    try {

        const allocations = await Allocation.find();

        res.status(200).json({
            success: true,
            totalAllocations: allocations.length,
            allocations
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }
};


// =============================
// Maintenance Report
// GET /api/reports/maintenance
// =============================
exports.getMaintenanceReport = async (req, res) => {
    try {

        const maintenance = await Maintenance.find();

        res.status(200).json({
            success: true,
            totalRequests: maintenance.length,
            maintenance
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }
};


// =============================
// Booking Report
// GET /api/reports/bookings
// =============================
exports.getBookingReport = async (req, res) => {
    try {

        const bookings = await Booking.find();

        res.status(200).json({
            success: true,
            totalBookings: bookings.length,
            bookings
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }
};