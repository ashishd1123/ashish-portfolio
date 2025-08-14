import { useState } from "react";

// Header component with dark mode toggle and smooth scrolling
const Header = ({ toggleDarkMode, isDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScroll = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="bg-white dark:bg-gray-900 shadow-lg sticky top-0 z-50 transition-colors duration-500">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Ashish Dubey</h1>
        <div className="flex items-center space-x-4">
          <ul className="hidden md:flex space-x-6">
            <li><a href="#about" onClick={(e) => handleScroll(e, 'about')} className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-200">About</a></li>
            <li><a href="#skills" onClick={(e) => handleScroll(e, 'skills')} className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-200">Skills</a></li>
            <li><a href="#projects" onClick={(e) => handleScroll(e, 'projects')} className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-200">Projects</a></li>
            <li><a href="#contact" onClick={(e) => handleScroll(e, 'contact')} className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-200">Contact</a></li>
          </ul>
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-200"
            aria-label="Toggle dark mode"
          >
            {isDarkMode ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-sun"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-moon"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>
            )}
          </button>
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
            {isMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
            )}
          </button>
        </div>
      </nav>
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-800 shadow-md">
          <ul className="flex flex-col items-center py-4 space-y-2">
            <li><a href="#about" onClick={(e) => handleScroll(e, 'about')} className="block py-2 text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400">About</a></li>
            <li><a href="#skills" onClick={(e) => handleScroll(e, 'skills')} className="block py-2 text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400">Skills</a></li>
            <li><a href="#projects" onClick={(e) => handleScroll(e, 'projects')} className="block py-2 text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400">Projects</a></li>
            <li><a href="#contact" onClick={(e) => handleScroll(e, 'contact')} className="block py-2 text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400">Contact</a></li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;