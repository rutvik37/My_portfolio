const skills = [
  "Manual Testing", "Test Case Design", "Bug Reporting",
  "Selenium (Java)", "Playwright (Java)", "TestNG", "JUnit",
  "Postman", "REST API Testing", 
  "Git", "GitHub", "Jenkins (CI/CD)",
  "Responsive Testing", "Cross-Browser Testing"
];

const Skills = () => (
  <section className="py-20 bg-white px-4 max-w-5xl mx-auto">
    <h2 className="text-3xl font-semibold mb-8 text-center">Skills</h2>
    <div className="flex flex-wrap justify-center gap-4">
      {skills.map(skill => (
        <span key={skill} className="px-4 py-2 bg-gray-100 border rounded text-sm font-medium">
          {skill}
        </span>
      ))}
    </div>
  </section>
);

export default Skills;
