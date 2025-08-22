import { ArrowRight } from "lucide-react";
import BackgroundImage from '../../Assets/Images/background.png';
import { useTranslation } from "react-i18next";

const Home = () => {
      const { t } = useTranslation();

    return (
        <section id="home" className="h-screen flex items-center justify-center text-white text-center relative overflow-hidden">
            <div 
                className="absolute inset-0 bg-no-repeat bg-cover bg-center opacity-50"
                style={{ backgroundImage: `url(${BackgroundImage})` }} 
            ></div>
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/60"></div>
            <div className="z-10 flex flex-col items-center p-4">
                <h2 className="text-4xl md:text-6xl font-bold mb-4">
                   {t("ashish_portfolio_home_subtitle")}
                </h2>
                <h1 className="text-5xl md:text-7xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-teal-300 to-cyan-500 mb-6">
                    {t("ashish_portfolio_home_profile")}
                </h1>
                <p className="max-w-2xl text-lg text-gray-300 mb-8">
                   {t("ashish_portfolio_home_tagline")}
                </p>
                <div className="flex gap-4">
                    <a href="#projects" className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 flex items-center gap-2">
                        {t("ashish_portfolio_home_href_view_projects")} <ArrowRight size={20} />
                    </a>
                    <a href="#contact" className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300">
                        {t("ashish_portfolio_home_href_contact_me")}
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Home;