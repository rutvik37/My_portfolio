import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { Link } from "react-router-dom";
 

const projects = [
  {
    id:1,
    title: "Form Submission Automation",
    stack: "Selenium + TestNG + Java",
    description:
      "Automated a complete form submission and admin panel verification flow, including pagination handling and dynamic data validation.",
  },
  {
    id:2, 
    title: "E-commerce Testing Project",
    stack: "Playwright (Java) + Manual Testing",
    description:
      "Performed manual and automated testing of login, cart, and checkout functionalities. Found and reported over 15 bugs using structured bug reports.",
  },
  {
    id:3,
    title: "API Testing with Postman",
    stack: "Postman + REST APIs",
    description:
      "Created test collections for GET, POST, PUT, DELETE APIs. Validated response codes, payloads, and performance for a sample web service.",
  },
 {
  id:4,
  title: "Posiv – Mobile + Web QA (Manual & Automation)",
  stack: "Android/iOS Manual Testing + Playwright Java Automation",
  description:
    "Performed end-to-end testing of Posiv, a Flutter-based social media app, across multiple pre-release versions on Android and iOS. Validated user flows for Directory & Professional roles. Built Playwright Java automation scripts for modules like Contact Us, Join Waitlist, and Profile, ensuring form submissions were accurately reflected in the admin panel.",
},


];

const Projects = () => (
  <section id="projects" className="py-20 px-4 bg-gray-50">
    <div className="max-w-5xl mx-auto text-center">
      <h2 className="text-3xl font-bold mb-10 text-gray-800">Projects</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md p-6 text-left border hover:shadow-lg transition duration-300"
          >
<Link
            to={`/project/${project.id}`}
            key={project.id}
            className="bg-white rounded-2xl border p-6 shadow-sm hover:shadow-lg transition duration-300 text-left block hover:bg-gray-50"
          >
            <h3 className="text-xl font-semibold mb-2 text-teal-700">
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
