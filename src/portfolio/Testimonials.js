import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const Testimonials = () => {
  const testimonialsData = [
    {
      name: "John Smith",
      role: "Head of IT, Supra Solutions Co.",
      text: "Working with them was very professional and efficient. They have excellent technical skills and a remarkable ability to adapt to new challenges.",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      name: "Michael Chen",
      role: "Project Manager, Agile Creators",
      text: "As a Project Manager, I valued their clear communication and commitment to deadlines. A reliable developer who truly understands the project's vision.",
      avatar: "https://randomuser.me/api/portraits/men/34.jpg",
    },
    {
      name: "Sophia Rodriguez",
      role: "Lead UI/UX Designer, Creative Minds",
      text: "It's rare to find a developer with such a keen eye for design. They brought our Figma designs to life with pixel-perfect accuracy.",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      name: "David Lee",
      role: "CTO, InnovateTech",
      text: "Their problem-solving ability and meticulousness consistently exceeded our expectations. A pleasure to have on the team.",
      avatar: "https://randomuser.me/api/portraits/men/36.jpg",
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () =>
    setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
  const prevTestimonial = () =>
    setCurrentIndex(
      (prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length
    );

  return (
    <section
      id="testimonials"
      className="py-24 sm:py-32 relative bg-slate-800 text-white overflow-hidden"
    >
      <div className="container mx-auto text-center mb-12 px-4">
        <div style={{ opacity: 1, transform: "none" }}>
          <div class="inline-block">
            <div class="relative px-3 py-1 text-sm font-medium rounded-full bg-gradient-to-r from-teal-200/65 via-cyan-300/65 to-blue-400/65 backdrop-blur-sm border border-border mb-2">
              <span class="relative z-10 text-foreground/80 text-gray-100">
                What My Collaborators Say
              </span>
              <span class="absolute inset-0 rounded-full bg-gradient-to-r from-teal-400/20 via-cyan-500/20 to-blue-600/20 animate-pulse"></span>
            </div>
          </div>
        </div>

        <h2
          className="text-4xl md:text-5xl font-bold text-white"
          style={{ opacity: 1, transform: "none" }}
        >
          Testimonials
        </h2>
        <div
          className="w-24 h-1.5 bg-gradient-to-r from-teal-400 via-cyan-500 to-blue-600 rounded-full mx-auto mt-2"
          style={{ opacity: 1, transform: "none" }}
        ></div>
      </div>
      <div className="container mx-auto relative max-w-4xl px-4">
        <div className="overflow-hidden relative h-64">
          {testimonialsData.map((testimonial, index) => (
            <div
              key={index}
              className={`absolute w-full transition-opacity duration-500 ease-in-out ${
                index === currentIndex ? "opacity-100" : "opacity-0"
              }`}
            >
              <div className="bg-slate-800 p-8 rounded-lg border border-slate-700 text-center">
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
                    <h4 className="font-bold text-white">{testimonial.name}</h4>
                    <p className="text-teal-400">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
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
