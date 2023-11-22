import express from "express";
import {getRequests,uploadRequest, updateRequestStatus, getRequestDetail} from "../controllers/request.controller.js";
const router = express.Router();

router.post("/new-request",uploadRequest);
router.get("/all",getRequests);
router.put("/updateStatus/:requestId", updateRequestStatus)
router.get("/:requestId", getRequestDetail)

export default router;