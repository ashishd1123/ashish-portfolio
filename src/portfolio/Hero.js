// Hero section component
const Hero = () => {
  return (
    <section className="text-center py-20 flex flex-col items-center">
      <div className="relative w-36 h-36 mx-auto mb-6">
        <img
          src="https://placehold.co/150x150/2563EB/ffffff?text=AD"
          alt="Ashish Dubey"
          className="w-full h-full rounded-full object-cover border-4 border-blue-500 dark:border-blue-400 transform transition-transform duration-500 hover:scale-110"
        />
        <span className="absolute bottom-2 right-2 w-4 h-4 bg-green-500 rounded-full border-2 border-white dark:border-gray-900 animate-pulse"></span>
      </div>
      <h2 className="text-5xl md:text-6xl font-extrabold mb-2 text-gray-900 dark:text-white">Ashish Dubey</h2>
      <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-4">
        Senior Software Engineer
      </p>
      <p className="max-w-2xl text-md md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
        Senior Software Engineer with 8 years of expertise in front-end development, specializing in Angular, TypeScript, JavaScript, React.js, Next.js, Electron, and Node.js. Proven ability to design and deploy scalable web and desktop applications. Skilled in leading cross-functional teams, automating workflows, and delivering high-quality software aligned with business goals.
      </p>
      <div className="flex justify-center space-x-4 mt-6">
        <a href="https://linkedin.com/in/ashish-dubey-707767107" target="_blank" rel="noopener noreferrer" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-full transition-all duration-200 shadow-lg hover:shadow-xl">
          LinkedIn
        </a>
        <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-3 px-6 rounded-full transition-all duration-200 shadow-lg hover:shadow-xl dark:bg-gray-200 dark:hover:bg-gray-300 dark:text-gray-900">
          GitHub
        </a>
        <a href="mailto:madtechom@gmail.com" className="bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-900 dark:text-white font-bold py-3 px-6 rounded-full transition-all duration-200 shadow-lg hover:shadow-xl">
          Contact Me
        </a>
      </div>
    </section>
  );
};

export default Hero;
