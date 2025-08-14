import { Github, Instagram, Linkedin } from "lucide-react";

const SocialLinks = () => (
    <div className="fixed bottom-0 left-8 hidden md:flex flex-col items-center gap-4 z-10">
        <a href="#" className="text-gray-400 hover:text-teal-400 hover:translate-y-[-2px] transition-all"><Github size={24} /></a>
        <a href="#" className="text-gray-400 hover:text-teal-400 hover:translate-y-[-2px] transition-all"><Linkedin size={24} /></a>
        <a href="#" className="text-gray-400 hover:text-teal-400 hover:translate-y-[-2px] transition-all"><Instagram size={24} /></a>
        <div className="w-px h-24 bg-gray-600"></div>
    </div>
);

export default SocialLinks;
