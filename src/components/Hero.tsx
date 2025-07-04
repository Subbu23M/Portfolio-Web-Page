import React from 'react';
import { ChevronDown, Github, Linkedin, Mail, Phone } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-teal-600/20 animate-pulse"></div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="block">Subramanyam D</span>
            <span className="block text-3xl md:text-4xl text-blue-400 mt-2">
              Frontend Web Developer
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            💻 Crafting intuitive and responsive user interfaces that bring ideas to life. 🚀 Passionate about turning pixels into purposeful, performant web experiences.
          </p>

          {/* Navigation Menu */}
          <div className="flex justify-center space-x-8 mb-8">
            {['About', 'Skills', 'Projects', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-gray-300 hover:text-blue-400 transition-all duration-300 font-medium text-lg relative group px-4 py-2"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-12">
            <a
              href="https://www.linkedin.com/in/subramanyam-d-b16aa21b4/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105"
            >
              <Linkedin size={20} />
              <span className="hidden sm:inline">LinkedIn</span>
            </a>
            <a
              href="https://github.com/Subbu23M"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center space-x-2 bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105"
            >
              <Github size={20} />
              <span className="hidden sm:inline">GitHub</span>
            </a>
            <a
              href="mailto:subramanyamdindukurthi26m@gmail.com"
              className="group flex items-center space-x-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105"
            >
              <Mail size={20} />
              <span className="hidden sm:inline">Email</span>
            </a>
          </div>

          {/* CTA Button */}
          <button
            onClick={scrollToAbout}
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <span>Explore My Work</span>
            <ChevronDown size={20} />
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown size={32} className="text-white/60" />
      </div>
    </section>
  );
};

export default Hero;