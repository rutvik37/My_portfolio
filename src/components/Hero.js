import React from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-teal-600 to-blue-700 text-white py-24 px-4 shadow-lg">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h1
          className="text-4xl sm:text-5xl font-bold leading-tight mb-4"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          👋 Hi, I'm{" "}
      
<motion.span
  className="text-yellow-300 inline-block"
  initial={{ width: 0, opacity: 0 }}
  animate={{ width: "auto", opacity: 1 }}
  transition={{ delay: 0.5, duration: 1.5, ease: "easeOut" }}
  style={{ overflow: "hidden", whiteSpace: "nowrap", display: "inline-block" }}
>
  Rutvik Jasani
</motion.span>




        </motion.h1>

        <motion.p
          className="text-lg sm:text-xl font-medium text-white/90 mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          A <span className="font-semibold text-white">Manual + Automation Software Tester</span> passionate about delivering bug-free, high-quality software experiences.
        </motion.p>

        <motion.p
          className="text-lg sm:text-xl text-white/90 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <span className="text-white font-bold">
            <Typewriter
              words={[
                "Skilled in UI validation, edge case testing, and bug reporting.",
                "Building automation with Playwright, Selenium, and TestNG.",
                "Focused on quality, performance, and user experience."
              ]}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={40}
              delaySpeed={1800}
            />
          </span>
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <a
            href="#projects"
            className="bg-white text-teal-700 font-semibold px-6 py-3 rounded-md shadow hover:bg-gray-100 transition duration-300"
          >
            🚀 View Projects
          </a>

          <a
            href={`${process.env.PUBLIC_URL}/resume.pdf`}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-white text-white px-6 py-3 rounded-md hover:bg-white hover:text-teal-700 transition duration-300"
          >
            📝 View Resume
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
