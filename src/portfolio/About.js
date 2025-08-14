import React from 'react';

// About section component
const About = () => {
  return (
    <section id="about" className="py-12">
      <h3 className="text-3xl font-bold text-center mb-6 text-gray-900 dark:text-white">About Me</h3>
      <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          As a Senior Software Engineer with a passion for building innovative and scalable applications, I bring over 8 years of experience to the table. I'm highly proficient in a wide range of technologies, with a strong focus on front-end development using frameworks like **Angular, React, and Next.js**. My expertise also extends to back-end technologies like **Node.js** and various databases, allowing me to build robust, full-stack solutions. Throughout my career, I've had the opportunity to lead cross-functional teams, mentor junior developers, and drive agile project execution, always with the goal of delivering high-quality software that exceeds business objectives.
        </p>
      </div>
    </section>
  );
};

export default About;