import mongoose from "mongoose";

const resourceBookingSchema = new mongoose.Schema(
  {
    // User who created the booking
    bookedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    // Resource/Asset being booked
    asset: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Asset",
      required: true,
    },

    title: {
      type: String,
      required: true,
      trim: true,
    },

    purpose: {
      type: String,
      required: true,
      trim: true,
    },

    bookingDate: {
      type: Date,
      required: true,
    },

    startTime: {
      type: Date,
      required: true,
    },

    endTime: {
      type: Date,
      required: true,
    },

    status: {
      type: String,
      enum: [
        "Upcoming",
        "Ongoing",
        "Completed",
        "Cancelled",
      ],
      default: "Upcoming",
    },

    participants: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],

    notes: {
      type: String,
      trim: true,
    },

    approvedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },

    cancellationReason: {
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


// Index for faster calendar/search queries
resourceBookingSchema.index({
  asset: 1,
  bookingDate: 1,
  startTime: 1,
  endTime: 1,
});


resourceBookingSchema.index({
  bookedBy: 1,
  status: 1,
});


const ResourceBooking = mongoose.model(
  "ResourceBooking",
  resourceBookingSchema
);

export default ResourceBooking;