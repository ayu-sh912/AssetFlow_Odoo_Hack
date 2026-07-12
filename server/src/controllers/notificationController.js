// controllers/notificationController.js

const Notification = require("../models/Notification");

// =============================
// Create Notification
// POST /api/notifications
// =============================
exports.createNotification = async (req, res) => {
    try {

        const { title, message, userId } = req.body;

        const notification = await Notification.create({
            title,
            message,
            userId,
            isRead: false
        });

        res.status(201).json({
            success: true,
            message: "Notification created successfully",
            notification
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }
};


// =============================
// Get All Notifications
// GET /api/notifications
// =============================
exports.getAllNotifications = async (req, res) => {
    try {

        const notifications = await Notification.find().sort({ createdAt: -1 });

        res.status(200).json({
            success: true,
            notifications
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }
};


// =============================
// Get Notification By ID
// GET /api/notifications/:id
// =============================
exports.getNotificationById = async (req, res) => {
    try {

        const notification = await Notification.findById(req.params.id);

        if (!notification) {
            return res.status(404).json({
                success: false,
                message: "Notification not found"
            });
        }

        res.status(200).json({
            success: true,
            notification
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }
};


// =============================
// Mark Notification as Read
// PUT /api/notifications/:id
// =============================
exports.markAsRead = async (req, res) => {
    try {

        const notification = await Notification.findByIdAndUpdate(
            req.params.id,
            { isRead: true },
            { new: true }
        );

        if (!notification) {
            return res.status(404).json({
                success: false,
                message: "Notification not found"
            });
        }

        res.status(200).json({
            success: true,
            message: "Notification marked as read",
            notification
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }
};


// =============================
// Delete Notification
// DELETE /api/notifications/:id
// =============================
exports.deleteNotification = async (req, res) => {
    try {

        const notification = await Notification.findByIdAndDelete(req.params.id);

        if (!notification) {
            return res.status(404).json({
                success: false,
                message: "Notification not found"
            });
        }

        res.status(200).json({
            success: true,
            message: "Notification deleted successfully"
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }
};