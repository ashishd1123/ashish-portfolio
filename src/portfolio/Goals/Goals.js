import { ChevronsRight, Palette, Server } from "lucide-react";
import GoalCard from "./GoalCard";
import { useTranslation, Trans } from "react-i18next";

const Goals = () => {
  const { t } = useTranslation();

  return (
    <section
      id="goals"
      className="py-24 sm:py-32 relative bg-gray-800 text-white overflow-hidden"
    >
      <div className="container mx-auto text-center mb-12 px-4">
        <div style={{ opacity: 1, transform: "none" }}>
          <div className="inline-block">
            <div className="relative px-3 py-1 text-sm font-medium rounded-full bg-gradient-to-r from-teal-200/65 via-cyan-300/65 to-blue-400/65 backdrop-blur-sm border border-border mb-2">
              <span className="relative z-10 text-foreground/80 text-gray-100">
                {t("ashish_portfolio_goals_subtitle")}
              </span>
              <span className="absolute inset-0 rounded-full bg-gradient-to-r from-teal-400/20 via-cyan-500/20 to-blue-600/20 animate-pulse"></span>
            </div>
          </div>
        </div>
        <h2
          className="text-4xl md:text-5xl font-bold text-white"
          style={{ opacity: 1, transform: "none" }}
        >
          {t("ashish_portfolio_goals_title")}
        </h2>
        <div
          className="w-24 h-1.5 bg-gradient-to-r from-teal-400 via-cyan-500 to-blue-600 rounded-full mx-auto mt-2"
          style={{ opacity: 1, transform: "none" }}
        ></div>
      </div>
      <div className="container mx-auto grid md:grid-cols-3 gap-8 px-4">
        <GoalCard
          icon={<ChevronsRight className="text-teal-400" size={30} />}
          title={t("ashish_portfolio_goals_short_term_title")}
        >
          <Trans
            i18nKey="ashish_portfolio_goals_short_term_p"
            components={{
              1: <em className="text-teal-300" />,
              3: <em className="text-teal-300" />,
            }}
          />
        </GoalCard>
        <GoalCard
          icon={<Server className="text-teal-400" size={30} />}
          title={t("ashish_portfolio_goals_mid_term_title")}
        >
          <Trans
            i18nKey="ashish_portfolio_goals_mid_term_p"
            components={{
              1: <em className="text-teal-300" />,
            }}
          />
        </GoalCard>
        <GoalCard
          icon={<Palette className="text-teal-400" size={30} />}
          title={t("ashish_portfolio_goals_long_term_title")}
        >
          <Trans
            i18nKey="ashish_portfolio_goals_long_term_p"
            components={{
              1: <em className="text-teal-300" />,
            }}
          />
        </GoalCard>
      </div>
    </section>
  );
};

export default Goals;