import mongoose from "mongoose";

const notificationSchema = new mongoose.Schema(
  {
    recipient: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    title: {
      type: String,
      required: true,
      trim: true,
    },

    message: {
      type: String,
      required: true,
      trim: true,
    },

    type: {
      type: String,
      enum: [
        "Asset Allocation",
        "Asset Transfer",
        "Maintenance",
        "Audit",
        "System",
      ],
      default: "System",
    },

    priority: {
      type: String,
      enum: [
        "Low",
        "Medium",
        "High",
        "Critical",
      ],
      default: "Medium",
    },

    relatedEntity: {
      entityType: {
        type: String,
        enum: [
          "Asset",
          "Allocation",
          "Transfer",
          "Maintenance",
          "Audit",
        ],
      },

      entityId: {
        type: mongoose.Schema.Types.ObjectId,
      },
    },

    isRead: {
      type: Boolean,
      default: false,
    },

    readAt: {
      type: Date,
    },

    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },

    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);


// Faster notification fetching

notificationSchema.index({
  recipient: 1,
  isRead: 1,
  createdAt: -1,
});


const Notification = mongoose.model(
  "Notification",
  notificationSchema
);


export default Notification;