// import express from "express";
// import { saveJournal, getJournals } from "../controllers/journalController.js";

// const router = express.Router();

// // POST route to save a journal entry
// router.post("/", saveJournal);

// // GET route to fetch journal entries with pagination
// router.get("/", getJournals);

// export default router;

import express from "express";
import { saveJournal, getJournals } from "../controllers/journalController.js";

const router = express.Router();

// POST route to save a journal entry
router.post("/", saveJournal);

// GET route to fetch journal entries with pagination
router.get("/", getJournals);

export default router;
