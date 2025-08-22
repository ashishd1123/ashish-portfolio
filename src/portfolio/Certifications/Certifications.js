import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import { CertificationsList } from '../../Data/certification_list_data';

const Certifications = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const nextCertification = () =>
    setCurrentIndex((prev) => (prev + 1) % CertificationsList.length);

  const prevCertification = () =>
    setCurrentIndex(
      (prev) =>
        (prev - 1 + CertificationsList.length) % CertificationsList.length
    );

  // Autoplay effect
  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(nextCertification, 5000);
    return () => clearInterval(interval);
  }, [isHovered]);

  return (
    <section
      id="certifications"
      className="py-24 sm:py-32 relative bg-gray-800 text-white overflow-hidden"
    >
      {/* Header */}
      <div className="container mx-auto text-center mb-12 px-4">
        <div className="inline-block relative px-3 py-1 text-sm font-medium rounded-full bg-gradient-to-r from-teal-200/65 via-cyan-300/65 to-blue-400/65 backdrop-blur-sm border border-border mb-2">
          <span className="relative z-10 text-gray-100">
            Achievements & Certifications
          </span>
          <span className="absolute inset-0 rounded-full bg-gradient-to-r from-teal-400/20 via-cyan-500/20 to-blue-600/20 animate-pulse"></span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold">Certifications</h2>
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
            {CertificationsList.map((certification, index) => (
              <div key={index} className="w-full flex-shrink-0 px-4">
                <div className="p-8 rounded-lg border border-slate-700 text-center ">
                  <div className="pb-4 rounded-lg text-center flex items-center justify-center">
                    <div>
                      <h1 className="font-bold text-3xl">{certification.name}</h1>
                      <p className="text-teal-400 text-xl">{certification.vendor}</p>
                    </div>
                  </div>
                  <img
                    src={`${certification.cert}?q=80&w=2070&auto=format&fit=crop`}
                    alt={certification.name}
                    className="w-full h-full object-cover rounded-lg group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Controls */}
        <button
          onClick={prevCertification}
          className="absolute top-1/2 -left-4 md:-left-12 -translate-y-1/2 bg-slate-700 p-2 rounded-full hover:bg-teal-500 transition-colors"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={nextCertification}
          className="absolute top-1/2 -right-4 md:-right-12 -translate-y-1/2 bg-slate-700 p-2 rounded-full hover:bg-teal-500 transition-colors"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </section>
  );
};

export default Certifications;
