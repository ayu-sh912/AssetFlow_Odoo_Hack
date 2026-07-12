import mongoose from "mongoose";

const assetTransferSchema = new mongoose.Schema(
  {
    asset: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Asset",
      required: true,
    },

    transferredBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    fromUser: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },

    toUser: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },

    fromDepartment: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Department",
      required: true,
    },

    toDepartment: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Department",
      required: true,
    },

    transferDate: {
      type: Date,
      default: Date.now,
    },

    transferReason: {
      type: String,
      required: true,
      trim: true,
    },

    transferStatus: {
      type: String,
      enum: [
        "Pending",
        "Approved",
        "Rejected",
        "Completed",
        "Cancelled",
      ],
      default: "Pending",
    },

    approvedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },

    approvalDate: {
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


// Faster transfer history lookup

assetTransferSchema.index({
  asset: 1,
  transferDate: -1,
});


assetTransferSchema.index({
  fromDepartment: 1,
  toDepartment: 1,
});


const AssetTransfer = mongoose.model(
  "AssetTransfer",
  assetTransferSchema
);


export default AssetTransfer;