const Hero = () => (
  <section className="bg-gradient-to-b from-gray-900 to-gray-800 text-white flex flex-col justify-center items-center text-center px-4 py-20 min-h-[60vh]">
    <h1 className="text-5xl font-bold mb-4">Yogesh Kumavat</h1>
    <p className="text-xl mb-6">Full Stack Developer (MERN + Laravel)</p>
    <a
      href={`${process.env.PUBLIC_URL}/resume.pdf`}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-teal-500 hover:bg-teal-600 px-6 py-3 rounded text-white transition"
    >
      View Resume
    </a>


  </section>
);

export default Hero;