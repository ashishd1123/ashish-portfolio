import { ChevronsRight, Palette, Server } from "lucide-react";
import GoalCard from "./GoalCard";

const Goals = () => (
  <section
    id="goals"
    className="py-24 sm:py-32 relative bg-gray-800 text-white overflow-hidden"
  >
    <div className="container mx-auto text-center mb-12 px-4">
      <div style={{ opacity: 1, transform: "none" }}>
        <div className="inline-block">
          <div className="relative px-3 py-1 text-sm font-medium rounded-full bg-gradient-to-r from-teal-200/65 via-cyan-300/65 to-blue-400/65 backdrop-blur-sm border border-border mb-2">
            <span className="relative z-10 text-foreground/80 text-gray-100">
              My Roadmap
            </span>
            <span className="absolute inset-0 rounded-full bg-gradient-to-r from-teal-400/20 via-cyan-500/20 to-blue-600/20 animate-pulse"></span>
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
        Secure a challenging Frontend Developer role where I can leverage my
        expertise in <em className="text-teal-300">React</em> and <em className="text-teal-300">Next.js</em>, contribute to impactful projects, and
        gain valuable insights from experienced mentors.
      </GoalCard>
      <GoalCard
        icon={<Server className="text-teal-400" size={30} />}
        title="Mid-Term Goal"
      >
        Progress into a <em className="text-teal-300">Full-Stack Developer</em> position, taking ownership of
        complex, high-impact features while actively mentoring and supporting
        junior developers.
      </GoalCard>
      <GoalCard
        icon={<Palette className="text-teal-400" size={30} />}
        title="Long-Term Goal"
      >
        Advance to a Technical Lead or Solutions Architect role, shaping
        technical strategy, fostering innovation, and delivering exceptional
        user experiences.
      </GoalCard>
    </div>
  </section>
);

export default Goals;
