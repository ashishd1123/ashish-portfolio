import ProjectCard from "./ProjectCard";
import { projectsList } from "../../Data/projects_list_data";
import { useTranslation } from "react-i18next";

const Projects = () => {
  const { t } = useTranslation();
  return (
    <section
      id="projects"
      className="py-24 sm:py-32 relative bg-gray-800 text-white overflow-hidden"
    >
      <div className="container mx-auto text-center mb-12 px-4">
        <div style={{ opacity: 1, transform: "none" }}>
          <div className="inline-block">
            <div className="relative px-3 py-1 text-sm font-medium rounded-full bg-gradient-to-r from-teal-200/65 via-cyan-300/65 to-blue-400/65 backdrop-blur-sm border border-border mb-2">
              <span className="relative z-10 text-foreground/80 text-gray-100">
                {t("ashish_portfolio_projects_subtitle")}
              </span>
              <span className="absolute inset-0 rounded-full bg-gradient-to-r from-teal-400/20 via-cyan-500/20 to-blue-600/20 animate-pulse"></span>
            </div>
          </div>
        </div>
        <h2
          className="text-4xl md:text-5xl font-bold text-white"
          style={{ opacity: 1, transform: "none" }}
        >
          {t("ashish_portfolio_projects_title")}
        </h2>
        <div
          className="w-24 h-1.5 bg-gradient-to-r from-teal-400 via-cyan-500 to-blue-600 rounded-full mx-auto mt-2"
          style={{ opacity: 1, transform: "none" }}
        ></div>
      </div>
      <div className="container mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-10 px-4">
        {projectsList.map((p, index) => (
          <ProjectCard
            key={index}
            title={t(p.titleKey)}
            description={t(p.descriptionKey)}
            company={t(p.companyKey)}
            tags={p.tagKeys.map((key) => t(key))}
            imgSrc={p.imgSrc}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
