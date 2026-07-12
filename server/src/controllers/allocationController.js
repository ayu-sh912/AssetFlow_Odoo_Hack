// controllers/allocationController.js

const Allocation = require("../models/Allocation");
const Asset = require("../models/Asset");

// =============================
// Allocate Asset
// POST /api/allocations
// =============================
exports.allocateAsset = async (req, res) => {
    try {

        const { assetId, employeeId, expectedReturnDate } = req.body;

        const asset = await Asset.findById(assetId);

        if (!asset) {
            return res.status(404).json({
                success: false,
                message: "Asset not found"
            });
        }

        if (asset.status === "Allocated") {
            return res.status(400).json({
                success: false,
                message: "Asset is already allocated"
            });
        }

        const allocation = await Allocation.create({
            assetId,
            employeeId,
            expectedReturnDate,
            status: "Allocated"
        });

        asset.status = "Allocated";
        await asset.save();

        res.status(201).json({
            success: true,
            message: "Asset allocated successfully",
            allocation
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }
};


// =============================
// Return Asset
// PUT /api/allocations/return/:id
// =============================
exports.returnAsset = async (req, res) => {
    try {

        const allocation = await Allocation.findById(req.params.id);

        if (!allocation) {
            return res.status(404).json({
                success: false,
                message: "Allocation not found"
            });
        }

        allocation.status = "Returned";
        await allocation.save();

        const asset = await Asset.findById(allocation.assetId);
        asset.status = "Available";
        await asset.save();

        res.status(200).json({
            success: true,
            message: "Asset returned successfully"
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }
};


// =============================
// Get All Allocations
// GET /api/allocations
// =============================
exports.getAllAllocations = async (req, res) => {
    try {

        const allocations = await Allocation.find();

        res.status(200).json({
            success: true,
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
// Transfer Asset
// PUT /api/allocations/transfer/:id
// =============================
exports.transferAsset = async (req, res) => {
    try {

        const { newEmployeeId } = req.body;

        const allocation = await Allocation.findById(req.params.id);

        if (!allocation) {
            return res.status(404).json({
                success: false,
                message: "Allocation not found"
            });
        }

        allocation.employeeId = newEmployeeId;

        await allocation.save();

        res.status(200).json({
            success: true,
            message: "Asset transferred successfully",
            allocation
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }
};