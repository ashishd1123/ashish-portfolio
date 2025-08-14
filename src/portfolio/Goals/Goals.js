import { ChevronsRight, Palette, Server } from "lucide-react";
import GoalCard from "./GoalCard";

const Goals = () => (
  <section
    id="goals"
    className="py-24 sm:py-32 relative bg-slate-800 text-white overflow-hidden"
  >
    <div className="container mx-auto text-center mb-12 px-4">
      <div style={{ opacity: 1, transform: "none" }}>
        <div class="inline-block">
          <div class="relative px-3 py-1 text-sm font-medium rounded-full bg-gradient-to-r from-teal-200/65 via-cyan-300/65 to-blue-400/65 backdrop-blur-sm border border-border mb-2">
            <span class="relative z-10 text-foreground/80 text-gray-100">
              My Roadmap
            </span>
            <span class="absolute inset-0 rounded-full bg-gradient-to-r from-teal-400/20 via-cyan-500/20 to-blue-600/20 animate-pulse"></span>
          </div>
        </div>
      </div>
      <h2
        className="text-4xl md:text-5xl font-bold text-white"
        style={{ opacity: 1, transform: "none" }}
      >
        Career Goals
      </h2>
      <div
        className="w-24 h-1.5 bg-gradient-to-r from-teal-400 via-cyan-500 to-blue-600 rounded-full mx-auto mt-2"
        style={{ opacity: 1, transform: "none" }}
      ></div>
    </div>
    <div className="container mx-auto grid md:grid-cols-3 gap-8 px-4">
      <GoalCard
        icon={<ChevronsRight className="text-teal-400" size={30} />}
        title="Short-Term Goal"
      >
        To secure a challenging Frontend Developer position where I can apply my
        skills in React and Next.js, and learn from experienced mentors.
      </GoalCard>
      <GoalCard
        icon={<Server className="text-teal-400" size={30} />}
        title="Mid-Term Goal"
      >
        To evolve into a Senior Frontend Developer, taking ownership of complex
        features and mentoring junior developers.
      </GoalCard>
      <GoalCard
        icon={<Palette className="text-teal-400" size={30} />}
        title="Long-Term Goal"
      >
        To become a technical lead or solutions architect, guiding technical
        strategy and driving innovation in user experience.
      </GoalCard>
    </div>
  </section>
);

export default Goals;
