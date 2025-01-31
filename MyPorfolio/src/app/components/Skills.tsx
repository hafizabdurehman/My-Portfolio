"use client"
import React, { useState, useEffect } from 'react';
import { RiFileList3Fill } from "react-icons/ri";
import { 
  SiHtml5, 
  SiCss3, 
  SiJavascript, 
  SiTypescript, 
  SiNextdotjs,
  SiTailwindcss,
  SiReact,
  SiGit,
  SiGithub,
  SiVisualstudiocode,
  SiFigma
} from "react-icons/si";

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const element = document.getElementById('skills-section');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const skills = [
    { name: 'HTML5', icon: <SiHtml5 size={40} className="text-[#E34F26]" /> },
    { name: 'CSS3', icon: <SiCss3 size={40} className="text-[#1572B6]" /> },
    { name: 'JavaScript', icon: <SiJavascript size={40} className="text-[#F7DF1E]" /> },
    { name: 'TypeScript', icon: <SiTypescript size={40} className="text-[#3178C6]" /> },
    { name: 'Next.js', icon: <SiNextdotjs size={40} className="dark:text-white text-black" /> },
    { name: 'React', icon: <SiReact size={40} className="text-[#61DAFB]" /> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss size={40} className="text-[#06B6D4]" /> },
    { name: 'Git', icon: <SiGit size={40} className="text-[#F05032]" /> },
    { name: 'GitHub', icon: <SiGithub size={40} className="dark:text-white text-black" /> },
    { name: 'VS Code', icon: <SiVisualstudiocode size={40} className="text-[#007ACC]" /> },
    { name: 'Figma', icon: <SiFigma size={40} className="text-[#F24E1E]" /> }
  ];

  return (
    <section id="skills" className="min-h-screen bg-gradient-to-b from-white to-slate-100 dark:from-slate-900 dark:to-slate-800 transition-all duration-500">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-2 mb-4">
              <RiFileList3Fill size={30} className="text-blue-500" />
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white">
                Technical Skills
              </h2>
            </div>
            <p className="text-slate-700 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
              My technical toolkit includes a wide range of modern web development technologies and tools.
            </p>
          </div>

          {/* Skills Grid */}
          <div 
            id="skills-section" 
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8"
          >
            {skills.map((skill, index) => (
              <div
                key={skill.name}
                className={`transform transition-all duration-500 ${
                  isVisible
                    ? 'translate-y-0 opacity-100'
                    : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="group relative bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col items-center justify-center gap-3">
                  <div className="transform transition-transform duration-300 group-hover:scale-110">
                    {skill.icon}
                  </div>
                  <h3 className="text-sm font-medium text-slate-900 dark:text-white text-center">
                    {skill.name}
                  </h3>
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