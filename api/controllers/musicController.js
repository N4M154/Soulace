import axios from "axios";

// Function to get Spotify Access Token
export const getSpotifyToken = async (req, res) => {
  try {
    const response = await axios.post(
      "https://accounts.spotify.com/api/token",
      new URLSearchParams({ grant_type: "client_credentials" }),
      {
        headers: {
          Authorization:
            "Basic " +
            Buffer.from(
              `${"71e202793b8a4f0dacc5d152a6cc1c14"}:${"c3b17b60042040ce81eca606ba41e2d9"}`
            ).toString("base64"),
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );

    res.status(200).json({ accessToken: response.data.access_token });
  } catch (error) {
    console.error("Failed to get Spotify token:", error);
    res.status(500).json({ error: "Failed to get Spotify token" });
  }
};

// Function to fetch a specific track
export const getRelaxingMusicTrack = async (req, res) => {
  const { accessToken } = req.query;

  try {
    const trackId = "7GhIk7Il098yCjg4BQjzvb"; // Replace with your track ID
    const response = await axios.get(`https://api.spotify.com/v1/tracks/${trackId}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    res.status(200).json(response.data);
  } catch (error) {
    console.error("Failed to fetch track:", error);
    res.status(500).json({ error: "Failed to fetch track" });
  }
};
