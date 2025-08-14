// Projects section component
const Projects = () => {
  const projects = [
    {
      title: 'SafeNet Trusted Access (STA)',
      description: 'Led the design and development of STA, a cloud-based access management service that integrates SSO and security. Developed reusable UI components and automated tests to improve efficiency and reliability.',
      tech: ['Angular', 'React.js', 'Redux', 'Electron.js', 'TypeScript', 'Selenium'],
      link: 'https://github.com/yourusername/sta-project-repo'
    },
    {
      title: 'Reverse Proxy & Agent Admin',
      description: 'Designed and developed secure cloud-based access management solutions. Built high-performance front-end components using React.js and Redux, ensuring cross-platform compatibility and seamless API integration.',
      tech: ['Angular', 'React.js', 'Next.js', 'TypeScript', 'Redux', 'CSS Grid'],
      link: 'https://github.com/yourusername/reverse-proxy-project-repo'
    },
    {
      title: 'Aeros UI',
      description: 'Developed and deployed Angular UI components to streamline project workflows. Built a Bootstrap-based UI with interactive data visualizations using Highcharts.js, significantly enhancing user decision-making capabilities.',
      tech: ['React.js', 'Redux', 'RxJS', 'HTML5', 'CSS3', 'Material Design'],
      link: 'https://github.com/yourusername/aeros-ui-project-repo'
    },
    {
      title: 'Smart City & Luminous System',
      description: 'Played a pivotal role in the design and development of applications for government and enterprise projects. Led agile sprint planning and built robust applications using Angular and React.js, contributing to reduced development cycles.',
      tech: ['Angular', 'React.js', 'TypeScript', 'Redux', 'Next.js'],
      link: 'https://github.com/yourusername/smart-city-project-repo'
    },
  ];

  return (
    <section id="projects" className="py-12">
      <h3 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white">My Projects</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg flex flex-col transition-all duration-300 hover:shadow-2xl hover:scale-105">
            <h4 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">{project.title}</h4>
            <p className="text-gray-700 dark:text-gray-300 mb-4 flex-grow">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech, i) => (
                <span key={i} className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-xs font-medium px-2 py-1 rounded">
                  {tech}
                </span>
              ))}
            </div>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="self-start text-blue-500 dark:text-blue-400 font-semibold hover:underline">
              View on GitHub &rarr;
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
