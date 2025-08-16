import SkillIcon from "./SkillIcon";
import Ican from "../../Assets/Icons/iconMap";

const Skills = () => {
  const skills = {
    frontend: {
      frameworks: [
        {
          name: "Angular",
          icon: Ican.angular,
        },
        {
          name: "AngularJS",
          icon: Ican.angularjs,
        },
        {
          name: "ReactJS",
          icon: Ican.react,
        },
        {
          name: "Next.js",
          icon: Ican.nextjs,
        },
        {
          name: "Redux",
          icon: Ican.redux,
        },
        {
          name: "NgRx",
          icon: Ican.ngrx,
        },
        {
          name: "RxJS",
          icon: Ican.rxjs,
        },
        {
          name: "jQuery",
          icon: Ican.jquery,
        },
        {
          name: "Bootstrap",
          icon: Ican.bootstrap,
        },
        {
          name: "Material UI",
          icon: Ican.materialui,
        },
        {
          name: "Tailwind CSS",
          icon: Ican.tailwind,
        },
      ],
      languages: [
        {
          name: "TypeScript",
          icon: Ican.typescript,
        },
        {
          name: "JavaScript (ES6+)",
          icon: Ican.javascript,
        },
        {
          name: "HTML5",
          icon: Ican.html,
        },
        {
          name: "CSS3",
          icon: Ican.css,
        },
        {
          name: "Node.js",
          icon: Ican.nodejs,
        },
      ],
      cssTechniques: [
        {
          name: "BEM Methodology",
          icon: Ican.bem,
        },
        {
          name: "CSS Flexbox",
          icon: Ican.flexbox,
        },
        {
          name: "CSS Grid",
          icon: Ican.cssGrid,
        },
        {
          name: "CSS Animations",
          icon: Ican.cssAnimations,
        },
        {
          name: "SASS/SCSS, Less",
          icon: Ican.sass,
        },
      ],
    },
    backendAndDatabase: {
      databases: [
        {
          name: "MongoDB",
          icon: Ican.mongodb,
        },
        {
          name: "MySQL",
          icon: Ican.mysql,
        },
        {
          name: "Firebase",
          icon: Ican.firebase,
        },
      ],
    },
    infrastructure: {
      cloudPlatforms: [
        {
          name: "AWS",
          icon: Ican.aws,
        },
        {
          name: "Azure",
          icon: Ican.azure,
        },
      ],
    },
    tools: {
      buildTools: [
        {
          name: "Webpack",
          icon: Ican.webpack,
        },
        {
          name: "Vite",
          icon: Ican.vite,
        },
        {
          name: "Gulp",
          icon: Ican.gulp,
        },
        {
          name: "Grunt",
          icon: Ican.grunt,
        },
        {
          name: "Rollup",
          icon: Ican.rollup,
        },
        {
          name: "Babel",
          icon: Ican.babel,
        },
        {
          name: "ESLint",
          icon: Ican.eslint,
        },
      ],
      testing: [
        {
          name: "Selenium",
          icon: Ican.selenium,
        },
        {
          name: "Karma",
          icon: Ican.karma,
        },
        {
          name: "Cucumber",
          icon: Ican.cucumber,
        },
        {
          name: "Playwright",
          icon: Ican.playwright,
        },
        {
          name: "Jest",
          icon: Ican.jest,
        },
        {
          name: "Cypress",
          icon: Ican.cypress,
        },
      ],
      ciCd: [
        {
          name: "Jenkins",
          icon: Ican.jenkins,
        },
        {
          name: "GitHub Actions",
          icon: Ican.githubActions,
        },
        {
          name: "GitLab CI/CD",
          icon: Ican.gitlab,
        },
        {
          name: "CircleCI",
          icon: Ican.circleci,
        },
      ],
      versionControl: [
        {
          name: "Git",
          icon: Ican.git,
        },
        {
          name: "GitHub",
          icon: Ican.github,
        },
        {
          name: "GitLab",
          icon: Ican.gitlab,
        },
        {
          name: "Bitbucket",
          icon: Ican.bitbucket,
        },
        {
          name: "SVN",
          icon: Ican.svn,
        },
      ],
      productivity: [
        {
          name: "JIRA",
          icon: Ican.jira,
        },
        {
          name: "Confluence",
          icon: Ican.confluence,
        },
        {
          name: "VS Code",
          icon: Ican.vscode,
        },
        {
          name: "Postman",
          icon: Ican.postman,
        },
        {
          name: "Swagger",
          icon: Ican.swagger,
        },
      ],
    },
    methodologies: [
      {
        name: "Agile",
        icon: Ican.agile,
      },
      {
        name: "Waterfall",
        icon: Ican.waterfall,
      },
      {
        name: "Scrum",
        icon: Ican.scrum,
      },
      {
        name: "Kanban",
        icon: Ican.kanban,
      },
    ],
  };

  return (
    <section
      id="skills"
      className="py-24 sm:py-32 relative bg-gray-800 text-white overflow-hidden"
    >
      <div className="container mx-auto text-center mb-12 px-4">
        <div style={{ opacity: 1, transform: "none" }}>
          <div className="inline-block">
            <div className="relative px-3 py-1 text-sm font-medium rounded-full bg-gradient-to-r from-teal-200/65 via-cyan-300/65 to-blue-400/65 backdrop-blur-sm border border-border mb-2">
              <span className="relative z-10 text-foreground/80 text-gray-100">
                Technologies & Expertise
              </span>
              <span className="absolute inset-0 rounded-full bg-gradient-to-r from-teal-400/20 via-cyan-500/20 to-blue-600/20 animate-pulse"></span>
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
      <div className="container mx-auto grid lg:grid-cols-3 gap-10 px-4">
        <div className="bg-zinc-800/50 p-6 pt-14 rounded-lg border border-slate-700 relative hover:border-teal-400 hover:-translate-y-2 transition-all duration-300">
          <span className="bg-teal-400 text-slate-900 text-xl font-bold px-8 py-1 text-center rounded-full absolute -top-4 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
    Frameworks & Libraries
  </span>
          <div className="grid grid-cols-3 sm:grid-cols-4 gap-6">
            {skills.frontend.frameworks.map((s) => (
              <SkillIcon key={s.name} {...s} />
            ))}
          </div>
        </div>

        <div className="bg-zinc-800/50 p-6 pt-14 rounded-lg border border-slate-700 relative hover:border-teal-400 hover:-translate-y-2 transition-all duration-300">
          {/* <span className="bg-teal-400 text-slate-900 text-xl font-bold px-8 py-1 text-center rounded-full absolute -top-4 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
            Languages & CSS Techniques
          </span> */}
          <h3 className="text-2xl font-bold text-center mb-6">
            Languages & CSS Techniques
          </h3>
          <div className="grid grid-cols-3 sm:grid-cols-4 gap-6">
            {[
              ...skills.frontend.languages,
              ...skills.frontend.cssTechniques,
            ].map((s) => (
              <SkillIcon key={s.name} {...s} />
            ))}
          </div>
        </div>

        {/* Backend & Database */}
        <div className="bg-zinc-800/50 p-6 pt-14 rounded-lg border border-slate-700 relative hover:border-teal-400 hover:-translate-y-2 transition-all duration-300">
          {/* <span className="bg-teal-400 text-slate-900 text-xl font-bold px-8 py-1 text-center rounded-full absolute -top-4 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
            Database & Cloud Platforms
          </span> */}
          <h3 className="text-2xl font-bold text-center mb-6">
            Database & Cloud Platforms
          </h3>
          <div className="grid grid-cols-3 sm:grid-cols-4 gap-6">
            {[
              ...skills.backendAndDatabase.databases,
              ...skills.infrastructure.cloudPlatforms,
            ].map((s) => (
              <SkillIcon key={s.name} {...s} />
            ))}
          </div>
        </div>

        {/* Build Tools And CI/CD Tools */}
        <div className="bg-zinc-800/50 p-6 pt-14 rounded-lg border border-slate-700 relative hover:border-teal-400 hover:-translate-y-2 transition-all duration-300">
          {/* <span className="bg-teal-400 text-slate-900 text-xl font-bold px-8 py-1 text-center rounded-full absolute -top-4 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
            Build Tools & CI/CD Tools
          </span> */}
          <h3 className="text-2xl font-bold text-center mb-6">
            Build Tools & CI/CD Tools
          </h3>
          <div className="grid grid-cols-3 sm:grid-cols-4 gap-6">
            {[...skills.tools.buildTools, ...skills.tools.ciCd].map((s) => (
              <SkillIcon key={s.name} {...s} />
            ))}
          </div>
        </div>

        {/* Testing Tools & Methodologies */}
       <div className="bg-zinc-800/50 p-6 pt-14 rounded-lg border border-slate-700 relative hover:border-teal-400 hover:-translate-y-2 transition-all duration-300">
          {/* <span className="bg-teal-400 text-slate-900 text-xl font-bold px-8 py-1 text-center rounded-full absolute -top-4 left-1/2 transform -translate-x-1/2 whitespace-nowrap">Testing Tools & Methodologies</span> */}
          <h3 className="text-2xl font-bold text-center mb-6">
            Testing Tools & Methodologies
          </h3>
          <div className="grid grid-cols-3 sm:grid-cols-4 gap-6">
            {[...skills.tools.testing, ...skills.methodologies].map((s) => (
              <SkillIcon key={s.name} {...s} />
            ))}
          </div>
        </div>

        {/* Version Controls & Productivity Tools */}
        <div className="bg-zinc-800/50 p-6 pt-14 rounded-lg border border-slate-700 relative hover:border-teal-400 hover:-translate-y-2 transition-all duration-300">
          {/* <span className="bg-teal-400 text-slate-900 text-xl font-bold px-8 py-1 text-center rounded-full absolute -top-4 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
            Version Controls & Productivity Tools
          </span> */}
          <h3 className="text-2xl font-bold text-center mb-6">
            Version Controls & Productivity Tools
          </h3>
          <div className="grid grid-cols-3 sm:grid-cols-4 gap-6">
            {[...skills.tools.versionControl, ...skills.tools.productivity].map(
              (s) => (
                <SkillIcon key={s.name} {...s} />
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
