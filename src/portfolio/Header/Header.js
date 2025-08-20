const Header = ({ activeSection, onLinkClick }) => {
  const navLinks = ['Home', 'About', 'Goals', 'Experiences', 'Projects', 'Skills', 'Resume', 'Certifications', 'Testimonials', 'Contact'];

  return (
    <header className="fixed top-0 left-0 w-full bg-slate-800/80 backdrop-blur-sm z-40 shadow-lg shadow-slate-900/20">
      <div className="container mx-auto flex justify-between items-center p-4 text-white">
        <h1 className="text-2xl font-bold text-teal-400">ASHISH DUBEY</h1>
        <nav className="hidden md:flex items-center space-x-2">
          {navLinks.map(link => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={(e) => onLinkClick(e, link.toLowerCase())}
              className={`text-md px-3 py-2 hover:text-white hover:bg-slate-700/50 rounded-md transition-colors font-medium duration-200 ${activeSection === link.toLowerCase() ? 'bg-teal-500/10 text-teal-300' : ''}`}
            >
              {link}
              {activeSection === link.toLowerCase() && (
                <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-teal-400"></span>
              )}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
