import mongoose from "mongoose";

const assetCategorySchema = new mongoose.Schema(
  {
    categoryName: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },

    categoryCode: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      uppercase: true,
    },

    description: {
      type: String,
      trim: true,
    },

    icon: {
      type: String,
      default: "",
    },

    depreciationRate: {
      type: Number,
      default: 0,
      min: 0,
      max: 100,
    },

    assetCount: {
      type: Number,
      default: 0,
    },

    status: {
      type: String,
      enum: [
        "Active",
        "Inactive",
      ],
      default: "Active",
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

assetCategorySchema.index({
  categoryName: 1,
  categoryCode: 1,
});


const AssetCategory = mongoose.model(
  "AssetCategory",
  assetCategorySchema
);


export default AssetCategory;