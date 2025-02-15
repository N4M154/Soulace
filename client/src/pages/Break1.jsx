// // // ColorGrid.jsx
// // import React from "react";
// // import Header from "../components/Header";
// // import SideButtons from "../components/SideButtons";
// // const ColorGrid = () => {
// //   return (
// //     <div className="min-h-screen bg-gradient-to-b from-white to-gray-100 flex flex-col items-center">
// //       <Header />
// // {/* Side Buttons */}
// // <SideButtons />
// //       {/* Main Content */}
// //       <main className="flex flex-col items-center">
// //         <h1 className="text-3xl font-bold text-gray-700 mb-12">Colorful Circles</h1>
// //         <div className="grid grid-cols-5 gap-4">
// //           {Array.from({ length: 15 }).map((_, idx) => (
// //             <div
// //               key={idx}
// //               className={`w-16 h-16 rounded-full ${
// //                 idx === 9
// //                   ? "bg-pink-300"
// //                   : idx % 3 === 0
// //                   ? "bg-green-200"
// //                   : "bg-orange-200"
// //               }`}
// //             ></div>
// //           ))}
// //         </div>
// //       </main>
// //     </div>
// //   );
// // };

// // export default ColorGrid;

// // ColorGrid.jsx
// import React, { useState } from "react";
// import Header from "../components/Header";
// import SideButtons from "../components/SideButtons";

// const ColorGrid = () => {
//   const boxSize = 400; // Define the size of the box
//   const initialCircle = {
//     id: "root",
//     size: boxSize,
//     position: { x: boxSize / 2, y: boxSize / 2 }, // Centered in the box
//     color: "bg-[#005057]",
//   };

//   const [circles, setCircles] = useState([initialCircle]);
//   const [isCompleted, setIsCompleted] = useState(false);

//   const colors = ["bg-[#005057]", "bg-[#00777E]", "bg-[#4B3217]", "bg-[#785230]", "bg-[#AE9276]"];

//   const handleCircleClick = (circleId) => {
//     setCircles((prevCircles) => {
//       const clickedCircle = prevCircles.find((circle) => circle.id === circleId);
//       if (!clickedCircle || clickedCircle.size <= 16) return prevCircles;

//       const smallerSize = clickedCircle.size / 2;
//       const newCircles = [
//         {
//           id: `${circleId}-1`,
//           size: smallerSize,
//           position: {
//             x: clickedCircle.position.x - smallerSize / 2,
//             y: clickedCircle.position.y - smallerSize / 2,
//           },
//           color: colors[Math.floor(Math.random() * colors.length)],
//         },
//         {
//           id: `${circleId}-2`,
//           size: smallerSize,
//           position: {
//             x: clickedCircle.position.x + smallerSize / 2,
//             y: clickedCircle.position.y - smallerSize / 2,
//           },
//           color: colors[Math.floor(Math.random() * colors.length)],
//         },
//         {
//           id: `${circleId}-3`,
//           size: smallerSize,
//           position: {
//             x: clickedCircle.position.x - smallerSize / 2,
//             y: clickedCircle.position.y + smallerSize / 2,
//           },
//           color: colors[Math.floor(Math.random() * colors.length)],
//         },
//         {
//           id: `${circleId}-4`,
//           size: smallerSize,
//           position: {
//             x: clickedCircle.position.x + smallerSize / 2,
//             y: clickedCircle.position.y + smallerSize / 2,
//           },
//           color: colors[Math.floor(Math.random() * colors.length)],
//         },
//       ];

//       const updatedCircles = prevCircles
//         .filter((circle) => circle.id !== circleId)
//         .concat(newCircles);

//       if (updatedCircles.every((circle) => circle.size <= 16)) {
//         setIsCompleted(true);
//       }

//       return updatedCircles;
//     });
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-white to-gray-100 flex flex-col items-center">
//       <Header />
//       {/* Side Buttons */}
//       <SideButtons />
//       {/* Main Content */}
//       <main className="flex flex-col items-center">
//         <h1 className="text-3xl font-bold text-gray-700 mb-12">Colorful Circles</h1>
//         <div
//           className="relative bg-gray-200 border border-gray-300 rounded-lg"
//           style={{ width: `${boxSize}px`, height: `${boxSize}px` }}
//         >
//           {circles.map((circle) => (
//             <div
//               key={circle.id}
//               className={`absolute ${circle.color} rounded-full cursor-pointer`}
//               style={{
//                 width: `${circle.size}px`,
//                 height: `${circle.size}px`,
//                 top: `${circle.position.y}px`,
//                 left: `${circle.position.x}px`,
//                 transform: "translate(-50%, -50%)",
//               }}
//               onClick={() => handleCircleClick(circle.id)}
//             ></div>
//           ))}
//         </div>

