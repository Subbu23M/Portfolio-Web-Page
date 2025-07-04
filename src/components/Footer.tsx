import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 border-t border-slate-800 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Brand */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Subramanyam D
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Frontend Developer passionate about creating innovative solutions and exceptional user experiences.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {['About', 'Skills', 'Projects', 'Contact'].map((link) => (
                  <li key={link}>
                    <button
                      onClick={() => {
                        const element = document.getElementById(link.toLowerCase());
                        if (element) {
                          element.scrollIntoView({ behavior: 'smooth' });
                        }
                      }}
                      className="text-gray-300 hover:text-blue-400 transition-colors duration-200"
                    >
                      {link}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social & Contact */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Connect</h4>
              <div className="flex space-x-4 mb-4">
                <a
                  href="https://www.linkedin.com/in/subramanyam-d-b16aa21b4/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center transition-colors duration-200"
                >
                  <Linkedin className="w-5 h-5 text-white" />
                </a>
                <a
                  href="https://github.com/Subbu23M"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-full flex items-center justify-center transition-colors duration-200"
                >
                  <Github className="w-5 h-5 text-white" />
                </a>
                <a
                  href="mailto:subramanyamdindukurthi26m@gmail.com"
                  className="w-10 h-10 hidden bg-green-600 hover:bg-green-700 rounded-full flex items-center justify-center transition-colors duration-200"
                >
                  <Mail className="w-5 h-5 text-white" />
                </a>
              </div>
              <p className="text-gray-300 text-sm hidden">
                subramanyamdindukurthi26m@gmail.com
              </p>
            </div>
          </div>

          <div className="border-t border-slate-800 mt-8 pt-8 text-center">
            <p className="text-gray-400 flex items-center justify-center space-x-2">
              <span>© {currentYear} Subramanyam D. Made with</span>
              <Heart className="w-4 h-4 text-red-500" />
              <span>using React & TypeScript</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;