// Footer component
const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-800 text-center py-4 mt-8 transition-colors duration-500">
      <p className="text-gray-700 dark:text-gray-300 text-sm">&copy; {new Date().getFullYear()} Ashish Dubey. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
