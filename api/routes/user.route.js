import express from "express";
import {
  test,
  updateUser,
  deleteUser,
  startTrial,
  getTrialStatus,
} from "../controllers/user.controller.js";
import { verifyToken } from "../utils/verifyUser.js";

const router = express.Router();

router.get("/", test);
router.post("/update/:id", verifyToken, updateUser);
router.delete("/delete/:id", verifyToken, deleteUser);

// Start free trial
router.post("/start-trial", verifyToken, startTrial);

// Get trial status
router.get("/trial-status", verifyToken, getTrialStatus);

export default router;
