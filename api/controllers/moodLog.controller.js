import MoodLog from "../models/MoodLog.js";

// Save a new mood log
export const saveMoodLog = async (req, res) => {
  const { mood, sleep, mentalHealthRating } = req.body;

  if (!req.user.id) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  try {
    const newMoodLog = new MoodLog({
      userId: req.user.id,
      mood,
      sleep,
      mentalHealthRating,
    });

    await newMoodLog.save();
    res.status(201).json(newMoodLog);
  } catch (err) {
    console.error("Error saving mood log:", err);
    res.status(500).json({ error: "Failed to save mood log" });
  }
};

// Fetch the latest 7 days' mood logs
export const getMoodLogs = async (req, res) => {
  if (!req.user.id) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  try {
    const logs = await MoodLog.find({ userId: req.user.id })
      .sort({ date: -1 })
      .limit(7);
    res.status(200).json(logs);
  } catch (err) {
    console.error("Error fetching mood logs:", err);
    res.status(500).json({ error: "Failed to fetch mood logs" });
  }
};
