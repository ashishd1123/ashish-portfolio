import { Suspense, useEffect, useState } from "react";
import Footer from "./Portfolio/Footer/Footer";
import CustomCursor from "./Portfolio/CustomCursor";
import Header from "./Portfolio/Header/Header";
import Home from "./Portfolio/Home/Home";
import About from "./Portfolio/About/About";
import Goals from "./Portfolio/Goals/Goals";
import Experiences from "./Portfolio/Experiences/Experiences";
import Projects from "./Portfolio/Projects/Projects";
import Skills from "./Portfolio/Skill/Skills";
import Testimonials from "./Portfolio/Testimonials/Testimonials";
import Contact from "./Portfolio/Contact/Contact";
import SocialLinks from "./Portfolio/SocialLinks/SocialLinks";
import Resume from "./Portfolio/Resume/Resume";
import ScrollProgressBar from "./Portfolio/ScrollProgressBar/ScrollProgressBar";
import Certifications from "./Portfolio/Certifications/Certifications";
import { useTranslation } from 'react-i18next';
import i18next from "i18next";

export default function App() {
    const [activeSection, setActiveSection] = useState('home');
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { i18n } = useTranslation();

  useEffect(() => {
    if (localStorage.getItem("i18nextLng")?.length >= 2) {
      i18next.changeLanguage(localStorage.getItem("i18nextLng"));
    }
  }, []);

    const handleMouseMove = (e) => {
        setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleLanguageChange = (lng) => {
        i18n.changeLanguage(lng);
    };

    const handleLinkClick = (e, id) => {
        e.preventDefault();
        const element = document.getElementById(id.slice(1));
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { rootMargin: '-40% 0px -60% 0px' }
        );

        const sections = document.querySelectorAll('section');
        sections.forEach(section => {
            if (section) observer.observe(section);
        });

        return () => sections.forEach(section => {
            if (section) observer.unobserve(section);
        });
    }, []);

    return (
        <Suspense fallback={null}>
        <div 
            className="bg-slate-900" 
            onMouseMove={handleMouseMove} 
            style={{
                background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(29, 78, 216, 0.15), transparent 80%)`
            }}
        >
            <ScrollProgressBar />
            <CustomCursor />
            <Header activeSection={activeSection} onLinkClick={handleLinkClick} onLanguageSelect={(lang) => handleLanguageChange(lang)}/>
            <main>
                <Home />
                <About />
                <Goals />
                <Experiences />
                <Projects />
                <Skills />
                <Resume />
                <Certifications />
                <Testimonials />
                <Contact />
            </main>
            <SocialLinks />
            <Footer />
        </div>
        </Suspense>
    );
}