// // MoodLogger.jsx
// import { Groq } from "groq-sdk";
// import React, { useState } from "react";
// import { Bar, Radar } from "react-chartjs-2";
// import Swal from "sweetalert2";
// import DiscreteSliderMarks from "../DiscreteSliderMarks";
// import SideButtons from "../components/SideButtons";
// import Header from "../components/Header";
// import {
//   Chart as ChartJS,
//   RadialLinearScale,
//   LinearScale,
//   CategoryScale,
//   BarElement,
//   PointElement,
//   LineElement,
//   Filler,
//   Tooltip,
//   Legend,
// } from "chart.js";

// ChartJS.register(
//   RadialLinearScale,
//   LinearScale,
//   CategoryScale,
//   BarElement,
//   PointElement,
//   LineElement,
//   Filler,
//   Tooltip,
//   Legend
// );

// const MoodLogger = () => {
//   const [mood, setMood] = useState({
//     stress: 50,
//     happiness: 50,
//     energy: 50,
//     focus: 50,
//     calmness: 50,
//   });

//   const [sleep, setSleep] = useState({
//     duration: 6,
//     quality: 50,
//   });

//   const [mentalHealthRating, setMentalHealthRating] = useState(null);
//   const [recommendation, setRecommendation] = useState(null);
//   const [loading, setLoading] = useState(false);

//   const [isExpanded, setIsExpanded] = useState(true); // Fix for undefined isExpanded

//   const groq = new Groq({
//     apiKey: import.meta.env.VITE_GROQ_API_KEY,
//     dangerouslyAllowBrowser: true,
//   });

//   const handleMoodChange = (field, value) => {
//     setMood((prev) => ({
//       ...prev,
//       [field]: value,
//     }));
//   };

//   const handleSleepChange = (field, value) => {
//     setSleep((prev) => ({
//       ...prev,
//       [field]: value,
//     }));
//   };

//   const fetchMentalHealthRating = async () => {
//     const inputData = [
//       { role: "system", content: "You are a mental health analyst. Provide a numerical rating for mental health based on mood and sleep data. The rating should be a whole number between 1 and 10, where 1 represents very poor mental health and 10 represents excellent mental health." },
//       {
//         role: "user",
//         content: `Mood Data: ${JSON.stringify(mood)}, Sleep Data: ${JSON.stringify(sleep)}`,
//       },
//     ];

//     try {
//       const chatCompletion = await groq.chat.completions.create({
//         model: "llama-3.3-70b-versatile",
//         temperature: 0.7,
//         max_tokens: 512,
//         messages: inputData,
//       });

//       const aiResponse = chatCompletion.choices[0]?.message?.content || "Unavailable (Log Again)";
//       const matches = aiResponse.match(/(\d+)/i);
//       const rating = matches ? parseInt(matches[1], 10) : "Unavailable (Log Again)";
//       setMentalHealthRating(rating);
//     } catch (error) {
//       console.error("Error fetching mental health rating:", error);
//       Swal.fire({
//         title: "Error!",
//         text: "Failed to fetch mental health rating. Please try again.",
//         icon: "error",
//         confirmButtonText: "OK",
//       });
//     }
//   };

//   const fetchRecommendations = async () => {
//     const inputData = [
//       { role: "system", content: "You are a mental health analyst. Provide personalized recommendations based on mood and sleep data. don't write personalised recommendation as heading. maintain paras in your response. it should be short and authentic" },
//       {
//         role: "user",
//         content: `Mood Data: ${JSON.stringify(mood)}, Sleep Data: ${JSON.stringify(sleep)}`,
//       },
//     ];

//     try {
//       const chatCompletion = await groq.chat.completions.create({
//         model: "llama-3.3-70b-versatile",
//         temperature: 0.7,
//         max_tokens: 512,
//         messages: inputData,
//       });

//       const aiResponse = chatCompletion.choices[0]?.message?.content || "Unavailable";
//       setRecommendation(aiResponse);
//     } catch (error) {
//       console.error("Error fetching recommendations:", error);
//       Swal.fire({
//         title: "Error!",
//         text: "Failed to fetch recommendations. Please try again.",
//         icon: "error",
//         confirmButtonText: "OK",
//       });
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const { stress, happiness, energy, focus, calmness } = mood;
//     const { duration, quality } = sleep;

