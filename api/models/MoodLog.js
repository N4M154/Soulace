    import mongoose from "mongoose";

    const moodLogSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    mood: {
        stress: { type: Number, required: true },
        happiness: { type: Number, required: true },
        energy: { type: Number, required: true },
        focus: { type: Number, required: true },
        calmness: { type: Number, required: true },
    },
    sleep: {
        duration: { type: Number, required: true },
        quality: { type: Number, required: true },
    },
    mentalHealthRating: {
        type: Number,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    });

    export default mongoose.model("MoodLog", moodLogSchema);
