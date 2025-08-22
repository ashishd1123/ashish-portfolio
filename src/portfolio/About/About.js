import AboutMe from "../../Assets/Images/aboutme.png";
import { useTranslation, Trans } from "react-i18next"; // <-- Added Trans here
// import { useEffect } from "react";
// import i18next from "i18next";

const About = () => {
  const { t } = useTranslation();

  return (
    <section
      id="about"
      className="py-24 sm:py-32 relative bg-gray-800 text-white overflow-hidden"
    >
      <div className="container mx-auto text-center mb-12 px-4">
        <div style={{ opacity: 1, transform: "none" }}>
          <div className="inline-block">
            <div className="relative px-3 py-1 text-sm font-medium rounded-full bg-gradient-to-r from-teal-200/65 via-cyan-300/65 to-blue-400/65 backdrop-blur-sm border border-border mb-2">
              <span className="relative z-10 text-foreground/80 text-gray-100">
                {t("ashish_portfolio_about_my_journey_subtitle")}
              </span>
              <span className="absolute inset-0 rounded-full bg-gradient-to-r from-teal-400/20 via-cyan-500/20 to-blue-600/20 animate-pulse"></span>
            </div>
          </div>
        </div>
        <h2
          className="text-4xl md:text-5xl font-bold text-white"
          style={{ opacity: 1, transform: "none" }}
        >
          {t("ashish_portfolio_about_me_title")}
        </h2>
        <div
          className="w-24 h-1.5 bg-gradient-to-r from-teal-400 via-cyan-500 to-blue-600 rounded-full mx-auto mt-2"
          style={{ opacity: 1, transform: "none" }}
        ></div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-start md:items-center pt-20">
          <div className="relative" style={{ opacity: 1, transform: "none" }}>
            <div className="absolute -inset-3 sm:-inset-4 rounded-xl bg-gradient-to-br from-purple-500/30 via-pink-500/20 to-teal-500/30 blur-xl opacity-60 sm:opacity-70 transition-all duration-500 group-hover:opacity-90"></div>
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-zinc-800 shadow-2xl group">
              <span className="box-sizing: border-box; display: block; overflow: hidden; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; position: absolute; inset: 0px;">
                <img
                  src={`${AboutMe}?q=80&w=2070&auto=format&fit=crop`}
                  alt="Your Name"
                  className="w-full h-full object-cover rounded-lg group-hover:scale-105 transition-transform duration-500"
                />
              </span>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent"></div>
              <div className="absolute bottom-0 left-0 w-full p-4 sm:p-6">
                <div className="flex items-center gap-2 bg-black/30 backdrop-blur-sm px-3 py-1.5 rounded-md w-fit">
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-green-500 animate-pulse"></div>
                  <span className="text-xs sm:text-sm font-medium text-gray-100">
                    {t("ashish_portfolio_about_work_status")}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <div style={{ opacity: 1, transform: "none" }}>
              <div className="relative overflow-hidden rounded-xl bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 p-6 transition-all duration-300 hover:border-blue-500/50 mt-12">
                <div className="absolute -inset-1 bg-gradient-to-r bg-zinc-800/50 rounded-xl blur opacity-25 hover:opacity-100 transition duration-1000 hover:duration-200"></div>
                <div className="relative">
                  <p className="text-lg text-zinc-300 leading-relaxed lg:text-justify">
                    <Trans
                      i18nKey="ashish_portfolio_about_intro_p1"
                      components={{
                        1: <strong className="text-teal-400" />,
                        3: <strong className="font-semibold text-teal-400" />,
                        5: <strong className="font-semibold text-teal-400" />,
                        7: <strong className="font-semibold text-teal-400" />,
                        9: <strong className="font-semibold text-teal-400" />,
                        11: <strong className="font-semibold text-teal-400" />,
                        13: <strong className="font-semibold text-teal-400" />,
                        15: <strong className="font-semibold text-teal-400" />,
                      }}
                    />
                  </p>
                  <p className="text-lg text-zinc-300 mt-4 leading-relaxed lg:text-justify">
                    {t("ashish_portfolio_about_intro_p2")}
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 mt-8 pt-6 border-t border-zinc-700/50">
                    <div>
                      <div className="text-xs sm:text-sm text-white/90">
                        {t("ashish_portfolio_about_details_name_label")}
                      </div>
                      <div className="font-medium text-zinc-200">
                        {t("ashish_portfolio_about_details_name_value")}
                      </div>
                    </div>
                    <div>
                      <div className="text-xs sm:text-sm text-white/90">
                        {t("ashish_portfolio_about_details_email_label")}
                      </div>
                      <a
                        className="font-medium text-zinc-200 hover:text-teal-400 transition-colors"
                        href="mailto:ashishd25992@gmail.com"
                      >
                        {t("ashish_portfolio_about_details_email_value")}
                      </a>
                    </div>
                    <div>
                      <div className="text-xs sm:text-sm text-white/90">
                        {t("ashish_portfolio_about_details_location_label")}
                      </div>
                      <div className="font-medium text-zinc-200">
                        {t("ashish_portfolio_about_details_location_value")}
                      </div>
                    </div>
                    <div>
                      <div className="text-xs sm:text-sm text-white/90">
                        {t("ashish_portfolio_about_details_availability_label")}
                      </div>
                      <div className="font-medium text-green-400">
                        {t("ashish_portfolio_about_details_availability_value")}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;