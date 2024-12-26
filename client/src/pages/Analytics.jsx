import React from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import Header from "../components/Header";

// Example dummy data for the past 5 days
const data = [
  { day: "Day 1", stress: 3, happiness: 4, focus: 2, energy: 5, calmness: 3 },
  { day: "Day 2", stress: 4, happiness: 3, focus: 3, energy: 4, calmness: 4 },
  { day: "Day 3", stress: 2, happiness: 5, focus: 4, energy: 3, calmness: 5 },
  { day: "Day 4", stress: 3, happiness: 2, focus: 4, energy: 4, calmness: 3 },
  { day: "Day 5", stress: 4, happiness: 3, focus: 5, energy: 2, calmness: 4 },
];

const Analytics = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-fixed flex flex-col relative"
      style={{
        backgroundImage: "url('/teal.jpg')",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
      }}
    >
      <header className="p-6 shadow-md bg-white bg-opacity-90">
        <Header />
      </header>

      <div className="analytics-container mx-auto py-12 px-6 bg-white bg-opacity-90 rounded-lg shadow-lg w-11/12 max-w-7xl">
        <h1 className="text-4xl font-bold text-center text-teal-800 mb-8">
          Analytics
        </h1>
        <div className="charts">
          <ResponsiveContainer width="100%" height={500}>
            <BarChart
              data={data}
              margin={{ top: 20, right: 30, left: 0, bottom: 20 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#ddd" />
              <XAxis
                dataKey="day"
                tick={{ fill: "#555", fontSize: 14 }}
                stroke="#555"
              />
              <YAxis
                tick={{ fill: "#555", fontSize: 14 }}
                stroke="#555"
                label={{
                  value: "Score",
                  angle: -90,
                  position: "insideLeft",
                  fill: "#555",
                  fontSize: 14,
                }}
              />
              <Tooltip
                contentStyle={{ backgroundColor: "#fff", borderRadius: "8px" }}
              />
              <Legend
                verticalAlign="top"
                height={36}
                wrapperStyle={{ fontSize: "14px" }}
              />
              {/* Pastel Colors */}
              <Bar dataKey="stress" fill="#FAD2E1" name="Stress" /> {/* Pastel Pink */}
              <Bar dataKey="happiness" fill="#FEF9C7" name="Happiness" /> {/* Pastel Yellow */}
              <Bar dataKey="focus" fill="#BEE3F8" name="Focus" /> {/* Pastel Blue */}
              <Bar dataKey="energy" fill="#C6F6D5" name="Energy" /> {/* Pastel Green */}
              <Bar dataKey="calmness" fill="#E9D8FD" name="Calmness" /> {/* Pastel Purple */}
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
