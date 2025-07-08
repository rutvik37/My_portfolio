import React from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-teal-600 to-blue-700 text-white py-24 px-4 text-center shadow-md">
      <div className="max-w-3xl mx-auto">
        <motion.h1
          className="text-4xl md:text-5xl font-bold leading-tight mb-2"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Hi, I'm Rutvik Jasani
        </motion.h1>

        <motion.p
          className="text-base md:text-lg text-white/90 mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          A detail-oriented Software Tester with a passion for clean UI, bug tracking,
          <br className="hidden sm:inline" />
          and automation-first testing.
        </motion.p>

        <motion.p
          className="text-lg md:text-xl mb-6 text-white/90"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          I'm a{" "}
          <span className="text-white font-bold">
            <Typewriter
              words={[
                "Software Tester with strong manual testing expertise.",
                "Confident in automation scripting and growing in test automation.",
                "Passionate about improving quality through test automation."
              ]}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </span>
        </motion.p>

        {/* ✅ STEP 2: Test Coverage & QA Focus Section
        <motion.div
          className="bg-white/10 rounded-xl p-6 mt-8 text-left"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <h2 className="text-xl font-semibold mb-2 text-white">🧪 Test Coverage & QA Focus</h2>
          <ul className="list-disc pl-5 space-y-1 text-sm text-white/90">
            <li>✅ Manual testing done on all UI components and forms.</li>
            <li>✅ Cross-browser validation for Chrome, Firefox, Edge.</li>
            <li>✅ Planning automation with Playwright & Selenium (Java).</li>
            <li>✅ Upcoming unit tests using Jest & React Testing Library.</li>
            <li>✅ Accessibility checks via Lighthouse and Chrome DevTools.</li>
          </ul>
        </motion.div> */}

        <motion.div
          className="flex flex-col sm:flex-row justify-center gap-4 mt-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <a
            href="#projects"
            className="bg-white text-teal-700 font-semibold px-6 py-3 rounded-md shadow hover:bg-gray-100 transition duration-300"
          >
            View Projects
          </a>

          <a
            href={`${process.env.PUBLIC_URL}/resume.pdf`}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-white px-6 py-3 rounded-md hover:bg-white hover:text-teal-700 transition duration-300"
          >
            View Resume
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
