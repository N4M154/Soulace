// MoodLogger.jsx
import React, { useState } from "react";
import DiscreteSliderMarks from "../DiscreteSliderMarks";
import Swal from "sweetalert2";
import Header from "../components/Header";
import { Radar, Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { Groq } from "groq-sdk";

const MoodLogger = () => {
  const [mood, setMood] = useState({
    stress: 50,
    happiness: 50,
    energy: 50,
    focus: 50,
    calmness: 50,
  });

  const [sleep, setSleep] = useState({
    duration: 6,
    quality: 50,
  });

  const [showChart, setShowChart] = useState(false);
  const [mentalHealthRating, setMentalHealthRating] = useState(null);
  const [recommendation, setRecommendation] = useState(null);
  const [aiRawResponse, setAiRawResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const groq = new Groq({
    apiKey: import.meta.env.VITE_GROQ_API_KEY,
    dangerouslyAllowBrowser: true,
  });

  const handleMoodChange = (field, value) => {
    setMood((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSleepChange = (field, value) => {
    setSleep((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const fetchMentalHealthRating = async () => {
    const inputData = [
      { role: "system", content: "You are a mental health analyst. Provide a rating for mental health based on mood and sleep data." },
      {
        role: "user",
        content: `Mood Data: ${JSON.stringify(mood)}, Sleep Data: ${JSON.stringify(sleep)}`,
      },
    ];

    try {
      const chatCompletion = await groq.chat.completions.create({
        model: "llama-3.3-70b-versatile",
        temperature: 0.7,
        max_tokens: 512,
        messages: inputData,
      });

      const aiResponse = chatCompletion.choices[0]?.message?.content || "{}";
      setAiRawResponse(aiResponse);

      const matches = aiResponse.match(/Rating: (\d+)/i);
      const rating = matches ? parseInt(matches[1], 10) : "Unavailable";
      setMentalHealthRating(rating);
    } catch (error) {
      console.error("Error fetching mental health rating:", error);
      Swal.fire({
        title: "Error!",
        text: "Failed to fetch mental health rating. Please try again.",
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };

  const fetchRecommendations = async () => {
    const inputData = [
      { role: "system", content: "You are a mental health analyst. Provide personalized recommendations based on mood and sleep data." },
      {
        role: "user",
        content: `Mood Data: ${JSON.stringify(mood)}, Sleep Data: ${JSON.stringify(sleep)}`,
      },
    ];

    try {
      const chatCompletion = await groq.chat.completions.create({
        model: "llama-3.3-70b-versatile",
        temperature: 0.7,
        max_tokens: 512,
        messages: inputData,
      });

      const aiResponse = chatCompletion.choices[0]?.message?.content || "{}";
      setRecommendation(aiResponse);
    } catch (error) {
      console.error("Error fetching recommendations:", error);
      Swal.fire({
        title: "Error!",
        text: "Failed to fetch recommendations. Please try again.",
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { stress, happiness, energy, focus, calmness } = mood;
    const { duration, quality } = sleep;

    if (!stress || !happiness || !energy || !focus || !calmness || !duration || !quality) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please fill all fields!",
      });
      return;
    }

    setShowChart(true);
    setLoading(true);

    await fetchMentalHealthRating();
    await fetchRecommendations();

    setLoading(false);
  };

  const moodChartData = {
    labels: ["Stress", "Happiness", "Energy", "Focus", "Calmness"],
    datasets: [
      {
        label: "Mood",
        data: [
          mood.stress,
          mood.happiness,
          mood.energy,
          mood.focus,
          mood.calmness,
        ],
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  const sleepChartData = {
    labels: ["Duration (hours)", "Quality (%)"],
    datasets: [
      {
        label: "Sleep",
        data: [sleep.duration, sleep.quality],
        backgroundColor: ["rgba(153, 102, 255, 0.6)", "rgba(75, 192, 192, 0.6)"],
        borderColor: ["rgba(153, 102, 255, 1)", "rgba(75, 192, 192, 1)"],
        borderWidth: 1,
      },
    ],
  };

  return (
    <>
      <Header />
      <div style={{ backgroundColor: "white", minHeight: "100vh" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "7rem",
            paddingBottom: "4rem",
          }}
        >
          <div
            style={{
              width: "100%",
              maxWidth: "60%",
              padding: "40px",
              backgroundColor: "white",
              borderRadius: "12px",
              boxShadow: "0 1px 10px rgba(0, 0, 0, 0.3)",
              border: "1px solid #ddd",
            }}
          >
            <h1
              style={{
                textAlign: "center",
                marginBottom: "15px",
                fontSize: "28px",
                color: "#333",
              }}
            >
              Mood and Sleep Logger
            </h1>
            <form onSubmit={handleSubmit}>
              <h2
                style={{
                  textAlign: "center",
                  marginBottom: "15px",
                  fontSize: "18px",
                  color: "#555",
                }}
              >
                How do you feel today?
              </h2>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                  gap: "1rem",
                  flexWrap: "wrap",
                }}
              >
                {Object.keys(mood).map((moodType) => (
                  <div
                    key={moodType}
                    style={{ flex: "1 0 45%", minWidth: "150px" }}
                  >
                    <label
                      style={{
                        fontWeight: "bold",
                        display: "block",
                        marginBottom: "5px",
                        color: "#333",
                      }}
                    >
                      {moodType.charAt(0).toUpperCase() + moodType.slice(1)}
                    </label>
                    <DiscreteSliderMarks
                      value={mood[moodType]}
                      onChange={(value) => handleMoodChange(moodType, value)}
                    />
                  </div>
                ))}

                <div style={{ flex: "1 0 45%", minWidth: "150px" }}>
                  <label
                    style={{
                      fontWeight: "bold",
                      display: "block",
                      marginBottom: "5px",
                      color: "#333",
                    }}
                  >
                    Duration (hours)
                  </label>
                  <DiscreteSliderMarks
                    value={sleep.duration}
                    min={0}
                    max={24}
                    step={1}
                    onChange={(value) => handleSleepChange("duration", value)}
                  />
                </div>
                <div style={{ flex: "1 0 45%", minWidth: "150px" }}>
                  <label
                    style={{
                      fontWeight: "bold",
                      display: "block",
                      marginBottom: "5px",
                      color: "#333",
                    }}
                  >
                    Quality (%)
                  </label>
                  <DiscreteSliderMarks
                    value={sleep.quality}
                    onChange={(value) => handleSleepChange("quality", value)}
                  />
                </div>
              </div>
              <button
                type="submit"
                style={{
                  marginTop: "20px",
                  padding: "12px 24px",
                  fontSize: "16px",
                  backgroundColor: "#6B46C1",
                  borderRadius: "8px",
                  cursor: "pointer",
                  border: "none",
                  color: "#fff",
                }}
              >
                {loading ? "Analyzing..." : "Log Data"}
              </button>
            </form>

            {showChart && (
              <>
                <div
                  style={{
                    marginTop: "30px",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <Radar data={moodChartData} options={{ responsive: true }} />
                </div>

                <div
                  style={{
                    marginTop: "30px",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <Bar data={sleepChartData} options={{ responsive: true }} />
                </div>
              </>
            )}

            {mentalHealthRating !== null && (
              <div
                style={{
                  marginTop: "30px",
                  textAlign: "center",
                  color: "#333",
                }}
              >
                <h3>Mental Health Rating:</h3>
                <input
                  type="text"
                  value={`${mentalHealthRating} / 100`}
                  readOnly
                  style={{
                    textAlign: "center",
                    fontSize: "24px",
                    fontWeight: "bold",
                    border: "none",
                    background: "transparent",
                    color: "#333",
                  }}
                />
              </div>
            )}

            {recommendation && (
              <div
                style={{
                  marginTop: "20px",
                  textAlign: "center",
                  color: "#333",
                }}
              >
                <h3>Personalized Recommendation:</h3>
                <textarea
                  readOnly
                  value={recommendation}
                  style={{
                    width: "100%",
                    minHeight: "100px",
                    padding: "10px",
                    border: "1px solid #ddd",
                    borderRadius: "5px",
                    resize: "none",
                  }}
                ></textarea>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default MoodLogger;
