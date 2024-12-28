import Header from "../components/Header.jsx";

const AboutPage = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-fixed"
    >
      <header className="p-6 shadow-md bg-white bg-opacity-90">
        <Header />
      </header>

      <div className="container mx-auto py-12 px-8 bg-white bg-opacity-90 rounded-lg shadow-lg">
        {/* Developers Information */}
        <section className="mb-12">
          <h2 className="text-4xl font-bold text-teal-600 mb-6 text-center">
            Our Developers
          </h2>
          <p className="text-lg text-gray-800 mb-8 text-center">
            Our team is made up of passionate developers committed to creating
            a meaningful mental health solution. We aim to develop a platform
            that supports mental well-being and empowers individuals to manage
            their emotional and psychological health.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Developer Cards */}
            {[
              
              {
                name: "Alfey Sani",
                role: "Product Manager & Frontend Developer",
                description:
                  "Alfey combines strong UI design skills with product management expertise to ensure the platform meets user needs effectively.",
              },
              {
                name: "Faiza Maliat",
                role: "Frontend Developer & QA Specialist",
                description:
                  "Faiza focuses on creating seamless user interfaces and conducting quality assurance to ensure the platform runs smoothly.",
              },
              {
                name: "Namisa Najah",
                role: "Backend Developer",
                description:
                  "Namisa focuses on building efficient backend systems, ensuring secure and scalable data handling for a growing user base.",
              },
              {
                name: "Md H R Alif",
                role: "Backend Developer",
                description:
                  "Alif specializes in backend development and is dedicated to optimizing system performance and database efficiency.",
              },
            ].map((developer, index) => (
              <div
                key={index}
                className="bg-gradient-to-r from-teal-100 to-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300"
              >
                <h3 className="text-2xl font-bold text-teal-700 mb-2">
                  {developer.name}
                </h3>
                <p className="text-sm text-teal-600 mb-4">{developer.role}</p>
                <p className="text-gray-800">{developer.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Project Motivation */}
        <section className="mb-12">
          <h2 className="text-4xl font-bold text-teal-600 mb-6 text-center">
            Our Motivation
          </h2>
          <p className="text-lg text-gray-800 mb-4">
            Mental health is an essential aspect of overall well-being, yet it
            is often stigmatized. Our vision is to create a comprehensive
            solution that helps users track their emotional health and provides
            tools for mental well-being.
          </p>
          <p className="text-lg text-gray-800">
            Our platform empowers individuals to take control of their mental
            health, monitor progress, and find comfort and support when needed.
          </p>
        </section>

        {/* Solving Societal Problems */}
        <section className="mb-12">
          <h2 className="text-4xl font-bold text-teal-600 mb-6 text-center">
            Solving Societal Problems
          </h2>
          <p className="text-lg text-gray-800 mb-4">
            With rising stress and mental health challenges, our platform
            provides a safe space for users to track their moods, explore mental
            health-related content, and access tools for improving their
            well-being.
          </p>
          <p className="text-lg text-gray-800">
            Features like the mood tracker, breathing exercises, and community
            support aim to reduce the stigma surrounding mental health and
            encourage proactive steps toward emotional well-being.
          </p>
        </section>

        {/* Features Overview */}
        <section className="mb-12">
          <h2 className="text-4xl font-bold text-teal-600 mb-6 text-center">
            Features of Our Mental Health Platform
          </h2>
          <ul className="list-disc pl-6 text-lg text-gray-800 space-y-4">
            <li>
              <strong>Mood Tracker:</strong> Track your emotions daily to
              understand your mood patterns.
            </li>
            <li>
              <strong>Sleep Tracker:</strong> Monitor your sleep habits and
              improve your overall well-being.
            </li>
            <li>
              <strong>Joke Generator:</strong> Lighten your mood with uplifting
              jokes.
            </li>
            <li>
              <strong>Chatbot (Home):</strong> Receive immediate support when
              needed.
            </li>
            <li>
              <strong>Daily Journal:</strong> Record your thoughts, feelings,
              and experiences each day for self-reflection.
            </li>
            <li>
              <strong>Sentiment Analysis:</strong> Get AI-based insights into
              your emotional state by analyzing your journal entries.
            </li>
            <li>
              <strong>Community:</strong> Connect with others who understand
              and support your mental health journey.
            </li>
            <li>
              <strong>Breathing Exercise:</strong> Practice breathing techniques
              to manage stress.
            </li>
            <li>
              <strong>Sleep Map:</strong> Visualize your sleep data to identify
              patterns.
            </li>
            <li>
              <strong>Mood Map:</strong> Gain insights into your emotional
              health over time.
            </li>
            <li>
              <strong>Progress Tracker:</strong> Stay motivated by tracking
              improvements.
            </li>
            <li>
              <strong>Blogs/Articles:</strong> Access mental health content to
              learn and find support.
            </li>
            <li>
              <strong>Mood-Based Playlist/Podcast:</strong> Listen to content
              tailored to your emotional state.
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;
