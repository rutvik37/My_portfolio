import React from "react";
import { Typewriter } from "react-simple-typewriter";

const projects = [
  {
    title: "Form Submission Automation",
    stack: "Selenium + TestNG + Java",
    description:
      "Automated a complete form submission and admin panel verification flow, including pagination handling and dynamic data validation.",
  },
  {
    title: "E-commerce Testing Project",
    stack: "Playwright (Java) + Manual Testing",
    description:
      "Performed manual and automated testing of login, cart, and checkout functionalities. Found and reported over 15 bugs using structured bug reports.",
  },
  {
    title: "API Testing with Postman",
    stack: "Postman + REST APIs",
    description:
      "Created test collections for GET, POST, PUT, DELETE APIs. Validated response codes, payloads, and performance for a sample web service.",
  },
  {
    title: "UI Validation & Regression Testing",
    stack: "Manual Testing + DevTools + Bug Reporting",
    description:
      "Tested responsive UI across browsers using manual test cases. Reported bugs with screenshots and clear reproduction steps using a test management tool.",
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
            <h3 className="text-xl font-semibold mb-2 text-teal-700">
              {project.title}
            </h3>
            <p className="text-sm font-medium text-gray-500 mb-2">
              {project.stack}
            </p>
            <p className="text-gray-700 text-sm">{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
