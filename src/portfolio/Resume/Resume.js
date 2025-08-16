import { Download, Eye } from "lucide-react";
import ashish_cv from "../../Assets/resume/ashish_resume.pdf";

const handleDownload = () => {
  const link = document.createElement("a");
  link.href = ashish_cv;
  link.download = "Ashish_Frontend_CV.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

const viewResume = () => {
  window.open(ashish_cv, "_blank", "noopener,noreferrer");
};

const Resume = () => (
  <section
    id="resume"
    className="py-24 sm:py-32 relative bg-gray-800 text-white overflow-hidden"
  >
    <div className="container mx-auto text-center mb-12 px-4">
      <div style={{ opacity: 1, transform: "none" }}>
        <div className="inline-block">
          <div className="relative px-3 py-1 text-sm font-medium rounded-full bg-gradient-to-r from-teal-200/65 via-cyan-300/65 to-blue-400/65 backdrop-blur-sm border border-border mb-2">
            <span className="relative z-10 text-foreground/80 text-gray-100">
              My Professional Background
            </span>
            <span className="absolute inset-0 rounded-full bg-gradient-to-r from-teal-400/20 via-cyan-500/20 to-blue-600/20 animate-pulse"></span>
          </div>
        </div>
      </div>
      <h2
        className="text-4xl md:text-5xl font-bold text-white"
        style={{ opacity: 1, transform: "none" }}
      >
        Resume
      </h2>
      <div
        className="w-24 h-1.5 bg-gradient-to-r from-teal-400 via-cyan-500 to-blue-600 rounded-full mx-auto mt-2"
        style={{ opacity: 1, transform: "none" }}
      ></div>
      <p
        className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto mt-10"
        style={{ opacity: 1, transform: "none" }}
      >
        Explore my professional experience and skills directly in your browser,
        or download a PDF copy for easy access anytime.
      </p>
      <div
        className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6"
        style={{ opacity: 1, transform: "none" }}
      >
        <button
          onClick={viewResume}
          className="flex items-center justify-center gap-2 h-11 px-6 py-3 text-lg font-medium text-white rounded-lg bg-gradient-to-br from-green-400 to-blue-600 hover:from-green-500 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-green-300 transition-colors"
        >
          <Eye className="h-6 w-6" />
          View Online
        </button>
        <button
          onClick={handleDownload}
          className="flex items-center gap-2 px-6 py-3 rounded-lg bg-gray-700 text-gray-200 hover:bg-gray-800 hover:text-white transition"
        >
          <Download className="h-6 w-6" />
          Download CV (.pdf)
        </button>
      </div>
    </div>
  </section>
);

export default Resume;
