// controllers/assetCategoryController.js

const AssetCategory = require("../models/AssetCategory");

// =============================
// Add Asset Category
// POST /api/categories
// =============================
exports.addCategory = async (req, res) => {
    try {

        const { categoryName, description } = req.body;

        const categoryExists = await AssetCategory.findOne({ categoryName });

        if (categoryExists) {
            return res.status(400).json({
                success: false,
                message: "Category already exists"
            });
        }

        const category = await AssetCategory.create({
            categoryName,
            description
        });

        res.status(201).json({
            success: true,
            message: "Category added successfully",
            category
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }
};


// =============================
// Get All Categories
// GET /api/categories
// =============================
exports.getAllCategories = async (req, res) => {
    try {

        const categories = await AssetCategory.find();

        res.status(200).json({
            success: true,
            categories
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }
};


// =============================
// Update Category
// PUT /api/categories/:id
// =============================
exports.updateCategory = async (req, res) => {
    try {

        const category = await AssetCategory.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        if (!category) {
            return res.status(404).json({
                success: false,
                message: "Category not found"
            });
        }

        res.status(200).json({
            success: true,
            message: "Category updated successfully",
            category
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }
};


// =============================
// Delete Category
// DELETE /api/categories/:id
// =============================
exports.deleteCategory = async (req, res) => {
    try {

        const category = await AssetCategory.findByIdAndDelete(req.params.id);

        if (!category) {
            return res.status(404).json({
                success: false,
                message: "Category not found"
            });
        }

        res.status(200).json({
            success: true,
            message: "Category deleted successfully"
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }
};