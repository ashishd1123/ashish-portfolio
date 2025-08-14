import ExperienceItem from "./ExperienceItem";

const Experiences = () => {
  const experienceData = [
    {
      title: "Web Developer",
      company: "QuantumLeap Software",
      duration: "Jan 2025 - Present",
      points: [
        "As a key member of the product team, I contribute to the development of core features for our flagship SaaS platform, focusing on enhancing user experience and improving application performance.",
        "✓ Led the development of a new real-time analytics dashboard using Next.js and WebSockets.",
        "✓ Optimized application load times by 30% through code splitting, lazy loading, and image optimization.",
        "✓ Collaborated with UI/UX designers to translate complex Figma mockups into pixel-perfect, responsive components.",
        "✓ Mentored a junior developer, providing code reviews and guidance on best practices.",
      ],
    },
    {
      title: "Junior Frontend Developer",
      company: "Digital Dreams Agency",
      duration: "Jun 2024 - Dec 2024",
      points: [
        "Developed and maintained responsive websites and web applications for a variety of clients, working within a fast-paced agency environment and collaborating closely with a team of developers and designers.",
        "✓ Successfully delivered 5+ client websites using React and Tailwind CSS.",
        "✓ Implemented complex UI animations and interactive features based on client specifications.",
        "✓ Integrated third-party APIs for services such as payments and content management systems (CMS).",
        "✓ Participated in agile ceremonies, including daily stand-ups, sprint planning, and retrospectives.",
      ],
    },
    {
      title: "Frontend Developer Intern",
      company: "InnovateTech Solutions",
      duration: "Jan 2024 - May 2024",
      points: [
        "Gained valuable hands-on experience by assisting the senior development team with bug fixes, UI enhancements, and feature development for their primary web application.",
      ],
    },
  ];

  return (
    <section
      id="experiences"
      className="py-24 sm:py-32 relative bg-slate-800 text-white overflow-hidden"
    >
      <div className="container mx-auto text-center mb-16 px-4">
        <div style={{ opacity: 1, transform: "none" }}>
          <div class="inline-block">
            <div class="relative px-3 py-1 text-sm font-medium rounded-full bg-gradient-to-r from-teal-200/65 via-cyan-300/65 to-blue-400/65 backdrop-blur-sm border border-border mb-2">
              <span class="relative z-10 text-foreground/80 text-gray-100">
                My Professional Journey
              </span>
              <span class="absolute inset-0 rounded-full bg-gradient-to-r from-teal-400/20 via-cyan-500/20 to-blue-600/20 animate-pulse"></span>
            </div>
          </div>
        </div>

        <h2
          className="text-4xl md:text-5xl font-bold text-white"
          style={{ opacity: 1, transform: "none" }}
        >
          Work Experience
        </h2>
        <div
          className="w-24 h-1.5 bg-gradient-to-r from-teal-400 via-cyan-500 to-blue-600 rounded-full mx-auto mt-2"
          style={{ opacity: 1, transform: "none" }}
        ></div>
      </div>
      <div className="container mx-auto px-4">
        <div className="relative wrap overflow-hidden p-10 h-full">
          <div
            className="border-2-2 absolute border-opacity-20 border-slate-700 h-full border"
            style={{ left: "50%" }}
          ></div>
          {experienceData.map((exp, index) => (
            <div
              key={index}
              className={`mb-8 flex justify-between items-center w-full ${
                index % 2 === 0
                  ? "flex-row-reverse left-timeline"
                  : "right-timeline"
              }`}
            >
              <div className="order-1 w-5/12"></div>
              <div className="z-20 flex items-center order-1 bg-slate-800 shadow-xl w-8 h-8 rounded-full">
                <h1 className="mx-auto font-semibold text-lg text-white"></h1>
              </div>
              <div className="order-1 bg-slate-800/80 rounded-lg shadow-xl w-5/12 px-6 py-4 border border-slate-700">
                <span className="bg-teal-400 text-slate-900 text-xs font-bold px-2 py-1 rounded-full absolute -top-3">
                  {exp.duration}
                </span>
                <h3 className="mb-1 font-bold text-white text-2xl">
                  {exp.title}
                </h3>
                <p className="text-sm font-medium leading-snug tracking-wide text-teal-400 text-opacity-100 mb-3">
                  {exp.company}
                </p>
                <ul className="text-sm text-gray-400 list-none pl-0 space-y-2">
                  {exp.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experiences;
