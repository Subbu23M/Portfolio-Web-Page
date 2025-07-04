import React from 'react';
import { Code, Database, Globe, Smartphone, Server, Palette } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Frontend Development",
      skills: ["React", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS","MUI","Bootstrap4"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Tools & Technologies",
      skills: ["Git", "GitHub", "VS Code", "npm", "Vite", "Postman","Jira","Google Workspace"],
      color: "from-teal-500 to-blue-500"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-slate-900/50 pt-32">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Technical Skills
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              A comprehensive toolkit for building modern applications
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className="group bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 hover:border-slate-600 transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${category.color} mb-4 text-white group-hover:scale-110 transition-transform duration-300`}>
                  {category.icon}
                </div>
                
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
                  {category.title}
                </h3>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="bg-slate-700/50 text-gray-300 px-3 py-1 rounded-full text-sm hover:bg-slate-600/50 hover:text-white transition-colors duration-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;