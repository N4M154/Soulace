import mongoose from "mongoose";

const journalSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user", // Reference the User model
    required: true,
  },
  content: { type: String, required: true },
  mood: { type: String, required: true },
  analysis: { type: String, required: true },
  date: { type: Date, default: Date.now },
});

export default mongoose.model("Journal", journalSchema);
