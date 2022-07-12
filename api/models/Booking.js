import mongoose from "mongoose";
const BookingSchema = new mongoose.Schema(
  {
    venue: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
    services: { type: [String] },
    date: {
      type: Date,
      required: true,
    },
    eventPrice: {
      type: [String],
    },
    prices: {
      type: [String],
    },
    amount: {
      type: Number,
      required: true,
    },
    payed: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Booking", BookingSchema);
