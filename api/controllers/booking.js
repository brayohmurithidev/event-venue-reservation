import Booking from "../models/Booking.js";
import Venue from "../models/Venue.js";

export const createBooking = async (req, res, next) => {
  const venueId = req.params.venueid;
  const newBooking = new Booking({ ...req.body, venue: venueId });

  try {
    const savedBooking = await newBooking.save();
    try {
      await Venue.findByIdAndUpdate(venueId, {
        $push: { unavailableDates: savedBooking.date },
      });
    } catch (err) {
      next(err);
    }
    res.status(200).json(savedBooking);
  } catch (err) {
    next(err);
  }
};

export const updateBooking = async (req, res, next) => {
  try {
    const updatedBooking = await Booking.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedBooking);
  } catch (err) {
    next(err);
  }
};
export const deleteBooking = async (req, res, next) => {
  const venueId = req.params.venueId;
  try {
    await Booking.findByIdAndDelete(req.params.id);
    try {
      await Venue.findByIdAndUpdate(venueId, {
        $pull: { grounds: req.params.id },
      });
    } catch (err) {
      next(err);
    }
    res.status(200).json("Ground has been deleted.");
  } catch (err) {
    next(err);
  }
};
export const getBooking = async (req, res, next) => {
  try {
    const booking = await Booking.findById(req.params.id);
    res.status(200).json(booking);
  } catch (err) {
    next(err);
  }
};
export const getBookings = async (req, res, next) => {
  try {
    const bookings = await Booking.find();
    res.status(200).json(bookings);
  } catch (err) {
    next(err);
  }
};
