import mongoose from "mongoose";

const assetAllocationSchema = new mongoose.Schema(
  {
    asset: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Asset",
      required: true,
    },

    allocatedTo: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    allocatedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    department: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Department",
      required: true,
    },

    allocationDate: {
      type: Date,
      default: Date.now,
    },

    expectedReturnDate: {
      type: Date,
    },

    actualReturnDate: {
      type: Date,
    },

    allocationStatus: {
      type: String,
      enum: [
        "Active",
        "Returned",
        "Overdue",
        "Cancelled",
      ],
      default: "Active",
    },

    returnCondition: {
      type: String,
      enum: [
        "Good",
        "Damaged",
        "Lost",
      ],
    },

    remarks: {
      type: String,
      trim: true,
    },

    approvedBy: {
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


// Faster asset history lookup

assetAllocationSchema.index({
  asset: 1,
  allocationStatus: 1,
});


assetAllocationSchema.index({
  allocatedTo: 1,
  allocationDate: -1,
});


const AssetAllocation = mongoose.model(
  "AssetAllocation",
  assetAllocationSchema
);


export default AssetAllocation;