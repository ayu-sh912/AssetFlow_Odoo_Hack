// controllers/dashboardController.js

const Asset = require("../models/Asset");
const Allocation = require("../models/Allocation");
const Booking = require("../models/Booking");
const Maintenance = require("../models/Maintenance");

// Dashboard Summary
exports.getDashboard = async (req, res) => {
    try {

        const availableAssets = await Asset.countDocuments({ status: "Available" });
        const allocatedAssets = await Asset.countDocuments({ status: "Allocated" });
        const maintenanceAssets = await Maintenance.countDocuments({ status: "Pending" });
        const activeBookings = await Booking.countDocuments({ status: "Upcoming" });
        const overdueReturns = await Allocation.countDocuments({
            expectedReturnDate: { $lt: new Date() },
            status: "Allocated"
        });

        res.status(200).json({
            success: true,
            data: {
                availableAssets,
                allocatedAssets,
                maintenanceAssets,
                activeBookings,
                overdueReturns
            }
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }
};


// Dashboard Statistics
exports.getStatistics = async (req, res) => {

    try {

        const assetStats = await Asset.aggregate([
            {
                $group: {
                    _id: "$status",
                    count: { $sum: 1 }
                }
            }
        ]);

        res.status(200).json({
            success: true,
            assetStats
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};