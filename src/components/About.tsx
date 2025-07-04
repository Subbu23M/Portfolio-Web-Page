import React from 'react';
import { Code, Lightbulb, Target, Users } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-slate-800/50 pt-32">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              About Me
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Passionate developer with a drive for creating innovative solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <div>
              <h3 className="text-3xl font-bold text-white mb-6">
                Building Digital Excellence
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                💼 Frontend Developer I specialize in building responsive websites and web applications with a focus on performance, accessibility, and user experience. My expertise includes integrating REST APIs, managing complex state with Redux Toolkit, creating reusable UI components, and implementing secure user authentication and authorization flows.
              </p>
              <p className="text-gray-300 mb-8 leading-relaxed">
                With 4 years and 4 months of hands-on experience in front-end development using modern JavaScript frameworks, I've delivered successful solutions across domains such as E-Commerce, Job Portal CRMs, OTT platforms, and News Channel admin portals.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center space-x-2 bg-blue-600/20 border border-blue-500/30 rounded-full px-4 py-2">
                  <Code size={16} className="text-blue-400" />
                  <span className="text-white text-sm">Clean Code</span>
                </div>
                <div className="flex items-center space-x-2 bg-purple-600/20 border border-purple-500/30 rounded-full px-4 py-2">
                  <Lightbulb size={16} className="text-purple-400" />
                  <span className="text-white text-sm">Innovation</span>
                </div>
                <div className="flex items-center space-x-2 bg-green-600/20 border border-green-500/30 rounded-full px-4 py-2">
                  <Target size={16} className="text-green-400" />
                  <span className="text-white text-sm">Goal-Oriented</span>
                </div>
                <div className="flex items-center space-x-2 bg-orange-600/20 border border-orange-500/30 rounded-full px-4 py-2">
                  <Users size={16} className="text-orange-400" />
                  <span className="text-white text-sm">Team Player</span>
                </div>
              </div>
            </div>

            {/* Right Column - Stats/Highlights */}
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-xl p-6 text-center hover:scale-105 transition-transform duration-300">
                <div className="text-3xl font-bold text-white mb-2">4+</div>
                <div className="text-gray-300">Years Experience</div>
              </div>
              <div className="bg-gradient-to-br from-green-500/20 to-teal-500/20 border border-green-500/30 rounded-xl p-6 text-center hover:scale-105 transition-transform duration-300">
                <div className="text-3xl font-bold text-white mb-2">3+</div>
                <div className="text-gray-300">Projects Completed</div>
              </div>
              <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-xl p-6 text-center hover:scale-105 transition-transform duration-300">
                <div className="text-3xl font-bold text-white mb-2">15+</div>
                <div className="text-gray-300">Technologies</div>
              </div>
              <div className="bg-gradient-to-br from-orange-500/20 to-red-500/20 border border-orange-500/30 rounded-xl p-6 text-center hover:scale-105 transition-transform duration-300">
                <div className="text-3xl font-bold text-white mb-2">100%</div>
                <div className="text-gray-300">Dedication</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;