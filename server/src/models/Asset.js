import mongoose from "mongoose";

const assetSchema = new mongoose.Schema(
  {
    assetCode: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      uppercase: true,
    },

    assetName: {
      type: String,
      required: true,
      trim: true,
    },

    description: {
      type: String,
      trim: true,
    },

    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "AssetCategory",
      required: true,
    },

    serialNumber: {
      type: String,
      unique: true,
      trim: true,
    },

    purchaseDate: {
      type: Date,
      required: true,
    },

    purchaseValue: {
      type: Number,
      min: 0,
    },

    vendor: {
      type: String,
      trim: true,
    },

    warrantyExpiry: {
      type: Date,
    },

    location: {
      type: String,
      trim: true,
    },

    assignedDepartment: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Department",
    },

    status: {
      type: String,
      enum: [
        "Available",
        "Allocated",
        "Under Maintenance",
        "Lost",
        "Retired",
        "Disposed",
      ],
      default: "Available",
    },

    condition: {
      type: String,
      enum: [
        "New",
        "Good",
        "Fair",
        "Damaged",
      ],
      default: "Good",
    },

    image: {
      type: String,
      default: "",
    },

    qrCode: {
      type: String,
      default: "",
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


// Search optimization

assetSchema.index({
  assetCode: 1,
  assetName: 1,
});


assetSchema.index({
  status: 1,
  category: 1,
});


const Asset = mongoose.model(
  "Asset",
  assetSchema
);


export default Asset;