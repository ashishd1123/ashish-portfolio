
const ProjectCard = ({ title, description, company, tags, imgSrc }) => (
    <div className="bg-zinc-800/50 rounded-lg overflow-hidden border border-slate-700 group transition-all duration-300 hover:border-teal-400 hover:shadow-2xl hover:shadow-teal-500/10">
        <div className="overflow-hidden h-56">
            <img src={imgSrc} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
        </div>
        <div className="p-6">
            <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
            <p className="text-gray-400 mb-4">{description}</p>
            <div className="flex flex-wrap gap-2 mb-6">
                {tags.map(tag => (
                    <span key={tag} className="bg-gray-700 text-teal-300 text-xs font-medium px-2.5 py-1 rounded-full">{tag}</span>
                ))}
            </div>
            
        </div>
    </div>
);

export default ProjectCard;