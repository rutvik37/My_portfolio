import React from "react";
import { FaBug, FaTools, FaCodeBranch, FaGithub, FaJenkins, FaTrello, FaStar } from "react-icons/fa";
import { SiPostman, SiSelenium, SiTestng, SiJunit, SiJira } from "react-icons/si";

const skills = [
  {
    title: "Manual Testing",
    icon: <FaBug className="text-red-500 inline mr-2" />,
    items: ["Test Case Design", "Bug Reporting", "Cross-Browser Testing", "Responsive Testing"]
  },
  {
    title: "Automation Testing",
    icon: <FaTools className="text-green-600 inline mr-2" />,
    items: ["Selenium (Java)", "Playwright (Java)", "TestNG", "JUnit"]
  },
  {
    title: "API Testing & Tools",
    icon: <SiPostman className="text-orange-500 inline mr-2" />,
    items: ["Postman", "REST API Testing"]
  },
  {
    title: "CI/CD & Collaboration",
    icon: <FaCodeBranch className="text-blue-500 inline mr-2" />,
    items: ["Git", "GitHub", "Jenkins", "Jira", "Trello"]
  }
];

const Skills = () => (
  <section className="py-20 px-4 bg-gray-50">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center text-teal-700 mb-12 flex items-center justify-center">
        <FaStar className="text-yellow-500 mr-3" />
        Skills
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        {skills.map((category) => (
          <div key={category.title} className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              {category.icon}
              {category.title}
            </h3>
            <ul className="list-disc ml-5 space-y-2 text-gray-800">
              {category.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
