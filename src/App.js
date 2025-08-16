import React, { useEffect, useState } from "react";
import Footer from "./portfolio/Footer";
import CustomCursor from "./portfolio/CustomCursor";
import Header from "./portfolio/Header";
import Home from "./portfolio/Home";
import About from "./portfolio/About";
import Goals from "./portfolio/Goals/Goals";
import Experiences from "./portfolio/Experiences/Experiences";
import Projects from "./portfolio/Projects/Projects";
import Skills from "./portfolio/Skill/Skills";
import Testimonials from "./portfolio/Testimonials";
import Contact from "./portfolio/Contact";
import SocialLinks from "./portfolio/SocialLinks";
import Resume from "./portfolio/Resume/Resume";
import ScrollProgressBar from "./portfolio/ScrollProgressBar/ScrollProgressBar";

export default function App() {
    const [activeSection, setActiveSection] = useState('home');
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e) => {
        setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleLinkClick = (e, id) => {
        e.preventDefault();
        const element = document.getElementById(id);
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
        <div 
            className="bg-slate-900" 
            onMouseMove={handleMouseMove} 
            style={{
                background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(29, 78, 216, 0.15), transparent 80%)`
            }}
        >
            <ScrollProgressBar />
            <CustomCursor />
            <Header activeSection={activeSection} onLinkClick={handleLinkClick} />
            <main>
                <Home />
                <About />
                <Goals />
                <Experiences />
                <Projects />
                <Skills />
                <Resume />
                <Testimonials />
                <Contact />
            </main>
            <SocialLinks />
            <Footer />
        </div>
    );
}