// controllers/maintenanceController.js

const Maintenance = require("../models/Maintenance");

// =============================
// Create Maintenance Request
// POST /api/maintenance
// =============================
exports.createRequest = async (req, res) => {
    try {

        const { assetId, issue, reportedBy } = req.body;

        const request = await Maintenance.create({
            assetId,
            issue,
            reportedBy,
            status: "Pending"
        });

        res.status(201).json({
            success: true,
            message: "Maintenance request created successfully",
            request
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }
};


// =============================
// Get All Maintenance Requests
// GET /api/maintenance
// =============================
exports.getAllRequests = async (req, res) => {
    try {

        const requests = await Maintenance.find();

        res.status(200).json({
            success: true,
            requests
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }
};


// =============================
// Get Request By ID
// GET /api/maintenance/:id
// =============================
exports.getRequestById = async (req, res) => {
    try {

        const request = await Maintenance.findById(req.params.id);

        if (!request) {
            return res.status(404).json({
                success: false,
                message: "Maintenance request not found"
            });
        }

        res.status(200).json({
            success: true,
            request
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }
};


// =============================
// Update Maintenance Request
// PUT /api/maintenance/:id
// =============================
exports.updateRequest = async (req, res) => {
    try {

        const request = await Maintenance.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        if (!request) {
            return res.status(404).json({
                success: false,
                message: "Maintenance request not found"
            });
        }

        res.status(200).json({
            success: true,
            message: "Maintenance request updated successfully",
            request
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }
};


// =============================
// Delete Maintenance Request
// DELETE /api/maintenance/:id
// =============================
exports.deleteRequest = async (req, res) => {
    try {

        const request = await Maintenance.findByIdAndDelete(req.params.id);

        if (!request) {
            return res.status(404).json({
                success: false,
                message: "Maintenance request not found"
            });
        }

        res.status(200).json({
            success: true,
            message: "Maintenance request deleted successfully"
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }
};