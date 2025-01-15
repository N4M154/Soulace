import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import MoodTimeline from "./MoodTimeline";
import SideButtons from "../components/SideButtons";
import Header from "../components/Header";
import { Groq } from "groq-sdk"; // Import Groq SDK

const DailyJournal = () => {
  const { currentUser } = useSelector((state) => state.user);

  const [isSidebarExpanded, setIsSidebarExpanded] = useState(true); // Sidebar state
  const [journal, setJournal] = useState("");
  const [notes, setNotes] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [musicPlaying, setMusicPlaying] = useState(false);

  const groq = new Groq({
    apiKey: import.meta.env.VITE_GROQ_API_KEY, // Ensure this is set in your environment variables
    dangerouslyAllowBrowser: true,
  });

  // Fetch journal entries
  const fetchNotes = async () => {
    setLoading(true);
    try {
      const response = await fetch(`/api/journal?page=${page}`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        credentials: "include", // Ensure cookies are sent
      });
      const data = await response.json();
      setNotes((prevNotes) => [...prevNotes, ...data.notes.reverse()]); // Ensure correct order and avoid duplicates
    } catch (err) {
      console.error("Error fetching notes:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNotes();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  const toggleMusic = () => {
    const audio = document.getElementById("relaxing-music");
    if (audio) {
      if (musicPlaying) {
        audio.pause();
      } else {
        audio.play().catch((error) => {
          console.error("Error playing music:", error);
        });
      }
      setMusicPlaying(!musicPlaying);
    } else {
      console.error("Audio element not found");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!journal.trim()) {
      alert("Please write something in your journal before saving.");
      return;
    }

    setLoading(true);

    try {
      // Perform comprehensive mood analysis
      const { mood, analysis } = await analyzeMood(journal);

      // Save journal entry with content, mood, and analysis
      const response = await fetch("https://localhost:3000/api/journal", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userId: currentUser._id, content: journal, mood, analysis }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error("Error response from server:", errorData);
        throw new Error("Failed to save journal entry");
      }

      const newNote = await response.json();
      setNotes((prevNotes) => [newNote, ...prevNotes]); // Add new note at the top
      setJournal("");
    } catch (err) {
      console.error("Error saving journal:", err.message);
      alert("Failed to save the journal entry. Please try again.");
    } finally {
      setLoading(false);
    }
  };
  // Load more notes
  const loadMoreNotes = async () => {
    if (loading) return;
    setPage((prevPage) => prevPage + 1);
  };

  // Comprehensive Mood Analysis Function
  const analyzeMood = async (text) => {
    if (!text.trim()) {
      throw new Error("Journal entry is empty.");
    }

    try {
      // Send the journal entry to Groq for mood analysis with instructions for one-word mood and detailed analysis
      const response = await groq.chat.completions.create({
        model: "llama-3.3-70b-versatile", // Replace with the appropriate model if different
        temperature: 0.0, // Lower temperature for more deterministic responses
        max_tokens: 150, // Adjust as needed for detailed analysis
        messages: [
          {
            role: "system",
            content:
              'You are an assistant that analyzes the mood of a given text. Provide your response in the following JSON format:\n{\n  "mood": "SingleWordMood",\n  "analysis": "Detailed analysis of the mood based on the journal entry."\n}',
          },
          {
            role: "user",
            content: text,
          },
        ],
      });

      // Extract mood and analysis from AI response
      const aiResponse = response.choices[0]?.message?.content.trim();

      // Parse the JSON response
      let parsedResponse;
      try {
        parsedResponse = JSON.parse(aiResponse);
      } catch (parseError) {
        console.error("Error parsing AI response as JSON:", parseError);
        throw new Error("Failed to parse mood analysis.");
      }

      let { mood, analysis } = parsedResponse;

      // Validate that the mood is a single word
      if (!mood || mood.split(" ").length > 1) {
        mood = "Neutral"; // Default mood if validation fails
      }

      // Optionally, map mood to a predefined set
      const validMoods = [
        "Happy",
        "Sad",
        "Anxious",
        "Neutral",
        "Excited",
        "Frustrated",
        "Calm",
        "Angry",
      ];
      if (!validMoods.includes(mood)) {
        mood = "Neutral"; // Default to Neutral if mood is unrecognized
      }

      // Ensure analysis is present
      if (!analysis) {
        analysis = "No detailed analysis available.";
      }

      return { mood, analysis };
    } catch (error) {
      console.error("Error analyzing mood with Groq:", error);
      throw new Error("Failed to analyze mood.");
    }
  };



  return (
    <div className="flex">
      {/* Sidebar */}
      <SideButtons
        isExpanded={isSidebarExpanded}
        setIsExpanded={setIsSidebarExpanded}
      />

      {/* Main Content */}
      <div
        id="main-content"
        className={`flex-1 transition-all duration-300 ${isSidebarExpanded ? "ml-64" : "ml-20"
          }`}
      >
        <Header />
        <div
          className="container mx-auto p-8 bg-cover bg-center min-h-screen overflow-auto"
          style={{
            backgroundImage: "url('/journal-bg.jpg')",
            backgroundAttachment: "fixed",
          }}
        >
          {/* Page Title */}
          <div className="mt-16 w-full flex flex-col items-start mb-6">
            <div className="flex items-center justify-between w-full">
              <h1 className="text-4xl font-bold text-white">Daily Journal</h1>
              <img
                src={musicPlaying ? "/pausemusic.gif" : "/playmusic.gif"}
                alt={musicPlaying ? "Pause Music" : "Play Music"}
                onClick={toggleMusic}
                className="w-20 h-20 cursor-pointer transition-transform duration-300 hover:scale-110"
              />
              <audio id="relaxing-music" src="/relaxing-music.mp3" />
            </div>
            <h2 className="text-gray-400 text-lg">
              Your Daily Thoughts: Reflect, Release, and Recharge
            </h2>
          </div>

          {/* Main Content */}
          <div className="flex flex-wrap md:flex-nowrap w-full max-w-6xl gap-20">
            {/* Journal Writing Section */}
            <div className="w-full md:w-10/12 bg-transparent backdrop-blur- shadow-lg rounded-xl p-6">
              <h2 className="text-2xl text-yellow-100 font-bold mb-4">
                Hey, how was your day?
              </h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <textarea
                  value={journal}
                  onChange={(e) => setJournal(e.target.value)}
                  rows="5"
                  className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-500 bg-transparent text-white"
                  placeholder="Feel free to jot down what's on your mind, I'm here to listen!"
                  required
                />
                <button
                  type="submit"
                  className={`py-2 px-4 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 transition duration-200 ${loading ? "opacity-50 cursor-not-allowed" : ""
                    }`}
                  disabled={loading}
                >
                  {loading ? "Saving..." : "Save"}
                </button>
              </form>

              {/* Mood Timeline Graph */}
              <MoodTimeline />
            </div>

            {/* Journal Notes */}
            <div className="w-full md:w-6/12 mt-6 md:mt-0">
              <h2 className="text-xl font-bold text-white mb-4">See Older Posts</h2>
              <div className="space-y-4">
                {notes.map((note, index) => (
                  <div key={index} className="bg-gray-900 shadow-md rounded-lg p-3">
                    <p className="text-sm text-white">{note.content}</p>
                    <p className="text-sm text-gray-400 mt-2">
                      {new Date(note.date).toLocaleString()}
                    </p>
                    {/* <p className="text-sm text-teal-400 mt-1">Mood: {note.mood}</p>{" "}
                    
                    <p className="text-sm text-gray-300 mt-1">
                      Analysis: {note.analysis}
                    </p>{" "} */}
                  </div>
                ))}
              </div>
              <button
                onClick={loadMoreNotes}
                className="mt-4 w-full py-2 bg-transparent text-teal-600 font-bold rounded-lg hover:text-white transition duration-300 text-sm"
              >
                {loading ? "Loading..." : "Load More"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DailyJournal;
