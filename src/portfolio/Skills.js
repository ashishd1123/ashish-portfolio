// Skills section component
const Skills = () => {
  const skills = [
    { name: 'Angular', category: 'Frameworks' },
    { name: 'React', category: 'Frameworks' },
    { name: 'Next.js', category: 'Frameworks' },
    { name: 'TypeScript', category: 'Languages' },
    { name: 'JavaScript', category: 'Languages' },
    { name: 'Node.js', category: 'Languages' },
    { name: 'Redux', category: 'State Management' },
    { name: 'NgRx', category: 'State Management' },
    { name: 'HTML5', category: 'Languages' },
    { name: 'CSS3', category: 'Languages' },
    { name: 'Tailwind CSS', category: 'Front-End Tools' },
    { name: 'Bootstrap', category: 'Front-End Tools' },
    { name: 'MongoDB', category: 'Databases' },
    { name: 'MySQL', category: 'Databases' },
    { name: 'Git', category: 'Version Control' },
    { name: 'GitHub Actions', category: 'CI/CD' },
    { name: 'AWS', category: 'Cloud Platforms' },
  ];

  const groupedSkills = skills.reduce((acc, skill) => {
    (acc[skill.category] = acc[skill.category] || []).push(skill.name);
    return acc;
  }, {});

  return (
    <section id="skills" className="py-12">
      <h3 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white">Technical Skills</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {Object.entries(groupedSkills).map(([category, skillList], index) => (
          <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg transition-transform transform hover:scale-105 duration-200">
            <h4 className="text-xl font-semibold mb-4 text-blue-600 dark:text-blue-400">{category}</h4>
            <div className="flex flex-wrap gap-2">
              {skillList.map((skill, i) => (
                <span key={i} className="bg-blue-100 dark:bg-blue-800 text-blue-800 dark:text-blue-100 text-sm font-medium px-3 py-1 rounded-full">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
