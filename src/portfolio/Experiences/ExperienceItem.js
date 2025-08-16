import { Check } from "lucide-react";

const ExperienceItem = ({ title, company, duration, description, points, index }) => {
  const isEven = index % 2 === 0;
  return (
    <div className="mb-6">
        <div className="bg-zinc-800/50 p-6 rounded-lg border border-slate-700 relative hover:border-teal-400 hover:-translate-y-2 transition-all duration-300">
          <span className="bg-teal-400 text-slate-900 text-xs font-bold px-2 py-1 rounded-full absolute -top-3">
            {duration}
          </span>
          <h3 className="mb-1 font-bold text-white text-2xl">{title}</h3>
          <p className="text-sm font-medium leading-snug tracking-wide text-teal-400 text-opacity-100 mb-3">
            {company}
          </p>
          <p className="mt-4 text-sm text-slate-400 mb-3">{description}</p>
          <ul className="text-sm text-gray-400 list-none pl-0 space-y-2">
            {points.map((point, i) => (
              <li key={i}>
                <Check className="inline-block mr-2 mt-1 h-4 w-4 flex-shrink-0 text-green-500" />
                {point}
              </li>
            ))}
          </ul>
        </div>

      {/* Spacer for mobile */}
      <div className="hidden md:block w-2/12"></div>

      {/* Right Side Content (or empty space) */}
      <div className={`w-full md:w-5/12 ${isEven && "md:order-2"}`}>
        {/* This div is empty on purpose to create the alternating effect on desktop */}
      </div>
    </div>
  );
};

export default ExperienceItem;
