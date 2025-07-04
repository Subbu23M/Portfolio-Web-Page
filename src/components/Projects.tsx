import { ExternalLink, Github, Code, Smartphone, Globe } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "WNO News Portal - Web Application",
      description: "Developed a role-based admin news portal from scratch using a Figma design, enabling reporters, editors, and admins to securely log in, post, review, and publish news content. Integrated AWS for hosting and storage, with dynamic views and full CRUD functionality tailored to each user role.",
      technologies: ["React", "Node.js", "MongoDB", "Redux-Toolkit", "JWT", "Material-UI"],
      image: "https://lh3.googleusercontent.com/d/1AHBNCVgpbYlapt9crXA-a_a8YkRDTeoK",
      demo: "https://drive.google.com/file/d/1Z6juz8a-fNWUviKrgFH3LT_rP1_ssbRw/view?usp=sharing",
      icon: <Globe className="w-5 h-5" />
    },
    {
      title: "Debounce Hook Utility",
      description: "Custom React hook for debouncing input values, optimizing performance in search and form interactions. Built with Vite and React for blazing-fast development.",
      technologies: ["React", "Vite", "JavaScript", "Lodash", "Custom Hooks"],
      image: "https://codetofun.com/wp-content/themes/codetofun/images/large/debounce.webp",
      github: "https://github.com/Subbu23M/Debounce-Hook-JS-2023",
      demo: "https://debounce-hook-js-2023.vercel.app/",
      icon: <Code className="w-5 h-5" />
    }
  ];

  return (
    <section id="projects" className="py-20 bg-slate-800/50 pt-10">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              A showcase of my recent work and technical expertise
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group bg-slate-800/50 border border-slate-700/50 rounded-xl overflow-hidden hover:border-slate-600 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
              >
                <div className="relative w-full h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    onError={(e) => {
                      // Fallback image if the original image fails to load
                      e.currentTarget.src = "https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=800";
                    }}
                  />
                  <div className="absolute top-4 right-4 bg-slate-900/80 backdrop-blur-sm rounded-full p-2 text-white">
                    {project.icon}
                  </div>
                  {/* Overlay for better contrast */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-4 leading-relaxed text-sm">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-slate-700/50 text-gray-300 px-3 py-1 rounded-full text-xs hover:bg-slate-600/50 hover:text-white transition-colors duration-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex space-x-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-200"
                    >
                      <Github size={18} />
                      <span>Code</span>
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors duration-200"
                    >
                      <ExternalLink size={18} />
                      <span>Demo</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;