//         {isCompleted && (
//           <div className="mt-8 text-2xl font-bold text-green-600">Congratulations! You've completed the Pulse Pop!</div>
//         )}
//       </main>
//     </div>
//   );
// };

// export default ColorGrid;

//----------------------------------------------------

// ColorGrid.jsx
import React, { useState } from "react";
import Header from "../components/Header";
import SideButtons from "../components/SideButtons";

const ColorGrid = () => {
  const boxSize = 400; // Define the size of the box
  const initialCircle = {
    id: "root",
    size: boxSize,
    position: { x: boxSize / 2, y: boxSize / 2 }, // Centered in the box
    color: "bg-[#005057]",
  };

  const [circles, setCircles] = useState([initialCircle]);
  const [isCompleted, setIsCompleted] = useState(false);

  const colors = [
    "bg-[#005057]",
    "bg-[#00777E]",
    "bg-[#4B3217]",
    "bg-[#785230]",
    "bg-[#AE9276]",
  ];

  const handleCircleClick = (circleId) => {
    setCircles((prevCircles) => {
      const clickedCircle = prevCircles.find(
        (circle) => circle.id === circleId
      );
      if (!clickedCircle || clickedCircle.size <= 16) return prevCircles;

      const smallerSize = clickedCircle.size / 2;
      const newCircles = [
        {
          id: `${circleId}-1`,
          size: smallerSize,
          position: {
            x: clickedCircle.position.x - smallerSize / 2,
            y: clickedCircle.position.y - smallerSize / 2,
          },
          color: colors[Math.floor(Math.random() * colors.length)],
        },
        {
          id: `${circleId}-2`,
          size: smallerSize,
          position: {
            x: clickedCircle.position.x + smallerSize / 2,
            y: clickedCircle.position.y - smallerSize / 2,
          },
          color: colors[Math.floor(Math.random() * colors.length)],
        },
        {
          id: `${circleId}-3`,
          size: smallerSize,
          position: {
            x: clickedCircle.position.x - smallerSize / 2,
            y: clickedCircle.position.y + smallerSize / 2,
          },
          color: colors[Math.floor(Math.random() * colors.length)],
        },
        {
          id: `${circleId}-4`,
          size: smallerSize,
          position: {
            x: clickedCircle.position.x + smallerSize / 2,
            y: clickedCircle.position.y + smallerSize / 2,
          },
          color: colors[Math.floor(Math.random() * colors.length)],
        },
      ];

      const updatedCircles = prevCircles
        .filter((circle) => circle.id !== circleId)
        .concat(newCircles);

      if (updatedCircles.every((circle) => circle.size <= 16)) {
        setIsCompleted(true);
      }

      return updatedCircles;
    });
  };

  return (
    <div className="min-h-screen bg-white dark:bg-[#2c2c2c] flex flex-col items-center">
      <Header />
      {/* Side Buttons */}
      <SideButtons />
      {/* Main Content */}
      <main className="flex flex-col items-center">
        <h1 className="mt-20 text-3xl font-bold text-gray-700 dark:text-white mb-12">
          Colorful Circles
        </h1>
        <div
          className="relative bg-gray-200 dark:bg-transparent border dark:border-transparent border-gray-300 rounded-lg"
          style={{ width: `${boxSize}px`, height: `${boxSize}px` }}
        >
          {circles.map((circle) => (
            <div
              key={circle.id}
              className={`absolute ${circle.color} rounded-full cursor-pointer`}
              style={{
                width: `${circle.size}px`,
                height: `${circle.size}px`,
                top: `${circle.position.y}px`,
                left: `${circle.position.x}px`,
                transform: "translate(-50%, -50%)",
              }}
              onClick={() => handleCircleClick(circle.id)}
            ></div>
          ))}
        </div>

        {isCompleted && (
          <div className="mt-8 text-2xl font-bold text-green-600 dark:text-teal-300">
            Congratulations! You've completed the Pulse Pop!
          </div>
        )}
      </main>

      {/* How to Play Section */}
      <aside className="absolute right-20 top-60 p-4 w-64 bg-gray-50 dark:bg-transparent shadow-lg dark:shadow-black rounded-lg border dark:border-teal-700">
        <h2 className="text-xl font-bold text-gray-700 dark:text-white mb-4">
          How to Play
        </h2>
        <ol className="text-gray-600 dark:text-gray-300 text-sm list-decimal list-inside">
          <li>Click on a circle to split it into smaller circles.</li>
          <li className="mt-2">
            Keep clicking circles until all circles are reduced to the smallest
            size.
          </li>
          <li className="mt-2">
            The game is complete when all circles are at their smallest size.
          </li>
          <li className="mt-2">
            Try to complete the game as quickly as possible!
          </li>
        </ol>
      </aside>
    </div>
  );
};

export default ColorGrid;
