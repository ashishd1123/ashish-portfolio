import {
  Linkedin,
  Mail,
  MapPin,
  PhoneCallIcon,
} from "lucide-react";

const Contact = () => (
  <section
    id="contact"
    className="py-24 sm:py-32 bg-gray-800 text-white overflow-hidden"
  >
    <div className="container mx-auto px-4">
      {/* Section Header */}
      <div className="text-center mb-16">
        <div className="inline-block">
          <div className="relative px-3 py-1 text-sm font-medium rounded-full bg-gradient-to-r from-teal-200/65 via-cyan-300/65 to-blue-400/65 backdrop-blur-sm border border-slate-700 mb-2">
            <span className="relative z-10 text-gray-100">
              Let's work together
            </span>
            <span className="absolute inset-0 rounded-full bg-gradient-to-r from-teal-400/20 via-cyan-500/20 to-blue-600/20 animate-pulse"></span>
          </div>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-white">
          Get In Touch
        </h2>
        <div className="w-24 h-1.5 bg-gradient-to-r from-teal-400 via-cyan-500 to-blue-600 rounded-full mx-auto mt-4"></div>
      </div>

      {/* Contact Information Card */}
      {/* Centered and responsive card for contact details */}
      <div className="bg-zinc-800/70 backdrop-blur-md border border-zinc-700/50 rounded-xl p-6 sm:p-8 shadow-xl mt-10 max-w-xl w-full mx-auto">
        <h3 className="text-2xl font-semibold text-white mb-6 text-center">
          Contact Information
        </h3>
        <ul className="space-y-5 mb-8">
          {/* Email */}
          <li className="flex items-start gap-4">
            <Mail className="text-teal-400 w-5 h-5 mt-1 flex-shrink-0" />
            <div>
              <p className="text-sm text-zinc-400">Email</p>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-200 hover:text-teal-300 transition-colors break-all"
                href="mailto:ashishd25992@gmail.com"
              >
                ashishd25992@gmail.com
              </a>
            </div>
          </li>
          {/* LinkedIn */}
          <li className="flex items-start gap-4">
            <Linkedin className="text-teal-400 w-5 h-5 mt-1 flex-shrink-0" />
            <div>
              <p className="text-sm text-zinc-400">LinkedIn</p>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-200 hover:text-teal-300 transition-colors break-all"
                href="https://linkedin.com/in/ashish-dubey-707767107"
              >
                https://linkedin.com/in/ashish-dubey-707767107
              </a>
            </div>
          </li>
          {/* Phone */}
          <li className="flex items-start gap-4">
            <PhoneCallIcon className="text-teal-400 w-5 h-5 mt-1 flex-shrink-0" />
            <div>
              <p className="text-sm text-zinc-400">Mobile</p>
              <a
                href="tel:+918737980888"
                className="text-zinc-200 hover:text-teal-300 transition-colors"
              >
                +91 873-798-0888
              </a>
            </div>
          </li>
          {/* Address */}
          <li className="flex items-start gap-4">
            <MapPin className="text-teal-400 w-5 h-5 mt-1 flex-shrink-0" />
            <div>
              <p className="text-sm text-zinc-400">Address</p>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-200 hover:text-teal-300 transition-colors"
                href="https://www.google.com/maps/search/?api=1&query=Hyderabad,Telangana,500037,India"
              >
                Hyderabad, Telangana, 500037, India
              </a>
            </div>
          </li>
        </ul>
        {/* Availability Status */}
        <div className="border-t border-zinc-700/50 pt-6">
          <h4 className="text-lg font-medium text-white mb-3 text-center">
            Current Status
          </h4>
          <div className="flex items-center justify-center gap-2">
            <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
            <p className="text-sm text-zinc-300 text-center">
              Available for new opportunities
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);
export default Contact;
