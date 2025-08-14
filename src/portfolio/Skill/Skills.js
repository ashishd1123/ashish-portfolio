import SkillIcon from "./SkillIcon";

const Skills = () => {
  const skills = {
    frontend: [
      {
        name: "ReactJS",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      },
      {
        name: "Next.js",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
      },
      {
        name: "JavaScript",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      },
      {
        name: "TypeScript",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      },
      {
        name: "HTML5",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      },
      {
        name: "CSS3",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      },
      {
        name: "TailwindCSS",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
      },
    ],
    backend: [
      {
        name: "Node.js",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      },
      {
        name: "Express.js",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
      },
      {
        name: "Python",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      },
      {
        name: "MongoDB",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      },
    ],
    tools: [
      {
        name: "Git",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
      },
      {
        name: "Figma",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
      },
      {
        name: "Docker",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
      },
    ],
  };

  return (
    <section
      id="skills"
      className="py-24 sm:py-32 relative bg-slate-800 text-white overflow-hidden"
    >
      <div className="container mx-auto text-center mb-12 px-4">
        <div style={{ opacity: 1, transform: "none" }}>
          <div class="inline-block">
            <div class="relative px-3 py-1 text-sm font-medium rounded-full bg-gradient-to-r from-teal-200/65 via-cyan-300/65 to-blue-400/65 backdrop-blur-sm border border-border mb-2">
              <span class="relative z-10 text-foreground/80 text-gray-100">
                Technologies & Expertise
              </span>
              <span class="absolute inset-0 rounded-full bg-gradient-to-r from-teal-400/20 via-cyan-500/20 to-blue-600/20 animate-pulse"></span>
            </div>
          </div>
        </div>
        <h2
          className="text-4xl md:text-5xl font-bold text-white"
          style={{ opacity: 1, transform: "none" }}
        >
          My Skills
        </h2>
        <div
          className="w-24 h-1.5 bg-gradient-to-r from-teal-400 via-cyan-500 to-blue-600 rounded-full mx-auto mt-2"
          style={{ opacity: 1, transform: "none" }}
        ></div>
      </div>
      <div className="container mx-auto grid lg:grid-cols-3 gap-8 px-4">
        <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700">
          <h3 className="text-2xl font-bold text-center mb-6">
            Frontend Development
          </h3>
          <div className="grid grid-cols-3 sm:grid-cols-4 gap-6">
            {skills.frontend.map((s) => (
              <SkillIcon key={s.name} {...s} />
            ))}
          </div>
        </div>
        <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700">
          <h3 className="text-2xl font-bold text-center mb-6">
            Backend & Database
          </h3>
          <div className="grid grid-cols-3 sm:grid-cols-4 gap-6">
            {skills.backend.map((s) => (
              <SkillIcon key={s.name} {...s} />
            ))}
          </div>
        </div>
        <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700">
          <h3 className="text-2xl font-bold text-center mb-6">
            Tools & Methodologies
          </h3>
          <div className="grid grid-cols-3 sm:grid-cols-4 gap-6">
            {skills.tools.map((s) => (
              <SkillIcon key={s.name} {...s} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
