import path from "path";

export const getSelectedMusic = (req, res) => {
  const musicPath = path.join(process.cwd(), "uploads", "relaxing-music.mp3");

  res.sendFile(musicPath, (err) => {
    if (err) {
      console.error("Error serving music file:", err);
      res.status(500).json({ error: "Failed to serve music file" });
    }
  });
};
