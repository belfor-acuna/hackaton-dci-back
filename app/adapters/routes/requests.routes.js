import express from "express";
import {getRequests,uploadRequest} from "../controllers/request.controller.js";
const router = express.Router();

router.post("/new-request",uploadRequest);
router.get("/all",getRequests);

export default router;