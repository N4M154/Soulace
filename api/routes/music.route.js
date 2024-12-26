import express from "express";
import { getSelectedMusic } from "../controllers/musicController.js";

const router = express.Router();

router.get("/selected", getSelectedMusic);

export default router;
