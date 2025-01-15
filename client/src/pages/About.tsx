// import Header from "../components/Header.jsx";
// import SideButtons from "../components/SideButtons.jsx";
// import { useState } from "react";

// const AboutPage = () => {
//   const [isExpanded, setIsExpanded] = useState(true); // Track sidebar state

//   return (
//     <div className="flex">
//       <SideButtons onSidebarToggle={setIsExpanded} />
//       <div
//         id="main-content"
//         className="transition-all duration-300"
//         style={{
//           marginLeft: isExpanded ? "260px" : "80px",
//         }}
//       >
//         <Header />
//         <div className="min-h-screen bg-gradient-to-br from-blue-50 to-teal-100">
//           <div className="container mx-auto py-12 px-8 bg-white bg-opacity-95 rounded-lg ">
//             {/* Developers Information */}
//             <section className="mb-16">
//               <h2 className="text-4xl font-extrabold text-teal-700 mb-8 text-center">
//                 Meet Our Team
//               </h2>
//               <p className="text-lg text-gray-700 mb-12 text-center leading-relaxed">
//                 Our team of passionate developers is dedicated to creating a
//                 meaningful platform that prioritizes mental health and empowers
//                 individuals to take control of their emotional well-being.
//               </p>
//               <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
//                 {/* Developer Cards */}
//                 {[
//                   {
//                     name: "Alfey Sani",
//                     role: "Product Manager & Frontend Developer",
//                     description:
//                       "Alfey combines strong UI design skills with product management expertise to ensure the platform meets user needs effectively.",
//                   },
//                   {
//                     name: "Faiza Maliat",
//                     role: "UI/UX and Testing-QA Developer ",
//                     description:
//                       "Faiza focuses on creating seamless user interfaces and conducting quality assurance to ensure the platform runs smoothly.",
//                   },
//                    {
//                     name: "Namisa Najah",
//                     role: "Backend Developer ",
//                     description:
//                       "Namisa Najah is a jack of all trades. She focuses on the backend more.",
//                   },
                  
//                   {
//                     name: "Md H R Alif",
//                     role: "Backend Developer",
//                     description:
//                       "Alif specializes in backend development, optimizing system performance and database efficiency.",
//                   },
//                 ].map((developer, index) => (
//                   <div
//                     key={index}
//                     className="bg-gradient-to-br from-teal-50 to-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all"
//                   >
//                     <h3 className="text-xl font-semibold text-teal-700 mb-2">
//                       {developer.name}
//                     </h3>
//                     <p className="text-sm font-medium text-teal-600 mb-4">
//                       {developer.role}
//                     </p>
//                     <p className="text-gray-700 text-sm">{developer.description}</p>
//                   </div>
//                 ))}
//               </div>
//             </section>

//             {/* Project Motivation */}
//             <section className="mb-16">
//               <h2 className="text-4xl font-extrabold text-teal-700 mb-8 text-center">
//                 Our Vision & Motivation
//               </h2>
//               <p className="text-lg text-gray-700 leading-relaxed text-center max-w-4xl mx-auto">
//                 Mental health is essential for overall well-being, yet it's often
//                 stigmatized. Our mission is to create a comprehensive platform that
//                 empowers individuals to track their emotional health, access tools
//                 for mental well-being, and find the support they need to thrive.
//               </p>
//             </section>

//             {/* Solving Societal Problems */}
//             <section className="mb-16">
//               <h2 className="text-4xl font-extrabold text-teal-700 mb-8 text-center">
//                 Making a Difference
//               </h2>
//               <p className="text-lg text-gray-700 leading-relaxed text-center max-w-4xl mx-auto">
//                 In today’s fast-paced world, stress and mental health challenges are
//                 prevalent. Our platform offers tools like mood tracking, breathing
//                 exercises, and community support to encourage proactive mental
//                 health management and reduce stigma.
//               </p>
//             </section>

//             {/* Features Overview */}
//             <section>
//               <h2 className="text-4xl font-extrabold text-teal-700 mb-8 text-center">
//                 Explore Our Features
//               </h2>
//               <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 list-none text-center">
//                 {[
//                   {
//                     title: "Mood Tracker",
//                     description: "Track your daily emotions to identify patterns.",
//                   },
//                   {
//                     title: "Sleep Tracker",
//                     description: "Monitor your sleep for improved health.",
//                   },
//                   {
//                     title: "Daily Journal",
//                     description: "Reflect and record your thoughts and experiences.",
//                   },
//                   {
//                     title: "Community",
//                     description: "Connect with others on their mental health journey.",
//                   },
//                   {
//                     title: "Sentiment Analysis",
//                     description: "Get insights into your emotions with AI tools.",
//                   },
//                   {
//                     title: "Breathing Exercises",
//                     description: "Manage stress with guided breathing techniques.",
//                   },
//                   {
//                     title: "Blogs/Articles",
//                     description:
//                       "Access mental health content for learning and support.",
//                   },
//                   {
//                     title: "Mood-Based Playlists",
//                     description:
//                       "Listen to playlists tailored to your emotional state.",
//                   },
//                   {
//                     title: "Progress Tracker",
//                     description: "Stay motivated with personalized progress tracking.",
//                   },
//                 ].map((feature, index) => (
//                   <li
//                     key={index}
//                     className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-all"
//                   >
//                     <h3 className="text-xl font-semibold text-teal-600 mb-2">
//                       {feature.title}
//                     </h3>
//                     <p className="text-gray-700 text-sm">{feature.description}</p>
//                   </li>
//                 ))}
//               </ul>
//             </section>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AboutPage;


