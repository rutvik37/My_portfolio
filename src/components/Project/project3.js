import React from "react";
import { useNavigate } from "react-router-dom";

const Project3 = () => {
  const navigate = useNavigate();

  const handleBackToProjects = () => {
    navigate("/My_portfolio");
    setTimeout(() => {
      const section = document.getElementById("projects");
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 px-6 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl md:text-3xl font-bold mb-10 text-teal-700 whitespace-nowrap">
          🏫 HBL – Home Based Learning (Full Cycle QA)
        </h1>

        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-1">🔖 Project Type</h2>
          <p className="text-gray-700 mt-2">
            Educational Platform with 2 Native Apps (Tutor + Student/Parent), Admin Panel & Website
          </p>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-1">📝 Role</h2>
          <p className="text-gray-700 mt-2">Manual QA Engineer</p>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-1">🧠 Description</h2>
          <p className="text-gray-700 mt-2">
            HBL (Home Based Learning) is an educational ecosystem with Android & iOS apps for Tutors and Students/Parents, along with a complete website and admin panel. The platform provides communication and scheduling features, including video/audio calling powered by Agora.
          </p>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-1">🧪 QA Approach</h2>
          <ul className="list-disc ml-6 text-gray-700 mt-2 space-y-1">
            <li>Executed testing in sprints — starting from prototypes to 50% API-integrated builds to full builds.</li>
            <li>Manually tested all flows across apps (Android & iOS), admin panel, and website.</li>
            <li>Validated synchronization between website and mobile apps for real-time updates.</li>
          </ul>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-1">🎯 Key QA Focus Areas</h2>
          <ul className="list-disc ml-6 text-gray-700 mt-2 space-y-1">
            <li>🧩 Multiple login roles: Student, Parent, Tutor (Web + App).</li>
            <li>📹 Deep testing of Agora integration — video/audio calling for Student–Tutor and Parent–Tutor.</li>
            <li>🔄 Data sync between app and web across sessions, roles, and devices.</li>
            <li>🔐 Role-based access, permissions, and communication flows.</li>
            <li>📅 Calendar scheduling, session tracking, and feedback validations.</li>
          </ul>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-1">🚧 QA Challenges</h2>
          <ul className="list-disc ml-6 text-gray-700 mt-2 space-y-1">
            <li>High volume of test cases due to multiple user types across platforms.</li>
            <li>Scenario-based testing for Agora calls including call drop, rejoin, mute/unmute, and call quality.</li>
            <li>Validating functionality parity across apps and website.</li>
          </ul>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-1">🧰 Tools & Tech Used</h2>
          <ul className="list-disc ml-6 text-gray-700 mt-2 space-y-1">
            <li><strong>Platforms:</strong> Android, iOS, Web (Chrome, Safari, Firefox)</li>
            <li><strong>Manual QA Tools:</strong> Excel, Trello, Chrome DevTools</li>
            <li><strong>Third-Party:</strong> Agora for video/audio calling</li>
          </ul>
        </div>

        <div className="mt-10 flex flex-col items-start gap-3">
          <a
            href="https://github.com/rutvik37"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-teal-600 text-white font-semibold px-6 py-3 rounded-md shadow hover:bg-teal-700 transition duration-300"
          >
            🔗 View Project on GitHub
          </a>

          <button
            onClick={handleBackToProjects}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-md backdrop-blur-md bg-white/40 text-sm font-medium text-gray-800 border border-teal-400 hover:bg-white/60 transition duration-300"
          >
            <span className="text-purple-600">←</span>
            Back to Projects
          </button>
        </div>
      </div>
    </div>
  );
};

export default Project3;
