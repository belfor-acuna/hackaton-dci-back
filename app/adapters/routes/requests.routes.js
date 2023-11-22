import express from "express";
import {getRequests,uploadRequest} from "../controllers/request.controller.js";
const router = express.Router();

router.post("/crear-solicitud",uploadRequest);
router.post("/solicitudes",getRequests);

export default router;