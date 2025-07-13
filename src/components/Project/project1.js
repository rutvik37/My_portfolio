import React from "react";
import { useNavigate } from "react-router-dom";

const Project1 = () => {
  const navigate = useNavigate();

  const handleBackToProjects = () => {
    navigate("/My_portfolio");

    setTimeout(() => {
      const section = document.getElementById("projects");
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }, 100); // delay allows DOM to mount
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 px-6 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl md:text-3xl font-bold mb-10 text-teal-700 whitespace-nowrap">
          🗞️ JustNews – Full QA for News App, Website & Panels
        </h1>

        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-1">🔖 Project Type</h2>
          <p className="text-gray-700 mt-2">
            News App + Website with Reporter, Editor, Supervisor, and Admin Panels
          </p>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-1">📝 Role</h2>
          <p className="text-gray-700 mt-2">Manual QA Engineer</p>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-1">🔍 Description</h2>
          <p className="text-gray-700 mt-2">
            JustNews is a native news app available for Android and iOS, supported by 4 role-based panels:
            Reporter, Editor, Supervisor, and Admin. The platform allows a structured news approval pipeline. 
            Reporters submit news, editors revise and approve, then supervisors finalize for live publishing. 
            Admins can post directly as well.
          </p>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-1">📱 Features Tested</h2>
          <ul className="list-disc ml-6 text-gray-700 mt-2 space-y-1">
            <li>Guest login and Mobile number login flows</li>
            <li>Role-based access across 4 different panels</li>
            <li>News creation, approval, rejection, and scheduling flows</li>
            <li>App and panel sync for real-time updates and live publishing</li>
            <li>Push notifications and article view tracking</li>
            <li>Cross-browser & device compatibility of web panels</li>
          </ul>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-1">🧪 Testing Approach</h2>
          <p className="text-gray-700 mt-2">
            Tested entire workflows using both mobile and panel interfaces. Validated data integrity between app and panels. 
            Edge case testing around content editing, image upload failures, permission-based restrictions, and time-based publishing logic.
          </p>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-1">🛠️ Tools Used</h2>
          <ul className="list-disc ml-6 text-gray-700 mt-2 space-y-1">
            <li><strong>Manual:</strong> Android/iOS, Browser Testing, Trello</li>
            <li><strong>Tracking:</strong> Screenshots + Excel QA Sheets, Jira (if provided)</li>
            <li><strong>Debugging:</strong> Chrome DevTools, Network Logs</li>
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

export default Project1;
