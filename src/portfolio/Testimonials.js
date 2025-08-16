import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";

import KhushbooProfile from "../Assets/profile/khushbo_profile.jpeg";
import PrakherProfile from "../Assets/profile/prakher_profile.jpeg";
import ShubhamDave from "../Assets/profile/shubham_dave_profile.jpeg";
import KartheekProfile from "../Assets/profile/kartheek_profile.jpeg";
import MichaelProfile from "../Assets/profile/michal_dillon.jpeg";
import AnamikaProfile from "../Assets/profile/anamika_profile.jpeg";
import SamikshaProfile from "../Assets/profile/samiksha_profile.jpeg";

const testimonialsData = [
  {
    name: "Prakher Mehrotra",
    role: "Project Lead, Thales DIS",
    text: "Working with them was both professional and seamless. Their strong technical skills and ability to quickly adapt to evolving requirements were truly impressive.",
    avatar: PrakherProfile,
  },
  {
    name: "Samiksha Shukla",
    role: "Project Lead, Nagarro",
    text: "Clear communication, attention to detail, and a commitment to delivering on time made them an invaluable part of the project team.",
    avatar: SamikshaProfile,
  },
  {
    name: "Shubham Dave",
    role: "Senior Software Engineer, Backbase",
    text: "Their ability to transform complex Figma designs into flawless, responsive interfaces was nothing short of outstanding.",
    avatar: ShubhamDave,
  },
  {
    name: "Khushboo Agrawal",
    role: "Staff Engineer, Nagarro",
    text: "Their problem-solving skills, precision, and proactive approach consistently brought high-quality results to the table.",
    avatar: KhushbooProfile,
  },
  {
    name: "Srinivas Kartheek Turlapati",
    role: "Project Manager, Backbase",
    text: "A dependable developer who combines strong technical expertise with excellent collaboration, ensuring projects run smoothly from start to finish.",
    avatar: KartheekProfile,
  },
  {
    name: "Michael Dillon",
    role: "Principal Frontend Engineer, Backbase",
    text: "Consistently delivers clean, maintainable code while keeping a sharp focus on performance and user experience.",
    avatar: MichaelProfile,
  },
  {
    name: "Anamika Saroha",
    role: "Senior Technical Lead, Thales DIS",
    text: "Their ability to bridge business requirements with technical solutions was outstanding. They ensured delivery aligned perfectly with client expectations.",
    avatar: AnamikaProfile,
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const nextTestimonial = () =>
    setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);

  const prevTestimonial = () =>
    setCurrentIndex(
      (prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length
    );

  // Autoplay effect
  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(nextTestimonial, 5000);
    return () => clearInterval(interval);
  }, [isHovered]);

  return (
    <section
      id="testimonials"
      className="py-24 sm:py-32 relative bg-gray-800 text-white overflow-hidden"
    >
      {/* Header */}
      <div className="container mx-auto text-center mb-12 px-4">
        <div className="inline-block relative px-3 py-1 text-sm font-medium rounded-full bg-gradient-to-r from-teal-200/65 via-cyan-300/65 to-blue-400/65 backdrop-blur-sm border border-border mb-2">
          <span className="relative z-10 text-gray-100">
            What My Collaborators Say
          </span>
          <span className="absolute inset-0 rounded-full bg-gradient-to-r from-teal-400/20 via-cyan-500/20 to-blue-600/20 animate-pulse"></span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold">Testimonials</h2>
        <div className="w-24 h-1.5 bg-gradient-to-r from-teal-400 via-cyan-500 to-blue-600 rounded-full mx-auto mt-2"></div>
      </div>

      {/* Carousel */}
      <div
        className="container mx-auto relative max-w-4xl px-4"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="overflow-hidden relative">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
          >
            {testimonialsData.map((testimonial, index) => (
              <div key={index} className="w-full flex-shrink-0 px-4">
                <div className="bg-zinc-800/50 p-8 rounded-lg border border-slate-700 text-center ">
                  <p className="text-lg text-gray-300 italic mb-6">
                    "{testimonial.text}"
                  </p>
                  <div className="flex items-center justify-center">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full mr-4"
                    />
                    <div>
                      <h4 className="font-bold">{testimonial.name}</h4>
                      <p className="text-teal-400">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Controls */}
        <button
          onClick={prevTestimonial}
          className="absolute top-1/2 -left-4 md:-left-12 -translate-y-1/2 bg-slate-700 p-2 rounded-full hover:bg-teal-500 transition-colors"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={nextTestimonial}
          className="absolute top-1/2 -right-4 md:-right-12 -translate-y-1/2 bg-slate-700 p-2 rounded-full hover:bg-teal-500 transition-colors"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </section>
  );
};

export default Testimonials;
