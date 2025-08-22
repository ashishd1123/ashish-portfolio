import { ChevronUpIcon, Linkedin, MailIcon, PhoneCallIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { navigationList } from "../../Data/navigation_list";
import { useTranslation } from "react-i18next";

const Footer = () => {
  // State to control the visibility of the scroll-to-top button
  const [isVisible, setIsVisible] = useState(false);
  const { t } = useTranslation();

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Set up event listener on component mount
  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  // Function to scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-slate-800 border-t border-gray-500 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <a
              className="text-xl font-bold bg-gradient-to-r from-teal-400 via-cyan-500 to-blue-600 bg-clip-text text-transparent"
              href="#home"
            >
              {t("ashish_portfolio_footer_name")}
            </a>
            <p className="mt-4 text-gray-400">
              {t("ashish_portfolio_footer_tagline")}
            </p>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <h3 className="text-sm font-semibold text-gray-100 uppercase tracking-wider mb-4">
              {t("ashish_portfolio_footer_navigation_title")}
            </h3>
            <ul className="space-y-2">
              {navigationList.map((item, index) => (
                <li key={index}>
                  <a
                    className="text-gray-400 hover:text-blue-400 transition-colors"
                    href={item.href}
                  >
                    {t(item.name.toLowerCase())}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: My Roles */}
          <div>
            <h3 className="text-sm font-semibold text-gray-100 uppercase tracking-wider mb-4">
              {t("ashish_portfolio_footer_roles_title")}
            </h3>
            <ul className="space-y-2">
              <li>
                <button
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  {t("ashish_portfolio_footer_role_frontend")}
                </button>
              </li>
              <li>
                <button
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                  href="#"
                >
                  {t("ashish_portfolio_footer_role_fullstack")}
                </button>
              </li>
              <li>
                <button
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                  href="#"
                >
                  {t("ashish_portfolio_footer_role_ai_chatbot")}
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-100 uppercase tracking-wider mb-4">
              {t("ashish_portfolio_footer_contact_title")}
            </h3>
            <ul className="space-y-3">
              {/* Email */}
              <li className="flex items-center text-gray-400 hover:text-blue-400 transition-colors">
                <MailIcon className="text-teal-400 w-5 h-5 mt-1 flex-shrink-0 mr-3" />{" "}
                {/* Added mr-3 */}
                <div>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-200 hover:text-teal-300 transition-colors break-all"
                    href="mailto:ashishd25992@gmail.com"
                  >
                    ashishd25992@gmail.com
                  </a>
                </div>
              </li>
              {/* LinkedIn */}
              <li className="flex items-center text-gray-400 hover:text-blue-400 transition-colors">
                <Linkedin className="text-teal-400 w-5 h-5 mt-1 flex-shrink-0 mr-3" />{" "}
                {/* Added mr-3 */}
                <div>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-200 hover:text-teal-300 transition-colors break-all"
                    href="https://linkedin.com/in/ashish-dubey-707767107"
                  >
                    linkedin.com/in/ashish-dubey-707767107
                  </a>
                </div>
              </li>
              {/* Phone */}
              <li className="flex items-center text-gray-400 hover:text-blue-400 transition-colors">
                <PhoneCallIcon className="text-teal-400 w-5 h-5 mt-1 flex-shrink-0 mr-3" />{" "}
                {/* Added mr-3 */}
                <div>
                  <a
                    href="tel:+918737980888"
                    className="text-zinc-200 hover:text-teal-300 transition-colors"
                  >
                    +91 873-798-0888
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Sub-Footer */}
        <div className="mt-8 pt-8 border-t border-gray-500">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-md">
              {t("ashish_portfolio_footer_copyright")}
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <button className="text-gray-500 hover:text-blue-500">
                {t("ashish_portfolio_footer_privacy_policy")}
              </button>
              <button className="text-gray-500 hover:text-blue-500">
                {t("ashish_portfolio_footer_terms_of_service")}
              </button>
              <button className="text-gray-500 hover:text-blue-500">
                {t("ashish_portfolio_footer_cookies")}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      {isVisible && (
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-gradient-to-r from-teal-400 via-cyan-500 to-blue-600 text-white hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-opacity-50 transition-opacity duration-300 shadow-lg"
        >
          <ChevronUpIcon />
        </button>
      )}
    </footer>
  );
};

export default Footer;
