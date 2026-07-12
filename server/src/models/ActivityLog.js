import mongoose from "mongoose";

const activityLogSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    action: {
      type: String,
      required: true,
      trim: true,
    },

    module: {
      type: String,
      enum: [
        "User",
        "Asset",
        "Allocation",
        "Transfer",
        "Maintenance",
        "Audit",
        "Booking",
        "System",
      ],
      required: true,
    },

    description: {
      type: String,
      required: true,
      trim: true,
    },

    entityType: {
      type: String,
      trim: true,
    },

    entityId: {
      type: mongoose.Schema.Types.ObjectId,
    },

    ipAddress: {
      type: String,
      trim: true,
    },

    userAgent: {
      type: String,
      trim: true,
    },

    status: {
      type: String,
      enum: [
        "Success",
        "Failed",
      ],
      default: "Success",
    },

    metadata: {
      type: mongoose.Schema.Types.Mixed,
      default: {},
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


// Optimization for activity timeline

activityLogSchema.index({
  user: 1,
  createdAt: -1,
});


activityLogSchema.index({
  module: 1,
  createdAt: -1,
});


const ActivityLog = mongoose.model(
  "ActivityLog",
  activityLogSchema
);


export default ActivityLog;