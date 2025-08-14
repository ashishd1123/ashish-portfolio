const GoalCard = ({ icon, title, children }) => (
    <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700 hover:border-teal-400 hover:-translate-y-2 transition-all duration-300">
        <div className="flex items-center gap-4 mb-3">
            {icon}
            <h3 className="text-2xl font-bold text-white">{title}</h3>
        </div>
        <p className="text-gray-400">{children}</p>
    </div>
);

export default GoalCard;
