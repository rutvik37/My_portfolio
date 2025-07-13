import React from "react";

const Project4 = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900 px-6 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl md:text-3xl font-bold mb-10 text-teal-700 whitespace-nowrap">
          📱 Posiv – End-to-End QA for Mobile, Web & Admin Panel
        </h1>

        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-1">🔖 Project Type</h2>
          <p className="text-gray-700 mt-2">
            Social Media Platform (Flutter App, Web Portal, Admin Panel)
          </p>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-1">📝 Role</h2>
          <p className="text-gray-700 mt-2">Manual + Automation QA Engineer</p>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-1">🔍 Description</h2>
          <p className="text-gray-700 mt-2">
            Posiv is a Flutter-based cross-platform social app with two user roles: Directories and Professionals.
            I handled manual QA testing for both Android and iOS apps and later implemented automation scripts
            using Playwright (Java) for website and admin panel validation.
          </p>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-1">📲 Manual Testing Coverage</h2>
          <ul className="list-disc ml-6 text-gray-700 mt-2 space-y-1">
            <li>Tested across multiple pre-release builds before production.</li>
            <li>Validated flows for both user types: Directory & Professional.</li>
            <li>Tested dynamic content updates via admin panel control.</li>
            <li>Performed regression, usability, and cross-platform testing (Android + iOS).</li>
            <li>Validated API responses based on UI behavior and feedback loops.</li>
          </ul>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-1">🌐 Web + Admin Panel Testing</h2>
          <ul className="list-disc ml-6 text-gray-700 mt-2 space-y-1">
            <li>Tested modules like Survey, Join Waitlist, Contact Us, and more.</li>
            <li>Checked data consistency between website form submission and admin panel review.</li>
          </ul>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-1">🤖 Automation with Playwright (Java)</h2>
          <p className="text-gray-700 mt-2 mb-2">Automated end-to-end test cases for:</p>
          <ul className="list-disc ml-6 text-gray-700 space-y-1">
            <li>Contact Us</li>
            <li>Dashboard Stats</li>
            <li>Join Waitlist Form</li>
            <li>Notifications Panel</li>
            <li>Profile Update Flow</li>
            <li>Survey Record Submission</li>
          </ul>
          <p className="text-gray-700 mt-2">
            Scripts auto-fill forms with random data and validate admin panel entries, helping detect UI/backend issues from new code changes.
          </p>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-1">🧰 Tools & Tech Used</h2>
          <ul className="list-disc ml-6 text-gray-700 mt-2 space-y-1">
            <li><strong>Manual:</strong> Android/iOS, Chrome DevTools, Excel, Trello</li>
            <li><strong>Automation:</strong> Playwright Java, TestNG, Faker, Maven</li>
            <li><strong>Admin Panel Testing:</strong> Chrome, Firefox (cross-browser)</li>
          </ul>
        </div>

        <div className="mt-10">
          <a
            href="https://github.com/rutvik37"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-teal-600 text-white font-semibold px-6 py-3 rounded-md shadow hover:bg-teal-700 transition duration-300"
          >
            🔗 View Project on GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project4;
