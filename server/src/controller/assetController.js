// controllers/assetController.js

const Asset = require("../models/Asset");

// =============================
// Add Asset
// POST /api/assets
// =============================
exports.addAsset = async (req, res) => {
    try {

        const { assetName, category, serialNumber, location } = req.body;

        const assetExists = await Asset.findOne({ serialNumber });

        if (assetExists) {
            return res.status(400).json({
                success: false,
                message: "Asset already exists"
            });
        }

        const asset = await Asset.create({
            assetName,
            category,
            serialNumber,
            location,
            status: "Available"
        });

        res.status(201).json({
            success: true,
            message: "Asset added successfully",
            asset
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }
};


// =============================
// Get All Assets
// GET /api/assets
// =============================
exports.getAllAssets = async (req, res) => {
    try {

        const assets = await Asset.find();

        res.status(200).json({
            success: true,
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
// Get Asset By ID
// GET /api/assets/:id
// =============================
exports.getAssetById = async (req, res) => {
    try {

        const asset = await Asset.findById(req.params.id);

        if (!asset) {
            return res.status(404).json({
                success: false,
                message: "Asset not found"
            });
        }

        res.status(200).json({
            success: true,
            asset
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }
};


// =============================
// Update Asset
// PUT /api/assets/:id
// =============================
exports.updateAsset = async (req, res) => {
    try {

        const asset = await Asset.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        if (!asset) {
            return res.status(404).json({
                success: false,
                message: "Asset not found"
            });
        }

        res.status(200).json({
            success: true,
            message: "Asset updated successfully",
            asset
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }
};


// =============================
// Delete Asset
// DELETE /api/assets/:id
// =============================
exports.deleteAsset = async (req, res) => {
    try {

        const asset = await Asset.findByIdAndDelete(req.params.id);

        if (!asset) {
            return res.status(404).json({
                success: false,
                message: "Asset not found"
            });
        }

        res.status(200).json({
            success: true,
            message: "Asset deleted successfully"
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }
};


// =============================
// Search Asset
// GET /api/assets/search?name=...
// =============================
exports.searchAsset = async (req, res) => {
    try {

        const { name } = req.query;

        const assets = await Asset.find({
            assetName: { $regex: name, $options: "i" }
        });

        res.status(200).json({
            success: true,
            assets
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }
};