//     if (!stress || !happiness || !energy || !focus || !calmness || !duration || !quality) {
//       Swal.fire({
//         icon: "error",
//         title: "Oops...",
//         text: "Please fill all fields!",
//       });
//       return;
//     }

//     setLoading(true);

//     await fetchMentalHealthRating();
//     await fetchRecommendations();

//     setLoading(false);
//   };

//   const moodChartData = {
//     labels: ["Stress", "Happiness", "Energy", "Focus", "Calmness"],
//     datasets: [
//       {
//         label: "Mood",
//         data: [
//           mood.stress,
//           mood.happiness,
//           mood.energy,
//           mood.focus,
//           mood.calmness,
//         ],
//         backgroundColor: "rgba(75, 192, 192, 0.2)",
//         borderColor: "rgba(75, 192, 192, 1)",
//         borderWidth: 1,
//       },
//     ],
//   };

//   const sleepChartData = {
//     labels: ["Duration (hours)", "Quality (%)"],
//     datasets: [
//       {
//         label: "Sleep",
//         data: [sleep.duration, sleep.quality],
//         backgroundColor: ["rgba(153, 102, 255, 0.6)", "rgba(75, 192, 192, 0.6)"],
//         borderColor: ["rgba(153, 102, 255, 1)", "rgba(75, 192, 192, 1)"],
//         borderWidth: 1,
//       },
//     ],
//   };

//   const chartOptions = {
//     responsive: true,
//     maintainAspectRatio: false,
//   };

//   return (
//     <div style={{ display: "flex", minHeight: "100vh" }}>
//       <SideButtons isExpanded={isExpanded} setIsExpanded={setIsExpanded} />
//       <div
//         id="main-content"
//         style={{
//           flex: 1,
//           marginLeft: isExpanded ? "260px" : "80px",
//           transition: "margin-left 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
//         }}
//       >
//         <Header />
//         <div style={{ paddingTop: "60px", padding: "20px" }}>
//           <h1 style={{ textAlign: "center", marginBottom: "15px", fontSize: "28px", color: "#333" }}>
//             Mood and Sleep Logger
//           </h1>
//           <div style={{ display: "flex", gap: "20px", alignItems: "flex-start" }}>
//             <div style={{ flex: 1, maxWidth: "60%" }}>
//               <form onSubmit={handleSubmit}>
//                 <h2 style={{ textAlign: "center", marginBottom: "30px", fontSize: "16px", color: "#555" }}>
//                   How do you feel today?
//                 </h2>
//                 <div
//                   style={{
//                     display: "grid",
//                     gridTemplateColumns: "1fr 1fr",
//                     gap: "0.5rem",
//                     justifyContent: "center",
//                     paddingLeft: "10%",
//                   }}
//                 >
//                   {Object.keys(mood).map((moodType) => (
//                     <div key={moodType} style={{ minWidth: "100px" }}>
//                       <label style={{ fontWeight: "bold", display: "block", marginBottom: "5px", color: "#333" }}>
//                         {moodType.charAt(0).toUpperCase() + moodType.slice(1)}
//                       </label>
//                       <DiscreteSliderMarks
//                         value={mood[moodType]}
//                         onChange={(value) => handleMoodChange(moodType, value)}
//                       />
//                     </div>
//                   ))}
//                   <div style={{ minWidth: "100px" }}>
//                     <label style={{ fontWeight: "bold", display: "block", marginBottom: "5px", color: "#333" }}>
//                       Sleep Duration (hours)
//                     </label>
//                     <DiscreteSliderMarks
//                       value={sleep.duration}
//                       min={0}
//                       max={24}
//                       step={1}
//                       onChange={(value) => handleSleepChange("duration", value)}
//                     />
//                   </div>
//                   <div style={{ minWidth: "100px" }}>
//                     <label style={{ fontWeight: "bold", display: "block", marginBottom: "5px", color: "#333" }}>
//                       Sleep Quality (%)
//                     </label>
//                     <DiscreteSliderMarks
//                       value={sleep.quality}
//                       onChange={(value) => handleSleepChange("quality", value)}
//                     />
//                   </div>
//                 </div>
//                 <button
//                   type="submit"
//                   style={{
//                     marginTop: "20px",
//                     padding: "10px 20px",
//                     fontSize: "14px",
//                     backgroundColor: "#6B46C1",
//                     borderRadius: "6px",
//                     cursor: "pointer",
//                     border: "none",
//                     color: "#fff",
//                     marginLeft: "65px",
//                   }}
//                 >
//                   {loading ? "Analyzing..." : "Log Data"}
//                 </button>
//               </form>
//             </div>
//             <div style={{ flex: 0.8, display: "flex", flexDirection: "column", gap: "40px" }}>
//               <div style={{ height: "250px", maxWidth: "100%" }}>
//                 <Radar data={moodChartData} options={chartOptions} />
//               </div>
//               <div style={{ height: "250px", maxWidth: "80%", marginLeft: "40px" }}>
//                 <Bar data={sleepChartData} options={chartOptions} />
//               </div>
//             </div>
//           </div>
//           <div style={{ marginTop: "30px" }}>
//             {mentalHealthRating !== null && (
//               <div style={{ marginBottom: "20px" }}>
//                 <h3>Your Mental Health Rating:</h3>
//                 <textarea
//                   readOnly
//                   value={mentalHealthRating}
//                   style={{
//                     width: "100%",
//                     minHeight: "50px",
//                     padding: "10px",
//                     fontSize: "24px",
//                     borderRadius: "5px",
//                     resize: "none",
//                     background: "transparent",
//                     color: "purple",
//                   }}
//                 ></textarea>
//               </div>
//             )}
//             {recommendation && (
//               <div
//                 style={{
//                   marginTop: "20px",
//                   padding: "20px",
//                   border: "1px solid #ddd",
//                   borderRadius: "8px",
//                   backgroundColor: "#f9f9f9",
//                 }}
//               >
//                 <h3 style={{ marginBottom: "15px", color: "#333", textAlign: "center" }}>
//                   Personalized Recommendation:
//                 </h3>
//                 <p style={{ fontSize: "16px", lineHeight: "1.6", color: "#555" }}>{recommendation}</p>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MoodLogger;

