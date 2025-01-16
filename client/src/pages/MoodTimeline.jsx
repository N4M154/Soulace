// MoodTimeline.jsx
import React, { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const MoodTimeline = () => {
  const [data, setData] = useState([]);
  const [timeframe, setTimeframe] = useState("All Time"); // Default timeframe
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Define a mapping from mood to numerical values for graphing
  const moodValues = {
    Happy: 5,
    Excited: 4,
    Calm: 3,
    Neutral: 2,
    Anxious: 1,
    Sad: 0,
    Frustrated: -1,
    Angry: -2,
  };

  // Reverse mapping for tooltip
  const valueToMood = Object.keys(moodValues).reduce((acc, key) => {
    acc[moodValues[key]] = key;
    return acc;
  }, {});

  // Function to calculate date ranges based on selected timeframe
  const calculateDateRange = (selectedTimeframe) => {
    const today = new Date();
    let startDate;

    switch (selectedTimeframe) {
      case "Last Week":
        startDate = new Date();
        startDate.setDate(today.getDate() - 7);
        break;
      case "Last Month":
        startDate = new Date();
        startDate.setMonth(today.getMonth() - 1);
        break;
      case "Last 3 Months":
        startDate = new Date();
        startDate.setMonth(today.getMonth() - 3);
        break;
      case "Last Year":
        startDate = new Date();
        startDate.setFullYear(today.getFullYear() - 1);
        break;
      default:
        startDate = null; // For "All Time"
    }

    return startDate ? startDate.toISOString() : null;
  };

  // Fetch data based on selected timeframe
  const fetchData = async () => {
    setLoading(true);
    setError(null);
    try {
      let url = `/api/journal?page=1`;

      if (timeframe !== "All Time") {
        const startDate = calculateDateRange(timeframe);
        const endDate = new Date().toISOString();
        url += `&startDate=${startDate}&endDate=${endDate}`;
      }

      const response = await fetch(url);
      const result = await response.json();

      const formattedData = result.notes.map((entry) => ({
        date: new Date(entry.date).toLocaleDateString(),
        mood: moodValues[entry.mood] || 2, // Default to Neutral if undefined
      }));

      setData(formattedData.reverse()); // Oldest first
    } catch (err) {
      console.error("Error fetching journal entries for graph:", err);
      setError("Failed to load mood timeline.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timeframe]); // Re-fetch data when timeframe changes

  return (
    <div className="w-full max-w-4xl bg-transparent p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-center">Mood Timeline</h2>

      {/* Timeframe Filter Options */}
      <div className="flex justify-center mb-4 space-x-2">
        {[
          "All Time",
          "Last Week",
          "Last Month",
          "Last 3 Months",
          "Last Year",
        ].map((tf) => (
          <button
            key={tf}
            onClick={() => setTimeframe(tf)}
            className={`px-4 py-2 rounded ${
              timeframe === tf
                ? "bg-teal-500 text-white"
                : "bg-transparent text-white"
            } transition duration-200`}
          >
            {tf}
          </button>
        ))}
      </div>

      {/* Display Loading or Error States */}
      {loading ? (
        <p className="text-center">Loading...</p>
      ) : error ? (
        <p className="text-center text-red-500">{error}</p>
      ) : data.length > 0 ? (
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid stroke="#ccc" />
            <XAxis dataKey="date" />
            <YAxis
              type="number"
              domain={[-2, 5]} // Based on moodValues
              ticks={[-2, -1, 0, 1, 2, 3, 4, 5]}
              tickFormatter={(tick) => valueToMood[tick] || ""}
            />
            <Tooltip
              labelFormatter={(label) => `Date: ${label}`}
              formatter={(value) => valueToMood[value] || ""}
            />
            <Line type="monotone" dataKey="mood" stroke="#8884d8" />
          </LineChart>
        </ResponsiveContainer>
      ) : (
        <p className="text-center">No journal entries to display.</p>
      )}
    </div>
  );
};

export default MoodTimeline;
