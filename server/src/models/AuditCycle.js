import mongoose from "mongoose";

const auditCycleSchema = new mongoose.Schema(
  {
    cycleName: {
      type: String,
      required: true,
      trim: true,
    },

    auditType: {
      type: String,
      enum: [
        "Physical Audit",
        "Digital Audit",
        "Compliance Audit",
      ],
      default: "Physical Audit",
    },

    department: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Department",
      required: true,
    },

    auditor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    startDate: {
      type: Date,
      required: true,
    },

    endDate: {
      type: Date,
      required: true,
    },

    status: {
      type: String,
      enum: [
        "Scheduled",
        "In Progress",
        "Completed",
        "Cancelled",
      ],
      default: "Scheduled",
    },

    totalAssets: {
      type: Number,
      default: 0,
    },

    completedAssets: {
      type: Number,
      default: 0,
    },

    remarks: {
      type: String,
      trim: true,
    },

    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
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


// Optimization

auditCycleSchema.index({
  department: 1,
  status: 1,
});


auditCycleSchema.index({
  startDate: 1,
  endDate: 1,
});


const AuditCycle = mongoose.model(
  "AuditCycle",
  auditCycleSchema
);


export default AuditCycle;