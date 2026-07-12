// controllers/auditController.js

const Audit = require("../models/Audit");
const Asset = require("../models/Asset");

// =============================
// Create Audit
// POST /api/audits
// =============================
exports.createAudit = async (req, res) => {
    try {

        const { assetId, auditorName, remarks } = req.body;

        const asset = await Asset.findById(assetId);

        if (!asset) {
            return res.status(404).json({
                success: false,
                message: "Asset not found"
            });
        }

        const audit = await Audit.create({
            assetId,
            auditorName,
            remarks,
            auditDate: new Date(),
            status: "Completed"
        });

        res.status(201).json({
            success: true,
            message: "Audit completed successfully",
            audit
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }
};


// =============================
// Get All Audits
// GET /api/audits
// =============================
exports.getAllAudits = async (req, res) => {
    try {

        const audits = await Audit.find();

        res.status(200).json({
            success: true,
            audits
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }
};


// =============================
// Get Audit By ID
// GET /api/audits/:id
// =============================
exports.getAuditById = async (req, res) => {
    try {

        const audit = await Audit.findById(req.params.id);

        if (!audit) {
            return res.status(404).json({
                success: false,
                message: "Audit record not found"
            });
        }

        res.status(200).json({
            success: true,
            audit
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }
};


// =============================
// Update Audit
// PUT /api/audits/:id
// =============================
exports.updateAudit = async (req, res) => {
    try {

        const audit = await Audit.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        if (!audit) {
            return res.status(404).json({
                success: false,
                message: "Audit record not found"
            });
        }

        res.status(200).json({
            success: true,
            message: "Audit updated successfully",
            audit
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }
};


// =============================
// Delete Audit
// DELETE /api/audits/:id
// =============================
exports.deleteAudit = async (req, res) => {
    try {

        const audit = await Audit.findByIdAndDelete(req.params.id);

        if (!audit) {
            return res.status(404).json({
                success: false,
                message: "Audit record not found"
            });
        }

        res.status(200).json({
            success: true,
            message: "Audit deleted successfully"
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }
};