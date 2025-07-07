const projects = [
  {
    title: "Live E-commerce App (Flowers Domain)",
    stack: "Node.js (API) + Laravel (Admin Panel) + React Native (Frontend)",
    description:
      "Contributed to a production-level flower e-commerce platform. Developed backend APIs in Node.js and built a Laravel-based admin panel for product, order, and user management. Collaborated with a React Native developer for frontend integration.",
    link: "#"
  },
  {
    title: "Master’s Project – E-commerce Admin + App",
    stack: "Laravel (Admin Panel) + Flutter (Mobile App)",
    description:
      "Built a fully functional e-commerce admin panel in Laravel to manage categories, products, orders, and users. Developed a Flutter-based customer app with cart, authentication, and order tracking.",
    link: "#"
  },
  {
    title: "Bachelor’s Project – IoT-Based Radar System",
    stack: "IoT Hardware + ThinkSpeak Cloud + Embedded Systems",
    description:
      "Developed an IoT-enabled radar system to detect and transmit object location data. Used ThinkSpeak cloud for real-time data collection and visualization. Designed and integrated embedded systems for sensor communication.",
    link: "#"
  }
];

const Projects = () => (
  <section className="py-20 px-4 bg-gray-50 max-w-6xl mx-auto">
    <h2 className="text-3xl font-semibold text-center mb-10">Projects</h2>
    <div className="grid md:grid-cols-3 gap-6">
      {projects.map((project, idx) => (
        <div key={idx} className="bg-white p-6 rounded shadow">
          <h3 className="text-xl font-bold mb-2">{project.title}</h3>
          <p className="mb-4">{project.description}</p>
          {/* <a
            href={project.link}
            target="_blank"
            className="text-teal-600 hover:underline"
            rel="noreferrer"
          >
            View details →
          </a> */}
        </div>
      ))}
    </div>
  </section>
);
export default Projects;