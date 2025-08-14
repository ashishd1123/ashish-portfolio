import React, { useState, useEffect } from 'react';
import Header from './portfolio/Header';
import Hero from './portfolio/Hero';
import About from './portfolio/About';
import Skills from './portfolio/Skills';
import Projects from './portfolio/Projects';
import Contact from './portfolio/Contact';
import Footer from './portfolio/Footer';

// Main App component that renders all other components
const App = () => {
  // State for dark mode toggle
  const [isDarkMode, setIsDarkMode] = useState(true);

  // Toggle function for dark mode
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Effect to apply dark mode class to the body
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <div className="bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen font-sans transition-colors duration-500">
      <Header toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
      <main className="container mx-auto px-4 py-8">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;