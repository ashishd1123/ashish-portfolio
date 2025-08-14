const About = () => (
  <section
    id="about"
    className="py-24 sm:py-32 relative bg-slate-800 text-white overflow-hidden"
  >
    <div className="container mx-auto text-center mb-12 px-4">
      <div style={{ opacity: 1, transform: "none" }}>
        <div class="inline-block">
          <div class="relative px-3 py-1 text-sm font-medium rounded-full bg-gradient-to-r from-teal-200/65 via-cyan-300/65 to-blue-400/65 backdrop-blur-sm border border-border mb-2">
            <span class="relative z-10 text-foreground/80 text-gray-100">
              My Journey
            </span>
            <span class="absolute inset-0 rounded-full bg-gradient-to-r from-teal-400/20 via-cyan-500/20 to-blue-600/20 animate-pulse"></span>
          </div>
        </div>
      </div>
      <h2
        className="text-4xl md:text-5xl font-bold text-white"
        style={{ opacity: 1, transform: "none" }}
      >
        About Me
      </h2>

      <div
        className="w-24 h-1.5 bg-gradient-to-r from-teal-400 via-cyan-500 to-blue-600 rounded-full mx-auto mt-2"
        style={{ opacity: 1, transform: "none" }}
      ></div>
    </div>
    <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center px-4">
      <div className="w-full h-96 rounded-lg overflow-hidden group">
        <img
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
          alt="Your Name"
          className="w-full h-full object-cover rounded-lg group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div>
        <p className="text-lg text-gray-300 mb-4">
          I am a Senior Software Engineer with{" "}
          <em className="text-teal-300">8 years of expertise</em> in front-end
          development, specializing in a suite of modern technologies including{" "}
          <strong className="text-teal-300">
            Angular, TypeScript, JavaScript, React.js, Next.js, Electron, and
            Node.js
          </strong>
          .
        </p>
        <p className="text-lg text-gray-300 mb-6">
          Proven ability to design and deploy scalable web and desktop
          applications across Windows and Mac platforms. Skilled in leading
          cross-functional teams, automating workflows, and delivering
          high-quality software aligned with business goals.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
          <div>
            <strong className="text-teal-400 block">Name:</strong> Ashish Dubey
          </div>
          <div>
            <strong className="text-teal-400 block">Email:</strong>{" "}
            ashishd25992@gmail.com
          </div>
          <div>
            <strong className="text-teal-400 block">Location:</strong>{" "}
            Hyderabad, Telangana, India
          </div>
          <div>
            <strong className="text-teal-400 block">Availability:</strong> Open
            to opportunities
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
