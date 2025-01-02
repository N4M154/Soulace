
// // Swirl.jsx
// import React, { useEffect, useState } from "react";
// import Header from "../components/Header";
// import SideButtons from "../components/SideButtons";

// const Swirl = () => {
//   const totalSegments = 15; // Number of spirals
//   const colors = ["#005057", "#00777E", "#4B3217", "#785230", "#AE9276"]; // Color palette
//   const [segments, setSegments] = useState(Array.from({ length: totalSegments }, (_, i) => i));
//   const [rotation, setRotation] = useState(0);

//   // Animate the spiral rotation
//   useEffect(() => {
//     const animate = () => {
//       if (segments.length > 0) {
//         setRotation((prev) => prev + 0.3); // Speed of rotation
//       }
//       requestAnimationFrame(animate);
//     };
//     animate();
//   }, [segments]);

//   // Handle spiral segment click
//   const handleSegmentClick = (index) => {
//     setSegments((prev) => prev.filter((_, i) => i !== index));
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-white to-gray-100 flex flex-col items-center">
//       <Header />
//       {/* Side Buttons */}
//       <SideButtons />

//       {/* Main Content */}
//       <main className="flex flex-col items-center justify-center mt-12">
//         <h1 className="text-3xl font-bold text-gray-700 mb-8">Spiral Burst</h1>
//         <div className="relative w-96 h-96 flex items-center justify-center">
//           <svg
//             viewBox="0 0 200 200"
//             xmlns="http://www.w3.org/2000/svg"
//             className="w-full h-full mt-10"
//             style={{ transform: `rotate(${rotation}deg)` }}
//           >
//             {segments.map((_, index) => (
//               <path
//                 key={index}
//                 d={`
//                   M100,100
//                   m-${10 * (index + 1)},0
//                   a${10 * (index + 1)},${10 * (index + 1)} 0 1,1 ${20 * (index + 1)},0
//                   a${10 * (index + 1)},${10 * (index + 1)} 0 1,1 -${20 * (index + 1)},0
//                 `}
//                 fill="none"
//                 stroke={colors[index % colors.length]}
//                 strokeWidth="2"
//                 onClick={() => handleSegmentClick(index)}
//                 className="cursor-pointer hover:opacity-50 transition-opacity duration-300"
//               />
//             ))}
//           </svg>
//         </div>
//         {segments.length === 0 && (
//           <div className="mt-6 text-2xl font-bold text-teal-600">
//             Congratulations! You've completed the swirl!
//           </div>
//         )}
//       </main>
//     </div>
//   );
// };

// export default Swirl;



//-----------------------------

// Swirl.jsx
import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import SideButtons from "../components/SideButtons";

const Swirl = () => {
  const totalSegments = 15; // Number of spirals
  const colors = ["#005057", "#00777E", "#4B3217", "#785230", "#AE9276"]; // Color palette
  const [segments, setSegments] = useState(Array.from({ length: totalSegments }, (_, i) => i));
  const [rotation, setRotation] = useState(0);

  // Animate the spiral rotation
  useEffect(() => {
    const animate = () => {
      if (segments.length > 0) {
        setRotation((prev) => prev + 0.3); // Speed of rotation
      }
      requestAnimationFrame(animate);
    };
    animate();
  }, [segments]);

  // Handle spiral segment click
  const handleSegmentClick = (index) => {
    setSegments((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      <SideButtons />

      {/* Main Content */}
      <main className="flex flex-col lg:flex-row items-center lg:items-start justify-center w-full px-8 py-12 gap-12">
        {/* Spiral Game */}
        <div className="relative w-80 h-80 lg:w-[400px] lg:h-[400px] flex items-center justify-center lg:ml-64 lg:mt-10">
          <svg
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full"
            style={{ transform: `rotate(${rotation}deg)` }}
          >
            {segments.map((_, index) => (
              <path
                key={index}
                d={`
                  M100,100
                  m-${10 * (index + 1)},0
                  a${10 * (index + 1)},${10 * (index + 1)} 0 1,1 ${20 * (index + 1)},0
                  a${10 * (index + 1)},${10 * (index + 1)} 0 1,1 -${20 * (index + 1)},0
                `}
                fill="none"
                stroke={colors[index % colors.length]}
                strokeWidth="2"
                onClick={() => handleSegmentClick(index)}
                className="cursor-pointer hover:opacity-50 transition-opacity duration-300"
              />
            ))}
          </svg>
        </div>

        {/* Game Instructions */}
        <div className="lg:w-1/3 p-6 bg-white shadow-xl rounded-lg border border-gray-200 lg:ml-32">
          <h2 className="text-2xl font-bold text-gray-700 mb-4">How to Play : Spiral Burst</h2>
          <p className="text-gray-600 text-sm leading-relaxed">
            Welcome to Spiral Burst! Your goal is to click on each spiral segment to remove it. 
            The spiral rotates continuously, making it more challenging. Keep clicking until all 
            segments are cleared. Complete the game to reveal a congratulatory message!
          </p>
          <p className="text-teal-600 mt-4 text-sm font-medium">
            Tip: Be precise! Click directly on the segments to remove them.
          </p>
          <h3 className="text-xl font-semibold text-gray-700 mt-6">Benefits</h3>
          <p className="text-gray-600 text-sm mt-2">
            This game helps improve focus and mindfulness by requiring precise attention to detail. 
            The rotating spiral promotes a meditative state as you concentrate on the task, making 
            it a great exercise for stress relief and enhancing mental clarity.
          </p>
          <h3 className="text-xl font-semibold text-gray-700 mt-6">How It Helps</h3>
          <p className="text-gray-600 text-sm mt-2">
            Playing Spiral Burst engages your mind and body in a calming activity, fostering 
            relaxation and reducing stress. It aids in enhancing hand-eye coordination, 
            promoting patience, and achieving a meditative state through focused interaction.
          </p>
        </div>
      </main>

      {segments.length === 0 && (
  <div className="fixed inset-x-0 bottom-12 flex justify-center">
    <p className="text-2xl font-bold text-teal-600">
      Congratulations! You've completed the meditation!
    </p>
  </div>
      )}
    </div>
  );
};

export default Swirl;