//---------------------------------------------------------------------------------------------

//old one

//----------------------------------------------------------------

import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Filler,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  RadialLinearScale,
  Tooltip,
} from "chart.js";
import { Groq } from "groq-sdk";
import {
  BatteryFull,
  Brain,
  Coffee,
  Frown,
  Heart,
  Meh,
  Moon,
  Smile,
  SmilePlus,
  Star,
  Sun,
  Zap,
} from "lucide-react";
import { useState } from "react";
import { Bar, Radar } from "react-chartjs-2";
import Swal from "sweetalert2";
import Footer from "../components/Footer.jsx";
import Header from "../components/Header";
import SideButtons from "../components/SideButtons";
import ReactMarkdown from "react-markdown";
import { color } from "framer-motion";

ChartJS.register(
  RadialLinearScale,
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

const MoodLogger = () => {
  const moodOptions = {
    veryPoor: {
      label: "Very Poor",
      value: 20,
      icon: Frown,
      color: "text-red-500",
    },
    poor: { label: "Poor", value: 40, icon: Meh, color: "text-orange-500" },
    moderate: {
      label: "Moderate",
      value: 60,
      icon: Smile,
      color: "text-yellow-500",
    },
    good: { label: "Good", value: 80, icon: SmilePlus, color: "text-teal-500" },
    excellent: {
      label: "Excellent",
      value: 100,
      icon: Heart,
      color: "text-green-500",
    },
  };

  const sleepDurationOptions = {
    lessThan4: { label: "Less than 4 hours", value: 3, icon: Moon },
    fourToSix: { label: "4-6 hours", value: 5, icon: Moon },
    sixToEight: { label: "6-8 hours", value: 7, icon: Moon },
    eightToTen: { label: "8-10 hours", value: 9, icon: Moon },
    moreThanTen: { label: "More than 10 hours", value: 11, icon: Moon },
  };

  const [mood, setMood] = useState({
    stress: 50,
    happiness: 50,
    energy: 50,
    focus: 50,
    calmness: 50,
    motivation: 50,
    anxiety: 50,
    socialConnection: 50,
  });

  const [sleep, setSleep] = useState({
    duration: 6,
    quality: 50,
  });

  const [notes, setNotes] = useState("");
  const [mentalHealthRating, setMentalHealthRating] = useState(null);
  const [recommendation, setRecommendation] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isExpanded, setIsExpanded] = useState(true);
  const [currentStep, setCurrentStep] = useState(0);
  const [analysisComplete, setAnalysisComplete] = useState(false);

  const groq = new Groq({
    apiKey: import.meta.env.VITE_GROQ_API_KEY,
    dangerouslyAllowBrowser: true,
  });

  const questions = [
    {
      question: "How are your stress levels today?",
      field: "stress",
      type: "mood",
      description:
        "Consider your current stress levels and any factors affecting them",
      icon: Brain,
    },
    {
      question: "How happy do you feel today?",
      field: "happiness",
      type: "mood",
      description: "Think about your overall mood and emotional state",
      icon: Heart,
    },
    {
      question: "How energetic do you feel?",
      field: "energy",
      type: "mood",
      description: "Consider your physical and mental energy levels",
      icon: Zap,
    },
    {
      question: "How's your ability to focus today?",
      field: "focus",
      type: "mood",
      description: "Think about your concentration and mental clarity",
      icon: Coffee,
    },
    {
      question: "How calm do you feel?",
      field: "calmness",
      type: "mood",
      description: "Consider your inner peace and tranquility",
      icon: Sun,
    },
    {
      question: "How motivated are you feeling?",
      field: "motivation",
      type: "mood",
      description: "Think about your drive and enthusiasm for tasks",
      icon: BatteryFull,
    },
    {
      question: "How's your anxiety level?",
      field: "anxiety",
      type: "mood",
      description: "Consider your worry and nervousness levels",
      icon: Brain,
    },
    {
      question: "How connected do you feel socially?",
      field: "socialConnection",
      type: "mood",
      description: "Think about your interactions and relationships",
      icon: Heart,
    },
    {
      question: "How long did you sleep last night?",
      field: "duration",
      type: "sleep-duration",
      description: "Select your approximate sleep duration",
      icon: Moon,
    },
    {
      question: "How would you rate your sleep quality?",
      field: "quality",
      type: "sleep-quality",
      description: "Consider how refreshed you feel after sleeping",
      icon: Star,
    },
  ];

  const handleOptionSelect = (field, value) => {
    if (field === "duration") {
      setSleep((prev) => ({ ...prev, [field]: value }));
    } else if (field === "quality") {
      setSleep((prev) => ({ ...prev, [field]: value }));
    } else {
      setMood((prev) => ({ ...prev, [field]: value }));
    }
  };

  const handleNext = () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const fetchMentalHealthRating = async () => {
    const inputData = [
      {
        role: "system",
        content:
          "You are a mental health analyst. Based on the provided mood and sleep data, provide a concise analysis in the following format: 1. A numerical rating between 1-10 (where 1 is poor and 10 is excellent) 2. A brief, empathetic 2-3 sentence explanation of the rating that acknowledges the user's current state and offers gentle encouragement.Do not just summerize the inputs , give me a persinalized recommendation on mental well being based on the given inputs.",
      },
      {
        role: "user",
        content: `Please analyze the following data and provide a rating and brief explanation:
        Mood Indicators:
        - Stress Level: ${mood.stress}%
        - Happiness Level: ${mood.happiness}%
        - Energy Level: ${mood.energy}%
        - Focus Level: ${mood.focus}%
        - Calmness Level: ${mood.calmness}%
        - Motivation Level: ${mood.motivation}%
        - Anxiety Level: ${mood.anxiety}%
        - Social Connection: ${mood.socialConnection}%
        
        Sleep Metrics:
        - Duration: ${sleep.duration} hours
        - Quality: ${sleep.quality}%
        
        Additional Notes: ${notes}`,
      },
    ];

    try {
      const chatCompletion = await groq.chat.completions.create({
        model: "llama-3.3-70b-versatile",
        temperature: 0.7,
        max_tokens: 512,
        messages: inputData,
      });

      const aiResponse =
        chatCompletion.choices[0]?.message?.content || "Unavailable";
      const ratingMatch = aiResponse.match(/\b([1-9]|10)\b/);
      const rating = ratingMatch ? parseInt(ratingMatch[0], 10) : null;

      if (rating) {
        setMentalHealthRating(rating);
        setRecommendation(aiResponse.replace(/\b([1-9]|10)\b/, "").trim());
      } else {
        throw new Error("Could not extract rating from response");
      }
    } catch (error) {
      console.error("Error fetching mental health rating:", error);
      Swal.fire({
        title: "Error!",
        text: "Failed to analyze your data. Please try again.",
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await fetchMentalHealthRating();
    setLoading(false);
    setAnalysisComplete(true);
  };

  const moodChartData = {
    labels: [
      "Stress",
      "Happiness",
      "Energy",
      "Focus",
      "Calmness",
      "Motivation",
      "Anxiety",
      "Social",
    ],
    datasets: [
      {
        label: "Current Mood",
        data: [
          mood.stress,
          mood.happiness,
          mood.energy,
          mood.focus,
          mood.calmness,
          mood.motivation,
          mood.anxiety,
          mood.socialConnection,
        ],
        backgroundColor: "rgba(45, 212, 191, 0.2)",
        borderColor: "rgba(45, 212, 191, 1)",
        borderWidth: 1,
        pointBackgroundColor: "rgba(45, 212, 191, 1)",
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "rgba(45, 212, 191, 1)",
      },
    ],
  };

  const sleepChartData = {
    labels: ["Sleep Duration", "Sleep Quality"],
    datasets: [
      {
        label: "Sleep Metrics",
        data: [sleep.duration, sleep.quality],
        backgroundColor: ["rgba(45, 212, 191, 0.6)", "rgba(45, 212, 191, 0.4)"],
        borderColor: ["rgba(45, 212, 191, 1)", "rgba(45, 212, 191, 0.8)"],
        borderWidth: 2,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      r: {
        angleLines: {
          color: "rgba(45, 212, 191, 0.1)",
        },
        grid: {
          color: "rgba(45, 212, 191, 0.1)",
        },
        pointLabels: {
          color: "gray",
        },
        ticks: {
          backdropColor: "transparent",
        },
      },
    },
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          padding: 20, // Adds spacing around legend items
        },
      },
    },
    layout: {
      padding: {
        bottom: 20, // Adds extra margin below the legend
      },
    },
  };

  const renderQuestion = () => {
    const currentQuestion = questions[currentStep];
    const options =
      currentQuestion.type === "sleep-duration"
        ? sleepDurationOptions
        : moodOptions;
    const QuestionIcon = currentQuestion.icon;

    return (
      <div className="bg-white dark:bg-[#2c2c2c] p-8 rounded-xl shadow-xl dark:shadow-black border dark:border-teal-700 mb-10">
        <div className="flex items-center justify-center mb-4">
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div
              className="bg-teal-500 h-2.5 rounded-full transition-all duration-500"
              style={{
                width: `${((currentStep + 1) / questions.length) * 100}%`,
              }}
            ></div>
          </div>
          <span className="ml-4 text-sm text-gray-600 dark:text-gray-400">
            {currentStep + 1}/{questions.length}
          </span>
        </div>

        <div className="flex items-center justify-center mb-6">
          <QuestionIcon className="w-8 h-8 text-teal-500 mr-3" />
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-teal-100">
            {currentQuestion.question}
          </h3>
        </div>

        <p className="text-gray-600 dark:text-gray-300 mb-6 text-center">
          {currentQuestion.description}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {Object.entries(options).map(([key, option]) => {
            const Icon = option.icon;
            return (
              <button
                key={key}
                onClick={() =>
                  handleOptionSelect(currentQuestion.field, option.value)
                }
                className={`p-4 rounded-lg transition-all transform hover:scale-105 text-sm md:text-base flex flex-col items-center gap-2 ${
                  (currentQuestion.type === "sleep-duration" &&
                    sleep[currentQuestion.field] === option.value) ||
                  (currentQuestion.type !== "sleep-duration" &&
                    mood[currentQuestion.field] === option.value)
                    ? "bg-teal-500 text-white shadow-md"
                    : "bg-gray-50 dark:bg-teal-900 text-gray-700 dark:text-teal-300 hover:bg-teal-50 hover:text-teal-600 dark:hover:bg-teal-950 dark:hover:text-teal-500"
                }`}
              >
                <Icon className="w-6 h-6" />
                {option.label}
              </button>
            );
          })}
        </div>
      </div>
    );
  };

  const renderResults = () => (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white dark:bg-transparent border dark:border-teal-700 p-6 rounded-xl shadow-lg dark:shadow-black h-[400px]">
          <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-300 text-center">
            Mood Analysis
          </h3>
          <Radar data={moodChartData} options={chartOptions} />
        </div>
        <div className="bg-white dark:bg-transparent border dark:border-teal-700 p-6 rounded-xl shadow-lg dark:shadow-black h-[400px]">
          <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-300 text-center">
            Sleep Analysis
          </h3>
          <Bar data={sleepChartData} options={chartOptions} />
        </div>
      </div>

      {mentalHealthRating !== null && (
        <div className="bg-white dark:bg-transparent dark:border dark:border-teal-700 p-8 rounded-xl shadow-lg">
          <div className="flex items-center justify-center mb-6">
            <div className="relative">
              <div className="text-6xl font-bold text-teal-500 dark:text-teal-300">
                {mentalHealthRating}
              </div>
              <div className="text-gray-500 dark:text-white text-sm absolute -right-4 top-2">
                /10
              </div>
            </div>
          </div>
          {recommendation && (
            <p className="text-gray-700 dark:text-[#f5f5f5] text-lg leading-relaxed text-center">
              <ReactMarkdown>{recommendation}</ReactMarkdown>
            </p>
          )}
        </div>
      )}

      <button
        onClick={() => {
          setCurrentStep(0);
          setAnalysisComplete(false);
          setMentalHealthRating(null);
          setRecommendation(null);
        }}
        className="w-full px-6 py-4 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition-colors shadow-md"
      >
        Log Another Entry
      </button>
    </div>
  );

  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-[#2c2c2c]">
      <SideButtons isExpanded={isExpanded} setIsExpanded={setIsExpanded} />
      <div
        id="main-content"
        className="flex-1 transition-all duration-300"
        style={{ marginLeft: isExpanded ? "260px" : "80px" }}
      >
        <Header />
        <div className="pt-20 p-6 md:p-8">
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-800 dark:text-gray-300">
            Daily Mood & Sleep Logger
          </h1>

          <div className="max-w-5xl mx-auto">
            {!analysisComplete ? (
              <>
                {renderQuestion()}
                <div className="flex justify-between mt-6">
                  <button
                    onClick={handlePrevious}
                    disabled={currentStep === 0}
                    className="px-6 py-3 bg-gray-100 text-gray-700 rounded-lg disabled:opacity-50 hover:bg-gray-200 transition-colors"
                  >
                    Previous
                  </button>
                  {currentStep === questions.length - 1 ? (
                    <button
                      onClick={handleSubmit}
                      disabled={loading}
                      className="px-6 py-3 bg-teal-500 text-white rounded-lg disabled:opacity-50 hover:bg-teal-600 transition-colors shadow-md"
                    >
                      {loading ? "Analyzing..." : "Submit"}
                    </button>
                  ) : (
                    <button
                      onClick={handleNext}
                      className="px-6 py-3 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition-colors shadow-md"
                    >
                      Next
                    </button>
                  )}
                </div>
              </>
            ) : (
              renderResults()
            )}
          </div>
        </div>

        <Footer></Footer>
      </div>
    </div>
  );
};

export default MoodLogger;
