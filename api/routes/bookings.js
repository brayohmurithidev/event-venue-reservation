import express from "express";
import {
  createBooking,
  deleteBooking,
  getBooking,
  getBookings,
  updateBooking,
} from "../controllers/booking.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();
//CREATE verifyAdmin,
router.post("/:venueid", createBooking);

//UPDATE verifyAdmin,
// router.put("/availability/:id", updateGroundAvailability);
router.put("/:id", updateBooking);
//DELETE verifyAdmin,
router.delete("/:id/:venueid", deleteBooking);
//GET

router.get("/:id", getBooking);
//GET ALL

router.get("/", getBookings);

export default router;
