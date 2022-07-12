import Venue from "../models/Venue.js";

export const createVenue = async (req, res, next) => {
  const newVenue = new Venue(req.body);

  try {
    const savedVenue = await newVenue.save();
    res.status(200).json(savedVenue);
  } catch (err) {
    next(err);
  }
};
export const updateVenue = async (req, res, next) => {
  try {
    const updatedVenue = await Venue.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedVenue);
  } catch (err) {
    next(err);
  }
};
export const deleteVenue = async (req, res, next) => {
  try {
    await Venue.findByIdAndDelete(req.params.id);
    res.status(200).json("Venue has been deleted.");
  } catch (err) {
    next(err);
  }
};
export const getVenue = async (req, res, next) => {
  try {
    const venue = await Venue.findById(req.params.id);
    res.status(200).json(venue);
  } catch (err) {
    next(err);
  }
};
export const getVenues = async (req, res, next) => {
  const { min, max, ...others } = req.query;
  try {
    const venues = await Venue.find({
      ...others,
      people: { $gt: min | 1, $lt: max || 10000 },
    }).limit(req.query.limit);
    res.status(200).json(venues);
  } catch (err) {
    next(err);
  }
};
export const countByCity = async (req, res, next) => {
  const cities = req.query.cities.split(",");
  try {
    const list = await Promise.all(
      cities.map((city) => {
        return Venue.countDocuments({ city: city });
      })
    );
    res.status(200).json(list);
  } catch (err) {
    next(err);
  }
};
export const countByType = async (req, res, next) => {
  try {
    const resturantCount = await Venue.countDocuments({ type: "restarunts" });
    const partyhallCount = await Venue.countDocuments({ type: "partyhalls" });
    const resortCount = await Venue.countDocuments({ type: "resorts" });
    const hotelsCount = await Venue.countDocuments({ type: "hotels" });
    const banguethallCount = await Venue.countDocuments({
      type: "banquethalls",
    });
    const marriagehallCount = await Venue.countDocuments({
      type: "marriagehalls",
    });
    const partylawnCount = await Venue.countDocuments({
      type: "partylawns",
    });

    res.status(200).json([
      { type: "resturants", count: resturantCount },
      { type: "partylawns", count: partylawnCount },
      { type: "partyhalls", count: partyhallCount },
      { type: "resorts", count: resortCount },
      { type: "hotels", count: hotelsCount },
      { type: "banquethalls", count: banguethallCount },
      { type: "marriagehalls", count: marriagehallCount },
    ]);
  } catch (err) {
    next(err);
  }
};

export const getVenueGrounds = async (req, res, next) => {
  try {
    const venue = await Venue.findById(req.params.id);
    const list = await Promise.all(
      venue.grounds.map((ground) => {
        return Ground.findById(ground);
      })
    );
    res.status(200).json(list);
  } catch (err) {
    next(err);
  }
};
