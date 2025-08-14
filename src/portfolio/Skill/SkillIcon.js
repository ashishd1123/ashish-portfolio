const SkillIcon = ({ name, icon }) => (
    <div className="flex flex-col items-center gap-2 text-center group">
        <div className="w-20 h-20 bg-slate-800 border border-slate-700 rounded-lg flex items-center justify-center group-hover:bg-teal-500/10 group-hover:border-teal-400 transition-all duration-300">
            <img src={icon} alt={name} className="w-12 h-12"/>
        </div>
        <p className="text-gray-400 group-hover:text-white transition-colors duration-300">{name}</p>
    </div>
);

export default SkillIcon;