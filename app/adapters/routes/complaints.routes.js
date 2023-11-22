import express from "express";
import {getComplaints,uploadComplaint,updateComplaintStatus,getComplaintDetail} from "../controllers/complaint.controller.js";
const router = express.Router();

router.post("/new-complaint",uploadComplaint);
router.get("/all",getComplaints);
router.put("/updateStatus/:complaintId", updateComplaintStatus)
router.get("/:complaintId", getComplaintDetail)
export default router;