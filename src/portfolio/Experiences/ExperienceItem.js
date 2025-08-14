const ExperienceItem = ({ title, company, duration, children, index }) => {
    const isEven = index % 2 === 0;
    return (
        <div className="mb-8 flex justify-between md:items-center w-full">
            {/* Left Side Content (or empty space) */}
            <div className={`w-full md:w-5/12 ${!isEven && 'md:order-2'}`}>
                <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700 relative">
                    <span className="bg-teal-400 text-slate-900 text-xs font-bold px-2 py-1 rounded-full absolute -top-3">{duration}</span>
                    <h3 className="text-2xl font-bold text-white">{title}</h3>
                    <p className="text-teal-400 mb-4">{company}</p>
                    <ul className="text-gray-400 list-none pl-0 space-y-2 text-sm">
                        {children}
                    </ul>
                </div>
            </div>

             {/* Spacer for mobile */}
            <div className="hidden md:block w-2/12"></div>

            {/* Right Side Content (or empty space) */}
            <div className={`w-full md:w-5/12 ${isEven && 'md:order-2'}`}>
                 {/* This div is empty on purpose to create the alternating effect on desktop */}
            </div>
        </div>
    );
};

export default ExperienceItem;