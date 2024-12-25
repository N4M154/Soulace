import Journal from "../models/Journal.js";

// Save a new journal entry
export const saveJournal = async (req, res) => {
  const { content } = req.body;

  try {
    const newJournal = new Journal({ content });
    await newJournal.save();
    res.status(201).json(newJournal);
  } catch (err) {
    res.status(500).json({ error: "Failed to save journal entry" });
  }
};

// Get journal entries with pagination
export const getJournals = async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = 3;

  try {
    const journals = await Journal.find()
      .sort({ date: -1 })
      .skip((page - 1) * limit)
      .limit(limit);
    res.status(200).json({ notes: journals });
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch journal entries" });
  }
};
