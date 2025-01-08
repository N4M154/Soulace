import express from "express";
import {  saveMoodLog } from "../controllers/moodLog.controller.js";
import { verifyToken } from "../utils/verifyUser.js";

const router = express.Router();

// Save mood log
router.post("/", verifyToken, saveMoodLog);




export default router;
