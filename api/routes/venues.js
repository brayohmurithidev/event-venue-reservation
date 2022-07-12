import express from "express";
import {
  countByCity,
  countByType,
  createVenue,
  deleteVenue,
  getVenue,
  getVenueGrounds,
  getVenues,
  updateVenue,
} from "../controllers/venue.js";
import { verifyAdmin } from "../utils/verifyToken.js";
const router = express.Router();

//CREATE verifyAdmin,
router.post("/", createVenue);

//UPDATE verifyAdmin,
router.put("/:id", updateVenue);
//DELETE verifyAdmin,
router.delete("/:id", deleteVenue);
//GET

router.get("/find/:id", getVenue);
//GET ALL

router.get("/", getVenues);
router.get("/countByCity", countByCity);
router.get("/countByType", countByType);
router.get("/ground/:id", getVenueGrounds);

export default router;
