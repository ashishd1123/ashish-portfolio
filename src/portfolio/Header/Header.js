import { useState } from "react";
import { navigationList } from "../../Data/navigation_list";
import { useTranslation } from "react-i18next";
import { Menu, X } from "lucide-react"; // lucide-react से Menu और X आइकन इम्पोर्ट करें

const Header = ({ activeSection, onLinkClick }) => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // मोबाइल मेनू के लिए स्टेट
  const { i18n, t } = useTranslation();

  const handleLanguageSelect = (lng) => {
    i18n.changeLanguage(lng);
    setOpenDropdown(null);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-slate-800/80 backdrop-blur-sm z-40 shadow-lg shadow-slate-900/20">
      <div className="container mx-auto flex justify-between items-center p-4 text-white">
        <h1 className="text-2xl font-bold text-teal-400">{t("ashish_portfolio_home_title")}</h1>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-2 relative">
          {navigationList.map((link) =>
            link.children ? (
              <div
                key={link.name}
                className="relative group"
                onMouseEnter={() => setOpenDropdown(link.name)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button
                  className={`text-md px-3 py-2 hover:text-white hover:bg-slate-700/50 rounded-md transition-colors font-medium duration-200 ${
                    activeSection === link.href
                      ? "bg-teal-500/10 text-teal-300"
                      : ""
                  }`}
                >
                  {t(link.name.toLowerCase())}
                </button>
                {openDropdown === link.name && (
                  <div className="absolute left-0 w-40 bg-slate-800/95 shadow-lg rounded-lg overflow-hidden z-50">
                    {link.children.map((child) => (
                      <button
                        key={child.name}
                        onClick={() => handleLanguageSelect(child.code)}
                        className="block w-full text-left px-4 py-2 text-sm text-white hover:bg-slate-700/70 transition-colors"
                      >
                        {child.name}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => onLinkClick(e, link.href)}
                className={`relative text-md px-3 py-2 hover:text-white hover:bg-slate-700/50 rounded-md transition-colors font-medium duration-200 ${
                  activeSection === link.href
                    ? "bg-teal-500/10 text-teal-300"
                    : ""
                }`}
              >
                {t(link.name.toLowerCase())}
                {activeSection === link.href && (
                  <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-teal-400"></span>
                )}
              </a>
            )
          )}
        </nav>

        {/* Mobile Hamburger Icon */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} aria-label="Toggle navigation menu" className="text-white focus:outline-none">
            {isMenuOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
          </button>
        </div>
      </div>

      {/* Mobile/Tablet Menu */}
      <div className={`md:hidden absolute top-full left-0 w-full bg-slate-800/95 transition-transform duration-300 transform ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <nav className="flex flex-col items-start p-4">
          {navigationList.map((link) =>
            link.children ? (
              <div key={link.name} className="relative w-full">
                <button
                  onClick={() => setOpenDropdown(openDropdown === link.name ? null : link.name)}
                  className={`w-full text-left text-lg px-4 py-2 hover:text-white hover:bg-slate-700/50 rounded-md transition-colors font-medium duration-200 ${
                    activeSection === link.href ? "bg-teal-500/10 text-teal-300" : ""
                  }`}
                >
                  {t(link.name.toLowerCase())}
                </button>
                {openDropdown === link.name && (
                  <div className="pl-8 bg-slate-700/50 rounded-lg my-2">
                    {link.children.map((child) => (
                      <button
                        key={child.name}
                        onClick={() => {
                          handleLanguageSelect(child.code);
                          toggleMenu();
                        }}
                        className="block w-full text-left px-4 py-2 text-sm text-white hover:bg-slate-600/70 transition-colors"
                      >
                        {child.name}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  onLinkClick(e, link.href);
                  toggleMenu();
                }}
                className={`w-full text-left text-lg px-4 py-2 hover:text-white hover:bg-slate-700/50 rounded-md transition-colors font-medium duration-200 ${
                  activeSection === link.href ? "bg-teal-500/10 text-teal-300" : ""
                }`}
              >
                {t(link.name.toLowerCase())}
              </a>
            )
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;