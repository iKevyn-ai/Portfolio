import './App.css'
import { BrowserRouter as Router, Link, useLocation } from 'react-router-dom'
import Home from './components/Home'
import Cases from './components/Cases'
import About from './components/About'
import Contact from './components/Contact'
import Skills from './components/Skills'
import { useState, useEffect } from 'react'

function AppContent() {
  const location = useLocation();
  const [currentSection, setCurrentSection] = useState('home');

  useEffect(() => {
    console.log('Current screen width:', window.innerWidth);
    const handleResize = () => {
      console.log('Screen width changed to:', window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'cases', 'about', 'skills', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top >= 0 && rect.top <= window.innerHeight / 2;
        }
        return false;
      });
      if (current) setCurrentSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen w-full overflow-hidden relative flex">
      <div className="hidden sm:block fixed top-[8vh] right-[8vh] z-20">
        <button 
          onClick={() => scrollToSection('contact')} 
          className="group"
        >
          <div className="flex flex-col items-end">
            <span className="text-lg font-medium">contact me</span>
            <div className="flex items-center">
              <div className="w-12 h-[1px] bg-black ml-2 transform origin-right transition-all duration-300 group-hover:scale-x-150"></div>
            </div>
          </div>
        </button>
      </div>
      
      <nav className="hidden sm:hidden md:hidden lg:block navigation-menu absolute right-[8vh] top-1/2 transform -translate-y-1/2 space-y-4 text-lg z-10">
        <div className="flex flex-col space-y-6">
          <button onClick={() => scrollToSection('home')} className="nav-link hover:text-gray-400 transition-colors">home</button>
          <button onClick={() => scrollToSection('cases')} className="nav-link hover:text-gray-400 transition-colors">projects</button>
          <button onClick={() => scrollToSection('about')} className="nav-link hover:text-gray-400 transition-colors">about me</button>
          <button onClick={() => scrollToSection('skills')} className="nav-link hover:text-gray-400 transition-colors">skills</button>
          <button onClick={() => scrollToSection('contact')} className="nav-link hover:text-gray-400 transition-colors">contact</button>
        </div>
      </nav>

      <main className="w-full h-screen overflow-y-auto">
        <section id="home" className="h-screen">
          <Home />
        </section>
        <section id="cases" className="h-screen">
          <Cases />
        </section>
        <section id="about" className="h-screen">
          <About />
        </section>
        <section id="skills" className="h-screen">
          <Skills />
        </section>
        <section id="contact" className="h-screen">
          <Contact />
        </section>
      </main>
    </div>
  )
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  )
}

export default App