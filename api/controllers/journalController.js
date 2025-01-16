// // journalController.js
// import Journal from "../models/Journal.js";

// // Save a new journal entry with mood analysis
// export const saveJournal = async (req, res) => {
//   const { content, mood, analysis } = req.body;

//   if (!content || !mood || !analysis) {
//     return res
//       .status(400)
//       .json({ error: "Content, mood, and analysis are required" });
//   }

//   try {
//     const newJournal = new Journal({ userId: req.user.id, content, mood, analysis });
//     await newJournal.save();
//     res.status(201).json(newJournal);
//   } catch (err) {
//     console.error("Error saving journal entry:", err);
//     res.status(500).json({ error: "Failed to save journal entry" });
//   }
// };

// // Get journal entries with pagination
// export const getJournals = async (req, res) => {
//   const page = parseInt(req.query.page) || 1;
//   const limit = 1000; // Adjust based on your data volume and frontend needs

//   const { startDate, endDate } = req.query;

//   const filter = {userId: req.user.id};
//   if (startDate && endDate) {
//     filter.date = {
//       $gte: new Date(startDate),
//       $lte: new Date(endDate),
//     };
//   }

//   try {
//     const journals = await Journal.find(filter)
//       .sort({ date: -1 })
//       .skip((page - 1) * limit)
//       .limit(limit);
//     res.status(200).json({ notes: journals });
//   } catch (err) {
//     console.error("Error fetching journal entries:", err);
//     res.status(500).json({ error: "Failed to fetch journal entries" });
//   }
// };

// //-----------------------------------------------------------------------
// // import Journal from "../models/Journal.js";

// // // Save a new journal entry with mood analysis
// // export const saveJournal = async (req, res) => {
// //   const { content, mood, analysis } = req.body;

// //   if (!content || !mood || !analysis) {
// //     return res.status(400).json({ error: "Content, mood, and analysis are required" });
// //   }

// //   try {
// //     const newJournal = new Journal({
// //       userId: req.user.id, // Associate the entry with the logged-in user
// //       content,
// //       mood,
// //       analysis,
// //     });
// //     await newJournal.save();
// //     res.status(201).json(newJournal);
// //   } catch (err) {
// //     console.error("Error saving journal entry:", err);
// //     res.status(500).json({ error: "Failed to save journal entry" });
// //   }
// // };

// // Get journal entries with pagination
// // export const getJournals = async (req, res) => {
// //   const page = parseInt(req.query.page) || 1;
// //   const limit = 10; // Adjust limit as needed
// //   const { startDate, endDate } = req.query;

// //   const filter = { userId: req.user.id }; // Filter entries by the logged-in user
// //   if (startDate && endDate) {
// //     filter.date = {
// //       $gte: new Date(startDate),
// //       $lte: new Date(endDate),
// //     };
// //   }

// //   try {
// //     const journals = await Journal.find(filter)
// //       .sort({ date: -1 })
// //       .skip((page - 1) * limit)
// //       .limit(limit);
// //     res.status(200).json({ notes: journals });
// //   } catch (err) {
// //     console.error("Error fetching journal entries:", err);
// //     res.status(500).json({ error: "Failed to fetch journal entries" });
// //   }
// // };

// journalController.js
import Journal from "../models/Journal.js";

// Save a new journal entry with mood analysis
export const saveJournal = async (req, res) => {
  const { content, mood, analysis } = req.body;

  if (!content || !mood || !analysis) {
    return res
      .status(400)
      .json({ error: "Content, mood, and analysis are required" });
  }

  try {
    // Associate with the logged-in user
    const newJournal = new Journal({
      userId: req.user.id,
      content,
      mood,
      analysis,
    });
    await newJournal.save();
    res.status(201).json(newJournal);
  } catch (err) {
    console.error("Error saving journal entry:", err);
    res.status(500).json({ error: "Failed to save journal entry" });
  }
};

// Get journal entries with pagination (3 per page by default)
export const getJournals = async (req, res) => {
  // For flexible pagination, allow the frontend to pass ?page=X&limit=Y.
  // But default to page=1, limit=3 if not provided.
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 3;

  // Optional: date-range filtering
  const { startDate, endDate } = req.query;
  const filter = { userId: req.user.id }; // Only fetch entries for the logged-in user

  if (startDate && endDate) {
    filter.date = {
      $gte: new Date(startDate),
      $lte: new Date(endDate),
    };
  }

  try {
    // Sort by newest first, skip and limit for pagination
    const journals = await Journal.find(filter)
      .sort({ date: -1 })
      .skip((page - 1) * limit)
      .limit(limit);

    res.status(200).json({ notes: journals });
  } catch (err) {
    console.error("Error fetching journal entries:", err);
    res.status(500).json({ error: "Failed to fetch journal entries" });
  }
};
