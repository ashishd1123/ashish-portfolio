// Contact section component
const Contact = () => {
  return (
    <section id="contact" className="py-12">
      <h3 className="text-3xl font-bold text-center mb-6 text-gray-900 dark:text-white">Contact Me</h3>
      <div className="max-w-xl mx-auto bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
        <p className="text-center text-lg mb-6 text-gray-700 dark:text-gray-300">
          I'm always open to new opportunities and collaborations. Feel free to reach out!
        </p>
        <div className="space-y-4">
          <div className="flex items-center space-x-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail text-blue-500"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
            <a href="mailto:madtechom@gmail.com" className="text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400">madtechom@gmail.com</a>
          </div>
          <div className="flex items-center space-x-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-phone text-blue-500"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            <p className="text-gray-700 dark:text-gray-300">+918737980888</p>
          </div>
          <div className="flex items-center space-x-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin text-blue-500"><path d="M16 8a6 6 0 0 0-6-6H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a6 6 0 0 0 6-6z"/><path d="M12 12v-2"/><path d="M12 16v-2"/></svg>
            <a href="https://linkedin.com/in/ashish-dubey-707767107" target="_blank" rel="noopener noreferrer" className="text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400">linkedin.com/in/ashish-dubey-707767107</a>
          </div>
          <div className="flex items-center space-x-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github text-blue-500"><path d="M15 22s-4-4-6-4c-2 0-6 4-6 4a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h2a2 2 0 0 1 2-2V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v12a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-2"/><path d="M9 18a6 6 0 0 0-4-10V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v4a6 6 0 0 0-4 10z"/><path d="M15 18a6 6 0 0 1 4-10V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v4a6 6 0 0 1 4 10z"/></svg>
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400">github.com/yourusername</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
