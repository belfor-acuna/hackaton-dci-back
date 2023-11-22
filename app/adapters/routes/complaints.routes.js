import express from "express";
import {getComplaints,uploadComplaint} from "../controllers/complaint.controller.js";
const router = express.Router();

router.post("/new-complaint",uploadComplaint);
router.get("/all",getComplaints);

export default router;