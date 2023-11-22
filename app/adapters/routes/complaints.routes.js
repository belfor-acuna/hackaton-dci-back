import express from "express";
import {getComplaints,uploadComplaint} from "../controllers/complaint.controller.js";
const router = express.Router();

router.post("/crear-reclamo",uploadComplaint);
router.post("/reclamos",getComplaints);

export default router;