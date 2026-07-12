// controllers/departmentController.js

const Department = require("../models/Department");

// =============================
// Create Department
// POST /api/departments
// =============================
exports.createDepartment = async (req, res) => {
    try {

        const { departmentName, manager } = req.body;

        const departmentExists = await Department.findOne({ departmentName });

        if (departmentExists) {
            return res.status(400).json({
                success: false,
                message: "Department already exists"
            });
        }

        const department = await Department.create({
            departmentName,
            manager
        });

        res.status(201).json({
            success: true,
            message: "Department created successfully",
            department
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }
};


// =============================
// Get All Departments
// GET /api/departments
// =============================
exports.getAllDepartments = async (req, res) => {
    try {

        const departments = await Department.find();

        res.status(200).json({
            success: true,
            departments
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }
};


// =============================
// Get Department By ID
// GET /api/departments/:id
// =============================
exports.getDepartmentById = async (req, res) => {
    try {

        const department = await Department.findById(req.params.id);

        if (!department) {
            return res.status(404).json({
                success: false,
                message: "Department not found"
            });
        }

        res.status(200).json({
            success: true,
            department
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }
};


// =============================
// Update Department
// PUT /api/departments/:id
// =============================
exports.updateDepartment = async (req, res) => {
    try {

        const department = await Department.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        if (!department) {
            return res.status(404).json({
                success: false,
                message: "Department not found"
            });
        }

        res.status(200).json({
            success: true,
            message: "Department updated successfully",
            department
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }
};


// =============================
// Delete Department
// DELETE /api/departments/:id
// =============================
exports.deleteDepartment = async (req, res) => {
    try {

        const department = await Department.findByIdAndDelete(req.params.id);

        if (!department) {
            return res.status(404).json({
                success: false,
                message: "Department not found"
            });
        }

        res.status(200).json({
            success: true,
            message: "Department deleted successfully"
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }
};