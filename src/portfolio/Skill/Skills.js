import SkillIcon from "./SkillIcon";
import { skills } from "../../Data/skill_list_data";
import { useTranslation } from "react-i18next";

const Skills = () => {
  const { t } = useTranslation();

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
                {t("ashish_portfolio_skills_subtitle")}
              </span>
              <span className="absolute inset-0 rounded-full bg-gradient-to-r from-teal-400/20 via-cyan-500/20 to-blue-600/20 animate-pulse"></span>
            </div>
          </div>
        </div>
        <h2
          className="text-4xl md:text-5xl font-bold text-white"
          style={{ opacity: 1, transform: "none" }}
        >
          {t("ashish_portfolio_skills_title")}
        </h2>
        <div
          className="w-24 h-1.5 bg-gradient-to-r from-teal-400 via-cyan-500 to-blue-600 rounded-full mx-auto mt-2"
          style={{ opacity: 1, transform: "none" }}
        ></div>
      </div>
      <div className="container mx-auto grid lg:grid-cols-3 gap-10 px-4">
        <div className="bg-zinc-800/50 p-6 pt-14 rounded-lg border border-slate-700 relative hover:border-teal-400 hover:-translate-y-2 transition-all duration-300">
          {/* <span className="bg-teal-400 text-slate-900 text-xl font-bold px-8 py-1 text-center rounded-full absolute -top-4 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
    Frameworks & Libraries
  </span> */}

          <h3 className="text-2xl font-bold text-center mb-6">
            {t("ashish_portfolio_skills_frameworks_libraries")}
          </h3>
          <div className="grid grid-cols-3 sm:grid-cols-4 gap-6">
            {skills.frontend.frameworks.map((s) => (
              <SkillIcon
                key={t(
                  `ashish_portfolio_skills_list.frontend_frameworks.${s.name}`
                )}
                name={t(
                  `ashish_portfolio_skills_list.frontend_frameworks.${s.name}`
                )}
                icon={s.icon}
              />
            ))}
          </div>
        </div>

        <div className="bg-zinc-800/50 p-6 pt-14 rounded-lg border border-slate-700 relative hover:border-teal-400 hover:-translate-y-2 transition-all duration-300">
          {/* <span className="bg-teal-400 text-slate-900 text-xl font-bold px-8 py-1 text-center rounded-full absolute -top-4 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
            Languages & CSS Techniques
          </span> */}
          <h3 className="text-2xl font-bold text-center mb-6">
            {t("ashish_portfolio_skills_languages_css")}
          </h3>
          <div className="grid grid-cols-3 sm:grid-cols-4 gap-6">
            {[
              ...skills.frontend.languages,
              ...skills.frontend.cssTechniques,
            ].map((s) => (
              <SkillIcon key={s.name} name={t(`ashish_portfolio_skills_list.frontend_languages_and_css_techniques.${s.name}`)} icon={s.icon} />
            ))}
          </div>
        </div>

        {/* Backend & Database */}
        <div className="bg-zinc-800/50 p-6 pt-14 rounded-lg border border-slate-700 relative hover:border-teal-400 hover:-translate-y-2 transition-all duration-300">
          {/* <span className="bg-teal-400 text-slate-900 text-xl font-bold px-8 py-1 text-center rounded-full absolute -top-4 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
            Database & Cloud Platforms
          </span> */}
          <h3 className="text-2xl font-bold text-center mb-6">
            {t("ashish_portfolio_skills_database_cloud")}
          </h3>
          <div className="grid grid-cols-3 sm:grid-cols-4 gap-6">
            {[
              ...skills.backendAndDatabase.databases,
              ...skills.infrastructure.cloudPlatforms,
            ].map((s) => (
              <SkillIcon key={s.name} name={t(`ashish_portfolio_skills_list.backend_databases_and_cloud_platforms.${s.name}`)} icon={s.icon} />
            ))}
          </div>
        </div>

        {/* Build Tools And CI/CD Tools */}
        <div className="bg-zinc-800/50 p-6 pt-14 rounded-lg border border-slate-700 relative hover:border-teal-400 hover:-translate-y-2 transition-all duration-300">
          {/* <span className="bg-teal-400 text-slate-900 text-xl font-bold px-8 py-1 text-center rounded-full absolute -top-4 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
            Build Tools & CI/CD Tools
          </span> */}
          <h3 className="text-2xl font-bold text-center mb-6">
            {t("ashish_portfolio_skills_build_tools")}
          </h3>
          <div className="grid grid-cols-3 sm:grid-cols-4 gap-6">
            {[...skills.tools.buildTools, ...skills.tools.ciCd].map((s) => (
              <SkillIcon key={s.name} name={t(`ashish_portfolio_skills_list.tools_build_and_ci_cd_tools.${s.name}`)} icon={s.icon} />
            ))}
          </div>
        </div>

        {/* Testing Tools & Methodologies */}
        <div className="bg-zinc-800/50 p-6 pt-14 rounded-lg border border-slate-700 relative hover:border-teal-400 hover:-translate-y-2 transition-all duration-300">
          {/* <span className="bg-teal-400 text-slate-900 text-xl font-bold px-8 py-1 text-center rounded-full absolute -top-4 left-1/2 transform -translate-x-1/2 whitespace-nowrap">Testing Tools & Methodologies</span> */}
          <h3 className="text-2xl font-bold text-center mb-6">
            {t("ashish_portfolio_skills_testing")}
          </h3>
          <div className="grid grid-cols-3 sm:grid-cols-4 gap-6">
            {[...skills.tools.testing, ...skills.methodologies].map((s) => (
              <SkillIcon key={s.name} name={t(`ashish_portfolio_skills_list.tools_testing_and_methodologies.${s.name}`)} icon={s.icon} />
            ))}
          </div>
        </div>

        {/* Version Controls & Productivity Tools */}
        <div className="bg-zinc-800/50 p-6 pt-14 rounded-lg border border-slate-700 relative hover:border-teal-400 hover:-translate-y-2 transition-all duration-300">
          {/* <span className="bg-teal-400 text-slate-900 text-xl font-bold px-8 py-1 text-center rounded-full absolute -top-4 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
            Version Controls & Productivity Tools
          </span> */}
          <h3 className="text-2xl font-bold text-center mb-6">
            {t("ashish_portfolio_skills_version_control")}
          </h3>
          <div className="grid grid-cols-3 sm:grid-cols-4 gap-6">
            {[...skills.tools.versionControl, ...skills.tools.productivity].map(
              (s) => (
                <SkillIcon key={s.name} name={t(`ashish_portfolio_skills_list.tools_version_control_and_tools_productivity.${s.name}`)} icon={s.icon} />
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
