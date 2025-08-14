import { Code, Eye } from "lucide-react";

const ProjectCard = ({ title, description, tags, imgSrc, liveLink, codeLink }) => (
    <div className="bg-slate-800/50 rounded-lg overflow-hidden border border-slate-700 group transition-all duration-300 hover:border-teal-400 hover:shadow-2xl hover:shadow-teal-500/10">
        <div className="overflow-hidden h-56">
            <img src={imgSrc} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
        </div>
        <div className="p-6">
            <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
            <p className="text-gray-400 mb-4 h-20">{description}</p>
            <div className="flex flex-wrap gap-2 mb-6">
                {tags.map(tag => (
                    <span key={tag} className="bg-gray-700 text-teal-300 text-xs font-medium px-2.5 py-1 rounded-full">{tag}</span>
                ))}
            </div>
            <div className="flex gap-4">
                <a href={liveLink} className="flex-1 text-center bg-teal-500 hover:bg-teal-600 text-white font-bold py-2 px-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-2">
                    <Eye size={18} /> Live Demo
                </a>
                <a href={codeLink} className="flex-1 text-center bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-2">
                    <Code size={18} /> View Code
                </a>
            </div>
        </div>
    </div>
);

export default ProjectCard;