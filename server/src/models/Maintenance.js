import mongoose from "mongoose";

const maintenanceSchema = new mongoose.Schema(
  {
    asset: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Asset",
      required: true,
    },

    requestedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    assignedTo: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },

    issueTitle: {
      type: String,
      required: true,
      trim: true,
    },

    issueDescription: {
      type: String,
      required: true,
      trim: true,
    },

    maintenanceType: {
      type: String,
      enum: [
        "Repair",
        "Service",
        "Inspection",
        "Replacement",
      ],
      default: "Repair",
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

    status: {
      type: String,
      enum: [
        "Requested",
        "Approved",
        "In Progress",
        "Completed",
        "Rejected",
      ],
      default: "Requested",
    },

    vendorName: {
      type: String,
      trim: true,
    },

    cost: {
      type: Number,
      default: 0,
      min: 0,
    },

    requestDate: {
      type: Date,
      default: Date.now,
    },

    completionDate: {
      type: Date,
    },

    remarks: {
      type: String,
      trim: true,
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


// Indexing for faster maintenance history

maintenanceSchema.index({
  asset: 1,
  status: 1,
});


maintenanceSchema.index({
  requestedBy: 1,
  requestDate: -1,
});


const Maintenance = mongoose.model(
  "Maintenance",
  maintenanceSchema
);


export default Maintenance;
