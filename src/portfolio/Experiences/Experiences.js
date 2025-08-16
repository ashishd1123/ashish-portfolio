import { Briefcase } from "lucide-react";
import ExperienceItem from "./ExperienceItem";

const Experiences = () => {
const experienceData = [
    {
      title: "Senior Software Engineer",
      company: "Thales DIS Technology India Pvt. Ltd",
      duration: "Apr 2021 – Present",
      description: "Spearheading feature development for the flagship SafeNet Trusted Access (STA) platform, focusing on robust architecture and scalable UI components. I play a vital role in enhancing application security and performance, while mentoring team members to elevate our collective technical capabilities and drive product innovation.",
      points: [
        "Led the design and development of SafeNet Trusted Access (STA), a cloud-based access management service integrating SSO and enhanced security measures.",
        "Developed reusable UI components for data input and calculations, ensuring consistency across multiple applications.",
        "Troubleshot and resolved critical development and testing issues, ensuring timely project delivery.",
        "Mentored team members, enhancing overall productivity and technical capabilities.",
        "Automated tests using Selenium, Karma, and Cucumber, reducing manual QA efforts by 30%.",
      ],
    },
    {
      title: "Senior Software Engineer",
      company: "Thales DIS Technology India Pvt. Ltd",
      duration: "Apr 2020 – Apr 2021",
      description: "Focused on the front-end development of secure, cloud-based access management solutions. My primary contributions involved building high-performance, cross-platform compatible UI components with React and Redux, ensuring seamless API integration and significantly improving code quality through rigorous code reviews.",
      points: [
        "Designed and developed secure cloud-based access management solutions for Reverse Proxy and Agent Admin projects.",
        "Built high-performance front-end components using React.js and Redux with cross-platform compatibility.",
        "Collaborated with backend teams for seamless API integration and real-time data synchronization.",
        "Enhanced code quality via code reviews and debugging, reducing production issues by 25%.",
      ],
    },
    {
      title: "Software Engineer",
      company: "ThinkSys Solution Pvt. Ltd",
      duration: "Oct 2019 – Mar 2020",
      description: "Specialized in front-end development, creating dynamic and responsive UI components using Angular and Bootstrap. I was instrumental in implementing interactive data visualizations with Highcharts.js and resolving key performance bottlenecks, directly contributing to a more stable and user-friendly application.",
      points: [
        "Developed and deployed Angular UI components, streamlining project workflows.",
        "Built responsive Bootstrap-based UI with interactive data visualizations using Highcharts.js.",
        "Debugged and resolved key functionality issues, improving overall application performance.",
      ],
    },
    {
      title: "Software Developer",
      company: "Craterzone Pvt. Ltd. (BigOhTech Pvt. Ltd.)",
      duration: "Jan 2017 – Oct 2019",
      description: "As a versatile developer, I contributed to the end-to-end development of diverse applications for both government and commercial clients. I was deeply involved in the agile development lifecycle, from sprint planning to delivery, utilizing Angular and React.js to build robust and efficient solutions.",
      points: [
        "Played a pivotal role in application design and development for government and commercial projects.",
        "Led sprint planning sessions and contributed to agile ceremonies to ensure timely delivery.",
        "Built robust applications leveraging Angular and React.js, reducing overall development cycles.",
      ],
    },
  ];


  return (
    <section id="experiences" className="py-24 sm:py-32 bg-gray-800 text-white overflow-hidden">
      <div className="container mx-auto text-center mb-16 px-4">
        <div className="inline-block">
          <div className="relative px-3 py-1 text-sm font-medium rounded-full bg-gradient-to-r from-teal-200/65 via-cyan-300/65 to-blue-400/65 backdrop-blur-sm border border-slate-700 mb-2">
            <span className="relative z-10 text-gray-100">My Professional Journey</span>
            <span className="absolute inset-0 rounded-full bg-gradient-to-r from-teal-400/20 via-cyan-500/20 to-blue-600/20 animate-pulse"></span>
          </div>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-white">Work Experience</h2>
        <div className="w-24 h-1.5 bg-gradient-to-r from-teal-400 via-cyan-500 to-blue-600 rounded-full mx-auto mt-4"></div>
      </div>

      <div className="container mx-auto px-4">
        <div className="relative wrap overflow-hidden p-4 md:p-10 h-full">
          <div className="absolute border-2-2 border-opacity-20 border-slate-700 h-full border left-5 md:left-1/2"></div>
          
          {experienceData.map((exp, index) => (
            <div
              key={index}
              className={`mb-8 flex md:justify-between w-full ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              <div className="hidden md:block w-5/12"></div>

              <div className="z-20 flex items-center justify-center order-1 bg-teal-500 shadow-xl w-10 h-10 rounded-full absolute left-5 -translate-x-1/2 md:static md:translate-x-0">
                <Briefcase className="h-5 w-5 text-white" />
              </div>

              <div className="order-1 w-full md:w-5/12 px-2 md:px-6 py-4">
                <ExperienceItem
                  title={exp.title}
                  company={exp.company}
                  duration={exp.duration}
                  description={exp.description}
                  points={exp.points}
                  index={index}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experiences;
