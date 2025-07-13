import React from "react";
import { BriefcaseBusiness, TestTubes, Settings, TrendingUp, Info } from "lucide-react";

const About = () => (
  <section className="py-20 px-6 bg-gray-50 text-center">
    <div className="max-w-4xl mx-auto">
      <h2 className="text-4xl font-bold text-teal-700 mb-8 flex items-center justify-center">
        <Info className="w-7 h-7 text-blue-600 mr-3" />
        About Me
      </h2>

      <p className="text-lg text-gray-700 leading-relaxed mb-6">
        I’m a <strong>Software Tester</strong> with a solid background in <strong>manual testing</strong> and an evolving expertise in <strong>automation testing</strong>. I thrive on identifying edge cases, improving quality, and collaborating with developers to ship reliable, user-friendly features.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-left text-gray-700">
        <div className="flex items-start gap-4">
          <BriefcaseBusiness className="text-indigo-600 mt-1 w-6 h-6" />
          <div>
            <h3 className="font-semibold text-lg text-teal-700">Manual Testing Expertise</h3>
            <p>
              Hands-on testing across Android, iOS, and web apps. Experience includes regression, usability, and cross-platform validation using test cases and exploratory testing.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <TestTubes className="text-purple-600 mt-1 w-6 h-6" />
          <div>
            <h3 className="font-semibold text-lg text-teal-700">Automation Testing Journey</h3>
            <p>
              Working with tools like <strong>Playwright</strong>, <strong>Selenium</strong>, and <strong>TestNG</strong> to automate test flows. Validating backend integrations and UI consistency.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <Settings className="text-amber-600 mt-1 w-6 h-6" />
          <div>
            <h3 className="font-semibold text-lg text-teal-700">Tools & Collaboration</h3>
            <p>
              Skilled in <strong>DevTools</strong>, <strong>Postman</strong>, <strong>Jenkins</strong>, and <strong>Maven</strong>. Experienced in using project tracking tools like <strong>Trello</strong> and <strong>Jira</strong>, along with GitHub and Chrome for daily QA and version control workflows.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <TrendingUp className="text-emerald-600 mt-1 w-6 h-6" />
          <div>
            <h3 className="font-semibold text-lg text-teal-700">Always Learning</h3>
            <p>
              Constantly enhancing my skill set with modern test frameworks, <strong>CI/CD pipelines</strong>, and improving test coverage and reliability in fast-paced environments.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
