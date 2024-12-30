import Header from "../components/Header.jsx";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-teal-100">
      
        <Header />
      

      <div className="container mx-auto py-12 px-8 bg-white bg-opacity-95 rounded-lg shadow-lg">
        {/* Developers Information */}
        <section className="mb-16">
          <h2 className="text-4xl font-extrabold text-teal-700 mb-8 text-center">
            Meet Our Team
          </h2>
          <p className="text-lg text-gray-700 mb-12 text-center leading-relaxed">
            Our team of passionate developers is dedicated to creating a
            meaningful platform that prioritizes mental health and empowers
            individuals to take control of their emotional well-being.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
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
                role: "Testing and Quality Assurance Developer",
                description:
                  "Faiza focuses on creating seamless user interfaces and conducting quality assurance to ensure the platform runs smoothly.",
              },
              {
                name: "Namisa Najah",
                role: "Backend Developer",
                description:
                  "Namisa builds efficient backend systems, ensuring secure and scalable data handling for a growing user base.",
              },
              {
                name: "Md H R Alif",
                role: "Backend Developer",
                description:
                  "Alif specializes in backend development, optimizing system performance and database efficiency.",
              },
            ].map((developer, index) => (
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

        {/* Project Motivation */}
        <section className="mb-16">
          <h2 className="text-4xl font-extrabold text-teal-700 mb-8 text-center">
            Our Vision & Motivation
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed text-center max-w-4xl mx-auto">
            Mental health is essential for overall well-being, yet it's often
            stigmatized. Our mission is to create a comprehensive platform that
            empowers individuals to track their emotional health, access tools
            for mental well-being, and find the support they need to thrive.
          </p>
        </section>

        {/* Solving Societal Problems */}
        <section className="mb-16">
          <h2 className="text-4xl font-extrabold text-teal-700 mb-8 text-center">
            Making a Difference
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed text-center max-w-4xl mx-auto">
            In today’s fast-paced world, stress and mental health challenges are
            prevalent. Our platform offers tools like mood tracking, breathing
            exercises, and community support to encourage proactive mental
            health management and reduce stigma.
          </p>
        </section>

        {/* Features Overview */}
        <section>
          <h2 className="text-4xl font-extrabold text-teal-700 mb-8 text-center">
            Explore Our Features
          </h2>
          <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 list-none text-center">
            {[
              {
                title: "Mood Tracker",
                description: "Track your daily emotions to identify patterns.",
              },
              {
                title: "Sleep Tracker",
                description: "Monitor your sleep for improved health.",
              },
              {
                title: "Daily Journal",
                description: "Reflect and record your thoughts and experiences.",
              },
              {
                title: "Community",
                description: "Connect with others on their mental health journey.",
              },
              {
                title: "Sentiment Analysis",
                description: "Get insights into your emotions with AI tools.",
              },
              {
                title: "Breathing Exercises",
                description: "Manage stress with guided breathing techniques.",
              },
              {
                title: "Blogs/Articles",
                description:
                  "Access mental health content for learning and support.",
              },
              {
                title: "Mood-Based Playlists",
                description:
                  "Listen to playlists tailored to your emotional state.",
              },
              {
                title: "Progress Tracker",
                description: "Stay motivated with personalized progress tracking.",
              },
            ].map((feature, index) => (
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
  );
};

export default AboutPage;
