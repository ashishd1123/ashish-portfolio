import { Linkedin, MailIcon, PhoneCall } from "lucide-react";

const SocialLinks = () => (
    <div className="fixed bottom-0 left-8 hidden md:flex flex-col items-center gap-4 z-10">
        <a href="mailto:ashishd25992@gmail.com" className="text-gray-400 p-2 bg-gray-900 rounded-full shadow-lg hover:bg-cyan-500/30 hover:text-teal-400 hover:translate-y-[-2px] transition-all"><MailIcon size={24} /></a>

        <a href="https://linkedin.com/in/ashish-dubey-707767107" className="text-gray-400 p-2 bg-gray-900 rounded-full shadow-lg hover:bg-cyan-500/30 hover:text-teal-400 hover:translate-y-[-2px] transition-all"><Linkedin size={24} /></a>
        <a  href="tel:+918737980888" className="text-gray-400 p-2 bg-gray-900 rounded-full shadow-lg hover:bg-cyan-500/30 hover:text-teal-400 hover:translate-y-[-2px] transition-all"><PhoneCall size={24} /></a>
        <div className="w-px h-24"></div>
    </div>
);

export default SocialLinks;
