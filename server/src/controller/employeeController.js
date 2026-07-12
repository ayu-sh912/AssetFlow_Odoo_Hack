// controllers/employeeController.js

const Employee = require("../models/Employee");

// =============================
// Add Employee
// POST /api/employees
// =============================
exports.addEmployee = async (req, res) => {
    try {

        const { name, email, department, designation } = req.body;

        const employeeExists = await Employee.findOne({ email });

        if (employeeExists) {
            return res.status(400).json({
                success: false,
                message: "Employee already exists"
            });
        }

        const employee = await Employee.create({
            name,
            email,
            department,
            designation
        });

        res.status(201).json({
            success: true,
            message: "Employee added successfully",
            employee
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }
};


// =============================
// Get All Employees
// GET /api/employees
// =============================
exports.getAllEmployees = async (req, res) => {
    try {

        const employees = await Employee.find();

        res.status(200).json({
            success: true,
            employees
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }
};


// =============================
// Get Employee By ID
// GET /api/employees/:id
// =============================
exports.getEmployeeById = async (req, res) => {
    try {

        const employee = await Employee.findById(req.params.id);

        if (!employee) {
            return res.status(404).json({
                success: false,
                message: "Employee not found"
            });
        }

        res.status(200).json({
            success: true,
            employee
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }
};


// =============================
// Update Employee
// PUT /api/employees/:id
// =============================
exports.updateEmployee = async (req, res) => {
    try {

        const employee = await Employee.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        if (!employee) {
            return res.status(404).json({
                success: false,
                message: "Employee not found"
            });
        }

        res.status(200).json({
            success: true,
            message: "Employee updated successfully",
            employee
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }
};


// =============================
// Delete Employee
// DELETE /api/employees/:id
// =============================
exports.deleteEmployee = async (req, res) => {
    try {

        const employee = await Employee.findByIdAndDelete(req.params.id);

        if (!employee) {
            return res.status(404).json({
                success: false,
                message: "Employee not found"
            });
        }

        res.status(200).json({
            success: true,
            message: "Employee deleted successfully"
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }
};