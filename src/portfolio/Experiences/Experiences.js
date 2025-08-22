import { Briefcase } from "lucide-react";
import ExperienceItem from "./ExperienceItem";
import { useTranslation } from "react-i18next";
import { experienceData } from "../../Data/experience_list";

const Experiences = () => {
  const { t } = useTranslation();

  // Retrieve the entire experienceData object from the translation file
  // 'returnObjects: true' is essential here to get the JSON object/array back

  return (
    <section id="experiences" className="py-24 sm:py-32 bg-gray-800 text-white overflow-hidden">
      <div className="container mx-auto text-center mb-16 px-4">
        <div className="inline-block">
          <div className="relative px-3 py-1 text-sm font-medium rounded-full bg-gradient-to-r from-teal-200/65 via-cyan-300/65 to-blue-400/65 backdrop-blur-sm border border-slate-700 mb-2">
            <span className="relative z-10 text-gray-100">
              {t("ashish_portfolio_experiences_subtitle")}
            </span>
            <span className="absolute inset-0 rounded-full bg-gradient-to-r from-teal-400/20 via-cyan-500/20 to-blue-600/20 animate-pulse"></span>
          </div>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-white">
          {t("ashish_portfolio_experiences_title")}
        </h2>
        <div className="w-24 h-1.5 bg-gradient-to-r from-teal-400 via-cyan-500 to-blue-600 rounded-full mx-auto mt-4"></div>
      </div>

      <div className="container mx-auto px-4">
        <div className="relative wrap overflow-hidden p-4 md:p-10 h-full">
          <div className="absolute border-2-2 border-opacity-20 border-slate-700 h-full border left-5 md:left-1/2"></div>
          
          {/* Ensure experienceData is an array before mapping */}
          {experienceData.map((exp, index) => (
            <div
              key={index}
              className={`mb-4 flex md:justify-between w-full ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              <div className="hidden md:block w-5/12"></div>

              <div className="z-20 flex items-center justify-center order-1 bg-teal-500 shadow-xl w-10 h-10 rounded-full absolute left-5 -translate-x-1/2 md:static md:translate-x-0">
                <Briefcase className="h-5 w-5 text-white" />
              </div>

              <div className="order-1 w-full md:w-5/12 pl-10 md:px-4 py-4">
                <ExperienceItem
                  title={t(exp.titleKey)}
                  company={t(exp.companyKey)}
                  duration={t(exp.durationKey)}
                  description={t(exp.descriptionKey)}
                  points={exp.pointsKeys.map(pointKey => t(pointKey))}
                  index={index}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experiences;