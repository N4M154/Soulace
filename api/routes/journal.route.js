import express from "express";
import { saveJournal, getJournals } from "../controllers/journalController.js";
import { verifyToken } from "../utils/verifyUser.js";

const router = express.Router();

// POST route to save a journal entry
router.post("/", verifyToken, saveJournal);

// GET route to fetch journal entries with pagination
router.get("/",verifyToken, getJournals);

export default router;
