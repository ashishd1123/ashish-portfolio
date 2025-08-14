import ProjectCard from "./ProjectCard";

const Projects = () => {
  const projectsData = [
    {
      title: "Online Bookstore Frontend",
      description:
        "The client-side application for a collaborative online bookstore project.",
      tags: ["Next.js", "TailwindCSS", "TypeScript"],
      imgSrc:
        "https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=2070&auto=format&fit=crop",
      liveLink: "#",
      codeLink: "#",
    },
    {
      title: "Online Bookstore Backend",
      description:
        "The server-side API for the collaborative online bookstore project.",
      tags: ["Node.js", "Express.js", "MongoDB"],
      imgSrc:
        "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1934&auto=format&fit=crop",
      liveLink: "#",
      codeLink: "#",
    },
    {
      title: "Bookstore ChatBot",
      description: "A Python-based chatbot to assist users with book searches.",
      tags: ["Python", "Flask", "NLP", "JavaScript"],
      imgSrc:
        "https://images.unsplash.com/photo-1589254065909-b7086229d092?q=80&w=1974&auto=format&fit=crop",
      liveLink: "#",
      codeLink: "#",
    },
  ];

  return (
    <section
      id="projects"
      className="py-24 sm:py-32 relative bg-slate-800 text-white overflow-hidden"
    >
      <div className="container mx-auto text-center mb-12 px-4">
        <div style={{ opacity: 1, transform: "none" }}>
          <div class="inline-block">
            <div class="relative px-3 py-1 text-sm font-medium rounded-full bg-gradient-to-r from-teal-200/65 via-cyan-300/65 to-blue-400/65 backdrop-blur-sm border border-border mb-2">
              <span class="relative z-10 text-foreground/80 text-gray-100">
                My recent projects
              </span>
              <span class="absolute inset-0 rounded-full bg-gradient-to-r from-teal-400/20 via-cyan-500/20 to-blue-600/20 animate-pulse"></span>
            </div>
          </div>
        </div>
        <h2
          className="text-4xl md:text-5xl font-bold text-white"
          style={{ opacity: 1, transform: "none" }}
        >
          Featured Projects
        </h2>
        <div
          className="w-24 h-1.5 bg-gradient-to-r from-teal-400 via-cyan-500 to-blue-600 rounded-full mx-auto mt-2"
          style={{ opacity: 1, transform: "none" }}
        ></div>
      </div>
      <div className="container mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {projectsData.map((p) => (
          <ProjectCard key={p.title} {...p} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
