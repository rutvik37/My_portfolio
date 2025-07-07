import React from "react";
import { Typewriter } from "react-simple-typewriter";

const projects = [
  {
    title: "Live E-commerce App (Flowers)",
    stack: "Node.js + Laravel + React Native",
    description:
      "Built APIs using Node.js and admin panel in Laravel. App interface handled by React Native developer.",
  },
  {
    title: "MSc IT Project – E-commerce Admin + App",
    stack: "Laravel + Flutter",
    description:
      "Created Laravel admin to manage orders/products, and Flutter app for user side.",
  },
  {
    title: "BSc IT Project – IoT Radar System",
    stack: "IoT + ThingSpeak",
    description:
      "Designed a radar-based obstacle detection system with cloud data visualization.",
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
