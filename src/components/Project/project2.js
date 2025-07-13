import React from "react";
import { useNavigate } from "react-router-dom";

const Project2 = () => {
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
          🏠 Property Possible – Real Estate QA (Android, iOS, Admin Panel)
        </h1>

        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-1">🔖 Project Type</h2>
          <p className="text-gray-700 mt-2">
            Native Real Estate Applications – Android, iOS (Customer & Provider Apps), Admin Panel
          </p>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-1">📝 Role</h2>
          <p className="text-gray-700 mt-2">Manual QA Engineer</p>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-1">🔍 Description</h2>
          <p className="text-gray-700 mt-2">
            Property Possible is a full-fledged real estate platform used widely across India.
            The product includes separate Android and iOS native applications for customers and service providers,
            plus a centralized admin panel for backend management and moderation.
          </p>
          <p className="text-gray-700 mt-2">
            Users can browse, filter, and book properties, while service providers can list rentals and sales.
            Admins manage categories, listings, user disputes, and payment records.
          </p>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-1">📱 App Testing Scope</h2>
          <ul className="list-disc ml-6 text-gray-700 mt-2 space-y-1">
            <li>Tested complex flows: property booking, location-based filtering, and messaging system.</li>
            <li>Conducted smoke testing on each new build before starting sprint validation.</li>
            <li>Validated geolocation APIs, push notifications, and pre-book scheduling flow.</li>
            <li>Covered payment gateway validation including UPI and credit card edge cases.</li>
            <li>Performed in-depth regression testing for critical flows with every deployment.</li>
          </ul>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-1">🛠️ Admin Panel QA</h2>
          <ul className="list-disc ml-6 text-gray-700 mt-2 space-y-1">
            <li>Verified moderation, property approval, status changes, and content management system (CMS) modules.</li>
            <li>Cross-validated customer-reported issues using audit logs and backend records.</li>
            <li>Checked data sync and business logic rules between apps and admin portal.</li>
          </ul>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-1">🌐 Tech & Tools</h2>
          <ul className="list-disc ml-6 text-gray-700 mt-2 space-y-1">
            <li><strong>Devices:</strong> Android, iOS</li>
            <li><strong>Tools:</strong> Trello, Postman, JIRA</li>
            <li><strong>Testing Types:</strong> Functional, Regression, UI/UX, Location & Device Testing</li>
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

export default Project2;
