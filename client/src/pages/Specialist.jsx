import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import Header from "../components/Header"; // Ensure Header component is correctly imported

const MentalHealthForm = () => {
  const [formData, setFormData] = useState({
    Age: "",
    Gender: "",
    Ethnicity: "",
    EducationLevel: "",
    EmploymentStatus: "",
    DepressionScore_PHQ9: "",
    AnxietyScore_GAD7: "",
    StressLevel: "",
    SleepHours: "",
    AppetiteChange: "",
    SubstanceUse: "",
    PhysicalActivity: "",
    SocialInteractions: "",
    LivingSituation: "",
    SupportSystems: "",
    TraumaticEvents: "",
  });

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate(); // Initialize useNavigate

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await axios.post(
        "http://127.0.0.1:5000/predict",
        formData
      );

      // Navigate to /recommendation with the probability as state
      navigate("/recommendation", {
        state: { probability: response.data.probability },
      });
    } catch (err) {
      if (err.response && err.response.data && err.response.data.error) {
        setError(err.response.data.error);
      } else {
        setError("An unexpected error occurred.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Header />
      <div className="min-h-screen bg-white flex flex-col items-center p-6">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-teal-800">
            Mental Health Assessment
          </h1>
          <p className="text-lg text-gray-700 mt-2">
            Assess your mental well-being and receive personalized
            recommendations.
          </p>
        </div>
        <form
          onSubmit={handleSubmit}
          className="bg-gray-100 shadow-lg rounded-lg p-8 max-w-2xl w-full"
        >
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Complete the Assessment
          </h2>
          {/* Age */}
          <div className="mb-4">
            <label className="block mb-2 text-gray-600">Age:</label>
            <input
              type="number"
              name="Age"
              value={formData.Age}
              onChange={handleChange}
              min="18"
              max="100"
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-200"
              placeholder="Enter your age"
            />
          </div>

          {/* Gender */}
          <div className="mb-4">
            <label className="block mb-2 text-gray-600">Gender:</label>
            <select
              name="Gender"
              value={formData.Gender}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-200"
            >
              <option value="">Select</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Non-binary">Non-binary</option>
              <option value="Prefer not to say">Prefer not to say</option>
            </select>
          </div>

          {/* Ethnicity */}
          <div className="mb-4">
            <label className="block mb-2 text-gray-600">Ethnicity:</label>
            <select
              name="Ethnicity"
              value={formData.Ethnicity}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-200"
            >
              <option value="">Select</option>
              <option value="Caucasian">Caucasian</option>
              <option value="Asian">Asian</option>
              <option value="Hispanic">Hispanic</option>
              <option value="African American">African American</option>
              <option value="Other">Other</option>
            </select>
          </div>

          {/* Education Level */}
          <div className="mb-4">
            <label className="block mb-2 text-gray-600">Education Level:</label>
            <select
              name="EducationLevel"
              value={formData.EducationLevel}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-200"
            >
              <option value="">Select</option>
              <option value="High School">High School</option>
              <option value="Bachelor’s Degree">Bachelor’s Degree</option>
              <option value="Master’s Degree">Master’s Degree</option>
              <option value="Doctorate">Doctorate</option>
              <option value="Other">Other</option>
            </select>
          </div>

          {/* Employment Status */}
          <div className="mb-4">
            <label className="block mb-2 text-gray-600">
              Employment Status:
            </label>
            <select
              name="EmploymentStatus"
              value={formData.EmploymentStatus}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-200"
            >
              <option value="">Select</option>
              <option value="Employed">Employed</option>
              <option value="Unemployed">Unemployed</option>
              <option value="Student">Student</option>
              <option value="Self-Employed">Self-Employed</option>
              <option value="Retired">Retired</option>
            </select>
          </div>

          {/* Depression Score (PHQ-9) */}
          <div className="mb-4">
            <label className="block mb-2 text-gray-600">
              How often have you felt down, depressed, or hopeless?
            </label>
            <input
              type="number"
              name="DepressionScore_PHQ9"
              value={formData.DepressionScore_PHQ9}
              onChange={handleChange}
              min="0"
              max="27"
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-200"
              placeholder="Rate from 0 (Never) to 27 (Always)"
            />
          </div>

          {/* Anxiety Score (GAD-7) */}
          <div className="mb-4">
            <label className="block mb-2 text-gray-600">
              How often have you felt nervous, anxious, or on edge?
            </label>
            <input
              type="number"
              name="AnxietyScore_GAD7"
              value={formData.AnxietyScore_GAD7}
              onChange={handleChange}
              min="0"
              max="21"
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-200"
              placeholder="Rate from 0 (Never) to 21 (Always)"
            />
          </div>

          {/* Stress Level */}
          <div className="mb-4">
            <label className="block mb-2 text-gray-600">Stress Level:</label>
            <select
              name="StressLevel"
              value={formData.StressLevel}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-200"
            >
              <option value="">Select</option>
              <option value="Low">Low</option>
              <option value="Moderate">Moderate</option>
              <option value="High">High</option>
              <option value="Very High">Very High</option>
            </select>
          </div>

          {/* Sleep Hours */}
          <div className="mb-4">
            <label className="block mb-2 text-gray-600">
              Average Sleep Hours:
            </label>
            <input
              type="number"
              name="SleepHours"
              value={formData.SleepHours}
              onChange={handleChange}
              step="0.1"
              min="4"
              max="12"
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-200"
              placeholder="Enter average sleep hours"
            />
          </div>

          {/* Appetite Change */}
          <div className="mb-4">
            <label className="block mb-2 text-gray-600">Appetite Change:</label>
            <select
              name="AppetiteChange"
              value={formData.AppetiteChange}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-200"
            >
              <option value="">Select</option>
              <option value="Increased">Increased</option>
              <option value="Decreased">Decreased</option>
              <option value="Stable">Stable</option>
            </select>
          </div>

          {/* Substance Use */}
          <div className="mb-4">
            <label className="block mb-2 text-gray-600">Substance Use:</label>
            <select
              name="SubstanceUse"
              value={formData.SubstanceUse}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-200"
            >
              <option value="">Select</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>

          {/* Physical Activity */}
          <div className="mb-4">
            <label className="block mb-2 text-gray-600">
              Physical Activity:
            </label>
            <select
              name="PhysicalActivity"
              value={formData.PhysicalActivity}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-200"
            >
              <option value="">Select</option>
              <option value="Low">Low</option>
              <option value="Moderate">Moderate</option>
              <option value="High">High</option>
            </select>
          </div>

          {/* Social Interactions */}
          <div className="mb-4">
            <label className="block mb-2 text-gray-600">
              Social Interactions:
            </label>
            <select
              name="SocialInteractions"
              value={formData.SocialInteractions}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-200"
            >
              <option value="">Select</option>
              <option value="Poor">Poor</option>
              <option value="Limited">Limited</option>
              <option value="Good">Good</option>
            </select>
          </div>

          {/* Living Situation */}
          <div className="mb-4">
            <label className="block mb-2 text-gray-600">
              Living Situation:
            </label>
            <select
              name="LivingSituation"
              value={formData.LivingSituation}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-200"
            >
              <option value="">Select</option>
              <option value="Alone">Alone</option>
              <option value="With family">With family</option>
              <option value="With roommates">With roommates</option>
              <option value="Other">Other</option>
            </select>
          </div>

          {/* Support Systems */}
          <div className="mb-4">
            <label className="block mb-2 text-gray-600">Support Systems:</label>
            <select
              name="SupportSystems"
              value={formData.SupportSystems}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-200"
            >
              <option value="">Select</option>
              <option value="Weak">Weak</option>
              <option value="Moderate">Moderate</option>
              <option value="Strong">Strong</option>
            </select>
          </div>

          {/* Traumatic Events */}
          <div className="mb-6">
            <label className="block mb-2 text-gray-600">
              Exposure to Traumatic Events:
            </label>
            <select
              name="TraumaticEvents"
              value={formData.TraumaticEvents}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-200"
            >
              <option value="">Select</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full bg-teal-600 text-white py-3 px-4 rounded-lg hover:bg-teal-700 transition duration-300 ${
              loading ? "cursor-not-allowed opacity-50" : ""
            }`}
          >
            {loading ? "Submitting..." : "Submit"}
          </button>
        </form>

        {/* Display Errors */}
        {error && (
          <div className="mt-8 bg-red-100 border border-red-200 text-red-800 px-4 py-3 rounded relative w-full max-w-2xl">
            <strong className="font-bold">Error:</strong>
            <span className="block sm:inline">{error}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default MentalHealthForm;
