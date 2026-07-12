import mongoose from "mongoose";

const auditRecordSchema = new mongoose.Schema(
  {
    auditCycle: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "AuditCycle",
      required: true,
    },

    asset: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Asset",
      required: true,
    },

    auditedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    auditDate: {
      type: Date,
      default: Date.now,
    },

    physicalStatus: {
      type: String,
      enum: [
        "Found",
        "Missing",
        "Damaged",
      ],
      default: "Found",
    },

    assetCondition: {
      type: String,
      enum: [
        "New",
        "Good",
        "Fair",
        "Damaged",
        "Critical",
      ],
      default: "Good",
    },

    locationVerified: {
      type: Boolean,
      default: false,
    },

    serialNumberVerified: {
      type: Boolean,
      default: false,
    },

    assignedUserVerified: {
      type: Boolean,
      default: false,
    },

    remarks: {
      type: String,
      trim: true,
    },

    actionRequired: {
      type: String,
      trim: true,
    },

    auditStatus: {
      type: String,
      enum: [
        "Pending",
        "Verified",
        "Issue Found",
        "Resolved",
      ],
      default: "Pending",
    },

    resolvedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },

    resolvedDate: {
      type: Date,
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


// Faster audit history search

auditRecordSchema.index({
  auditCycle: 1,
  asset: 1,
});


auditRecordSchema.index({
  physicalStatus: 1,
  auditStatus: 1,
});


const AuditRecord = mongoose.model(
  "AuditRecord",
  auditRecordSchema
);


export default AuditRecord;
