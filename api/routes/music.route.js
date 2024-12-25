import express from "express";
import { getSpotifyToken, getRelaxingMusicTrack } from "../controllers/musicController.js";

const router = express.Router();

// Route to get Spotify token
router.get("/token", getSpotifyToken);

// Route to fetch relaxing music track
router.get("/track", getRelaxingMusicTrack);

export default router;
