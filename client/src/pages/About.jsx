import React from "react";
import Header from "../components/Header.jsx";

const AboutPage = () => {
  return (
    <div className="container mx-auto p-8 bg-gray-50">
      <Header />

      

      {/* Developers Information */}
      <section className="mb-12">
        <h2 className="text-3xl  font-semibold text-teal-600 mb-4">Our Developers</h2>
        <p className="text-lg text-gray-800 mb-4">
          Our team is made up of passionate developers who are committed to creating a meaningful and effective mental
          health solution. We come from diverse backgrounds but share a common goal: to develop a platform that supports
          mental well-being and helps individuals manage their emotional and psychological health.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300">
            <h3 className="text-2xl font-semibold text-teal-600">Faiza Maliat</h3>
            <p className="text-sm text-gray-600">Full Stack Developer</p>
            <p className="mt-4 text-gray-800">
              Faiza specializes in building scalable web applications and is passionate about improving the digital
              experience for users. She focuses on making the platform intuitive, user-friendly, and reliable.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300">
            <h3 className="text-2xl font-semibold text-teal-600">Alfey Sani</h3>
            <p className="text-sm text-gray-600">Frontend Developer</p>
            <p className="mt-4 text-gray-800">
              Alfey brings a strong background in user interface design and frontend development. His goal is to
              create beautiful and seamless user experiences that help individuals manage their mental health with ease.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300">
            <h3 className="text-2xl font-semibold text-teal-600">Namisa Najah</h3>
            <p className="text-sm text-gray-600">Backend Developer</p>
            <p className="mt-4 text-gray-800">
              Namisa focuses on building the backend systems that power the features of the platform. She is dedicated
              to ensuring the data handling is secure, efficient, and scalable to support a growing user base.
            </p>
          </div>
        </div>
      </section>

      {/* Project Motivation */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-teal-600 mb-4">Our Motivation</h2>
        <p className="text-lg text-gray-800 mb-4">
          Mental health is an essential aspect of overall well-being, yet it is often overlooked or stigmatized. Our
          team came together with the vision to create a comprehensive solution that not only helps users track their
          emotional health but also provides them with the tools and support they need to feel better and live more
          fulfilling lives.
        </p>
        <p className="text-lg text-gray-800">
          Our platform includes a variety of features designed to support mental health in different ways, such as mood
          tracking, sleep tracking, stress relief exercises, and community-based support. Our goal is to empower
          individuals to take control of their mental well-being, monitor their progress, and find comfort and support
          when needed.
        </p>
      </section>

      {/* How This Project Solves Societal Problems */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-teal-600 mb-4">Solving Societal Problems</h2>
        <p className="text-lg text-gray-800 mb-4">
          With rising stress levels, anxiety, and mental health challenges, many individuals struggle to find the right
          resources and support. Our platform provides a safe space for users to track their moods, explore content
          related to mental health, and access tools for improving their well-being, all in one place.
        </p>
        <p className="text-lg text-gray-800 mb-4">
          Features like the mood and sleep tracker allow users to understand their patterns and triggers, while the
          chatbot and joke generator offer emotional support through light-hearted interaction. The progress tracker
          provides a sense of accomplishment, and the breathing exercises help users manage stress and anxiety.
        </p>
        <p className="text-lg text-gray-800">
          Our platform also promotes the importance of community by providing a space for individuals to connect, share
          their experiences, and offer mutual support. Through these combined features, we hope to reduce the stigma
          around mental health and encourage more people to take proactive steps toward improving their emotional
          well-being.
        </p>
      </section>

      {/* Features Overview */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-teal-600 mb-4">Features of Our Mental Health Platform</h2>
        <ul className="list-disc pl-6 text-lg text-gray-800">
          <li><strong>Mood Tracker:</strong> Track your emotions daily to better understand your mood patterns.</li>
          <li><strong>Sleep Tracker:</strong> Monitor your sleep habits and improve your overall well-being.</li>
          <li><strong>Joke Generator:</strong> Lighten your mood with jokes designed to bring a smile to your face.</li>
          <li><strong>Chatbot (Home):</strong> Get immediate support and conversation when you need it the most.</li>
          <li><strong>Community:</strong> Connect with others who understand and support your mental health journey.</li>
          <li><strong>Breathing Exercise:</strong> Practice breathing techniques to help manage stress and anxiety.</li>
          <li><strong>Sleep Map:</strong> Visualize your sleep data to identify patterns and make improvements.</li>
          <li><strong>Mood Map:</strong> Gain insights into your emotional health over time through data visualization.</li>
          <li><strong>Progress Tracker:</strong> Stay motivated by tracking your improvements and mental health journey.</li>
          <li><strong>Blogs/Articles:</strong> Access mental health-related content to learn more and gain support.</li>
          <li><strong>Mood-Based Playlist/Podcast:</strong> Listen to music or podcasts tailored to your emotional state.</li>
        </ul>
      </section>

    </div>
  );
};

export default AboutPage;
