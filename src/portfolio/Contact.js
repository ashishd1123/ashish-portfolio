import { Send } from "lucide-react";

const Contact = () => (
  <section
    id="contact"
    className="py-24 sm:py-32 relative bg-slate-800 text-white overflow-hidden"
  >
    <div className="container mx-auto text-center mb-12 px-4">
      <div style={{ opacity: 1, transform: "none" }}>
        <div class="inline-block">
          <div class="relative px-3 py-1 text-sm font-medium rounded-full bg-gradient-to-r from-teal-200/65 via-cyan-300/65 to-blue-400/65 backdrop-blur-sm border border-border mb-2">
            <span class="relative z-10 text-foreground/80 text-gray-100">
              Let's work together
            </span>
            <span class="absolute inset-0 rounded-full bg-gradient-to-r from-teal-400/20 via-cyan-500/20 to-blue-600/20 animate-pulse"></span>
          </div>
        </div>
      </div>
      <h2
        className="text-4xl md:text-5xl font-bold text-white"
        style={{ opacity: 1, transform: "none" }}
      >
        Get In Touch
      </h2>
      <div
        className="w-24 h-1.5 bg-gradient-to-r from-teal-400 via-cyan-500 to-blue-600 rounded-full mx-auto mt-2"
        style={{ opacity: 1, transform: "none" }}
      ></div>
    </div>
    <div className="container mx-auto grid md:grid-cols-2 gap-8 px-4">
      <div className="bg-slate-800/50 p-8 rounded-lg border border-slate-700">
        <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
        <div className="space-y-4">
          <p>
            <strong className="text-teal-400">Email:</strong>{" "}
            your.email@example.com
          </p>
          <p>
            <strong className="text-teal-400">LinkedIn:</strong>{" "}
            linkedin.com/in/yourprofile
          </p>
          <p>
            <strong className="text-teal-400">GitHub:</strong>{" "}
            github.com/yourusername
          </p>
        </div>
        <div className="mt-6">
          <h4 className="text-lg font-bold text-teal-400">Current Status</h4>
          <p className="flex items-center gap-2 mt-2">
            <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></span>
            Available for freelance work
          </p>
        </div>
      </div>
      <div className="bg-slate-800/50 p-8 rounded-lg border border-slate-700">
        <h3 className="text-2xl font-bold mb-6">Send Me a Message</h3>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Full Name *"
            required
            className="w-full bg-slate-700 border border-slate-600 rounded-lg p-3 focus:outline-none focus:border-teal-400"
          />
          <input
            type="email"
            placeholder="Email Address *"
            required
            className="w-full bg-slate-700 border border-slate-600 rounded-lg p-3 focus:outline-none focus:border-teal-400"
          />
          <input
            type="text"
            placeholder="Subject"
            className="w-full bg-slate-700 border border-slate-600 rounded-lg p-3 focus:outline-none focus:border-teal-400"
          />
          <textarea
            placeholder="Your detailed message here..."
            rows="5"
            className="w-full bg-slate-700 border border-slate-600 rounded-lg p-3 focus:outline-none focus:border-teal-400"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-teal-500 to-cyan-500 hover:opacity-90 text-white font-bold py-3 px-6 rounded-lg transition-opacity duration-300 flex items-center justify-center gap-2"
          >
            Send Message <Send size={18} />
          </button>
        </form>
      </div>
    </div>
  </section>
);

export default Contact;
