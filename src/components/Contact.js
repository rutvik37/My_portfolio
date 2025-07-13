import React from "react";

const Contact = () => (
  <section className="py-20 px-4 max-w-4xl mx-auto text-center">
    <h2 className="text-3xl font-bold mb-8 text-teal-700">📬 Contact</h2>

   <div className="mb-12 px-6">
  <p className="text-2xl sm:text-3xl font-bold text-gray-800 leading-relaxed tracking-wide">
    <span className="inline-block bg-white px-4 py-2 rounded-lg shadow-md border border-teal-100">
      Looking for a <span className="text-teal-600">Manual + Automation Tester</span>?
    </span>
  </p>
  <p className="mt-4 text-lg sm:text-xl text-gray-700 font-medium">
    Let’s collaborate and elevate your <span className="text-teal-700 font-semibold">QA goals</span> together.
  </p>
</div>


    {/* Contact Box */}
    <div className="bg-white shadow-lg rounded-lg p-8 border border-gray-200">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-left text-gray-800 text-lg">
        <div>
          <p className="mb-6">
            <span className="font-semibold">📧 Email:</span><br />
            <a
              className="text-teal-600 hover:underline break-all"
              href="mailto:rutvikjasani2706@gmail.com"
            >
              rutvikjasani2706@gmail.com
            </a>
          </p>

          <p className="mb-6">
            <span className="font-semibold">📱 Phone:</span><br />
            <a className="text-teal-600 hover:underline" href="tel:+918200124611">
              +91-8200124611
            </a>
          </p>
        </div>

        <div>
          <p className="mb-6">
            <span className="font-semibold">💼 LinkedIn:</span><br />
            <a
              className="text-teal-600 hover:underline break-all"
              href="https://www.linkedin.com/in/rutvik-jasani-602224242"
              target="_blank"
              rel="noreferrer"
            >
              linkedin.com/in/rutvik-jasani-602224242
            </a>
          </p>

          <p className="mb-6">
            <span className="font-semibold">💻 GitHub:</span><br />
            <a
              className="text-teal-600 hover:underline break-all"
              href="https://github.com/rutvik37"
              target="_blank"
              rel="noreferrer"
            >
              github.com/rutvik37
            </a>
          </p>
        </div>
      </div>
    </div>

    {/* Resume Button */}
    <div className="mt-12">
      <a
        href={`${process.env.PUBLIC_URL}/resume.pdf`}
        download
        className="inline-block bg-teal-600 text-white font-medium px-6 py-3 rounded-md shadow hover:bg-teal-700 transition duration-300 text-lg"
      >
        📄 Download Resume
      </a>
    </div>
  </section>
);

export default Contact;
