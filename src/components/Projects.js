import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { Link } from "react-router-dom";
import {
  FaProjectDiagram,
  FaRobot,
  FaShoppingCart,
  FaCodeBranch,
  FaMobileAlt,
  FaChalkboardTeacher,
} from "react-icons/fa";
import { SiPostman } from "react-icons/si";

const projects = [
 {
  id: 1,
  title: "JustNews – News Platform QA (Mobile + Panels)",
  icon: <span className="text-xl mr-2">🗞️</span>,
  stack: "Manual Testing + 4 Web Panels + Android/iOS",
  description:
    "Tested full news lifecycle across Android/iOS apps, Reporter/Editor/Supervisor/Admin panels, and website. Covered complex login flows, publishing logic, and multi-role approval pipelines.",
},

{
  id: 2,
  title: "Property Possible – Real Estate Testing",
  icon: <FaMobileAlt className="text-green-600 mr-2" />,
  stack: "Android/iOS Manual QA + Admin Panel",
  description:
    "Performed complex testing across customer and provider apps for property listing, booking, and location-based flows. Regression and geolocation were primary focus across frequent releases.",
},

  {
    id: 3,
    title: "HBL – Home Based Learning QA",
    icon: <FaChalkboardTeacher className="text-amber-600 mr-2" />,
    stack: "Manual Testing + Multi-Platform QA",
    description:
      "Executed multi-phase testing across Tutor & Student/Parent native apps (Android/iOS), website, and admin panel. Focused on Agora-based video/audio call flows, login roles, and full sync validation across platforms.",
  },
  {
    id: 4,
    title: "Posiv – Mobile + Web QA (Manual & Automation)",
    icon: <span className="text-xl mr-2">📱</span>,
    stack: "Android/iOS Manual Testing + Playwright Java Automation",
    description:
      "Performed end-to-end testing of Posiv, a Flutter-based social media app, across multiple pre-release versions on Android and iOS. Validated user flows for Directory & Professional roles. Built Playwright Java automation scripts for modules like Contact Us, Join Waitlist, and Profile, ensuring form submissions were accurately reflected in the admin panel.",
  },
];

const Projects = () => (
  <section id="projects" className="py-20 px-4 bg-gray-50">
    <div className="max-w-5xl mx-auto text-center">
      <h2 className="text-3xl font-bold mb-10 text-gray-800 flex items-center justify-center">
        <FaProjectDiagram className="text-indigo-600 mr-3" />
        Projects
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-white rounded-lg shadow-md p-6 text-left border hover:shadow-lg transition duration-300"
          >
            <Link
              to={`/project/${project.id}`}
              className="bg-white rounded-2xl border p-6 shadow-sm hover:shadow-lg transition duration-300 text-left block hover:bg-gray-50"
            >
              <h3 className="text-xl font-semibold mb-2 text-teal-700 flex items-center">
                {project.icon}
                {project.title}
              </h3>
              <p className="text-sm font-medium text-gray-500 mb-2">
                {project.stack}
              </p>
              <p className="text-gray-700 text-sm">{project.description}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
