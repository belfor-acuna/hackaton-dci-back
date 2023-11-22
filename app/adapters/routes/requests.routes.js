import express from "express";
import {getRequests,uploadRequest, updateRequestStatus} from "../controllers/request.controller.js";
const router = express.Router();

router.post("/new-request",uploadRequest);
router.get("/all",getRequests);
router.put("/updateStatus/:requestId", updateRequestStatus)

export default router;