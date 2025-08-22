import { useState } from "react";
import { navigationList } from "../../Data/navigation_list";
import { useTranslation } from "react-i18next";

const Header = ({ activeSection, onLinkClick }) => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const { i18n } = useTranslation();

  const handleLanguageSelect = (lng) => {
    i18n.changeLanguage(lng); // 🔄 switch language
    setOpenDropdown(null);    // close dropdown
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-slate-800/80 backdrop-blur-sm z-40 shadow-lg shadow-slate-900/20">
      <div className="container mx-auto flex justify-between items-center p-4 text-white">
        <h1 className="text-2xl font-bold text-teal-400">ASHISH DUBEY</h1>
        <nav className="hidden md:flex items-center space-x-2 relative">
          {navigationList.map(link =>
            link.children ? (
              // 🔽 Dropdown for Languages
              <div
                key={link.name}
                className="relative group"
                onMouseEnter={() => setOpenDropdown(link.name)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button
                  className={`text-md px-3 py-2 hover:text-white hover:bg-slate-700/50 rounded-md transition-colors font-medium duration-200 ${
                    activeSection === link.href ? "bg-teal-500/10 text-teal-300" : ""
                  }`}
                >
                  {link.name}
                </button>
                {openDropdown === link.name && (
                  <div className="absolute left-0 w-40 bg-slate-800/95 shadow-lg rounded-lg overflow-hidden z-50">
                    {link.children.map(child => (
                      <button
                        key={child.name}
                        onClick={() => handleLanguageSelect(child.code)} // ✅ use language code
                        className="block w-full text-left px-4 py-2 text-sm text-white hover:bg-slate-700/70 transition-colors"
                      >
                        {child.name}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              // 🔗 Normal links
              <a
                key={link.name}
                href={link.href}
                onClick={e => onLinkClick(e, link.href)}
                className={`relative text-md px-3 py-2 hover:text-white hover:bg-slate-700/50 rounded-md transition-colors font-medium duration-200 ${
                  activeSection === link.href ? "bg-teal-500/10 text-teal-300" : ""
                }`}
              >
                {link.name}
                {activeSection === link.href && (
                  <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-teal-400"></span>
                )}
              </a>
            )
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