import { useState } from "react";
import Header from "../components/Header.jsx";
import SideButtons from "../components/SideButtons.jsx";

type Developer = {
  name: string;
  role: string;
  description: string;
};

type Feature = {
  title: string;
  description: string;
};

const AboutPage = () => {
  const [isExpanded, setIsExpanded] = useState(true); // Track sidebar state

  const developers: Developer[] = [
    {
      name: "Alfey Sani",
      role: "Product Manager & Frontend Developer",
      description:
        "Alfey combines strong UI design skills with product management expertise to ensure the platform meets user needs effectively.",
    },
    {
      name: "Faiza Maliat",
      role: "Frontend and QA Developer",
      description:
        "Faiza focuses on creating seamless user interfaces and conducting quality assurance to ensure the platform runs smoothly.",
    },
    {
      name: "Namisa Najah",
      role: "Backend Developer",
      description:
        "Namisa Najah is a jack of all trades. She focuses on the backend more.",
    },
    {
      name: "Md H R Alif",
      role: "Backend Developer",
      description:
        "Alif specializes in backend development, optimizing system performance and database efficiency.",
    },
  ];

  const features: Feature[] = [
    { title: "Mood Tracker", description: "Track your daily emotions to identify patterns." },
    { title: "Sleep Tracker", description: "Monitor your sleep for improved health." },
    { title: "Daily Journal", description: "Reflect and record your thoughts and experiences." },
    { title: "Community", description: "Connect with others on their mental health journey." },
    { title: "Sentiment Analysis", description: "Get insights into your emotions with AI tools." },
    { title: "Breathing Exercises", description: "Manage stress with guided breathing techniques." },
    { title: "Blogs/Articles", description: "Access mental health content for learning and support." },
    { title: "Mood-Based Playlists", description: "Listen to playlists tailored to your emotional state." },
    { title: "Progress Tracker", description: "Stay motivated with personalized progress tracking." },
  ];

  return (
    <div className="flex">
      <SideButtons/>
      <div
        id="main-content"
        className="transition-all duration-300"
        style={{
          marginLeft: isExpanded ? "260px" : "80px",
        }}
      >
        <Header />
        <div className="min-h-screen bg-white">
          {/* Hero Section */}
          <div className="relative overflow-hidden bg-gradient-to-r from-teal-600 to-white text-teal-900 text-white py-16 px-8 rounded-2xl shadow-lg mx-4 mt-6">
            <div className="relative z-10">
              <h1 className="text-5xl font-bold mb-4 leading-tight">
                Welcome to Soulace<br />Your Mental Health Companion
              </h1>
              <p className="text-xl text-teal-50 max-w-2xl">
                A platform dedicated to promoting mental well-being through personalized tools and a supportive community.
              </p>
            </div>
            <div className="absolute right-0 top-0 w-1/3 h-full opacity-10">
              {/* Placeholder for an illustrative icon */}
              <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <circle cx="12" cy="12" r="10" strokeWidth="2" />
              </svg>
            </div>
          </div>

          <div className="container mx-auto py-12 px-8 bg-white bg-opacity-95 rounded-lg ">
            {/* Developers Information */}
            <section className="mb-16">
              <h2 className="text-4xl font-extrabold text-teal-700 mb-8 text-center">
                Meet Our Team
              </h2>
              <p className="text-lg text-gray-700 mb-12 text-center leading-relaxed">
                Our team of passionate developers is dedicated to creating a meaningful platform that prioritizes mental health and empowers individuals.
              </p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
                {developers.map((developer, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-br from-teal-50 to-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all"
                  >
                    <h3 className="text-xl font-semibold text-teal-700 mb-2">
                      {developer.name}
                    </h3>
                    <p className="text-sm font-medium text-teal-600 mb-4">
                      {developer.role}
                    </p>
                    <p className="text-gray-700 text-sm">{developer.description}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Motivation and Goals */}
            <section className="mb-16">
              <h2 className="text-4xl font-extrabold text-teal-700 mb-8 text-center">
                Our Vision & Motivation
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed text-center max-w-4xl mx-auto">
                Mental health is essential for overall well-being, yet it's often stigmatized. Our mission is to create a comprehensive platform that empowers individuals to track their emotional health, access tools for mental well-being, and find the support they need to thrive.
              </p>
            </section>

            {/* What Makes Us Unique */}
            <section className="mb-16">
              <h2 className="text-4xl font-extrabold text-teal-700 mb-8 text-center">
                What Makes Us Unique
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed text-center max-w-4xl mx-auto mb-8">
                In the Bangladeshi context, we address the unique challenges of limited mental health awareness and access to resources. By offering culturally tailored content and tools, we bridge the gap in support systems.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed text-center max-w-4xl mx-auto">
                Globally, we stand out by integrating advanced sentiment analysis, community-driven support, and personalized progress tracking to provide a holistic mental health solution.
              </p>
            </section>

            {/* Features Overview */}
            <section>
              <h2 className="text-4xl font-extrabold text-teal-700 mb-8 text-center">
                Explore Our Features
              </h2>
              <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 list-none text-center">
                {features.map((feature, index) => (
                  <li
                    key={index}
                    className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-all"
                  >
                    <h3 className="text-xl font-semibold text-teal-600 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-700 text-sm">{feature.description}</p>
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
