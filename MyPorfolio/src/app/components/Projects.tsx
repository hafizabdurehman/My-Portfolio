"use client"
import React, { useState, useEffect } from 'react';
import { RiProjectorLine } from "react-icons/ri";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const Projects = () => {
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

    const element = document.getElementById('projects-section');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const projects = [
    {
      name: "E-Commerce Web",
      description: "A full-featured e-commerce platform with product browsing, cart, and checkout functionality.",
      technologies: ["Next.js", "Tailwind CSS", "TypeScript"],
      githubLink: "https://github.com/TayyabAziz11/hackathonUIUX",
      liveLink: "https://hackathon-uiux-nine.vercel.app/",
      image: "/E-commerce.PNG"
    },
    {
      name: "Restaurant Web App",
      description: "An interactive restaurant website with menu, reservation, and online ordering features.",
      technologies: [ "Next.js", "TypeScript", "Tailwind CSS"],
      githubLink: "https://github.com/TayyabAziz11/Restaurant-web",
      liveLink: "https://restaurant-web-ecru.vercel.app/",
      image: "/Resturantweb.PNG"
    },
    {
      name: "Movie Web Homepage",
      description: "Comprehensive movie information platform with search, ratings, and recommendations (Non-Responsive).",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
      githubLink: "https://github.com/TayyabAziz11/Movie-homepage",
      liveLink: "https://movie-homepage.vercel.app/",
      image: "/Movieweb.PNG"
    },
    {
      name: "Whitespace Web",
      description: "Whitespace web figma design (Non-responsive)",
      technologies: ["Next.js", "TypeScript" , "Tailwind CSS"],
      githubLink: "https://github.com/TayyabAziz11/Whitepace-Figma",
      liveLink: "https://whitepace-figma-omega.vercel.app/",
      image: "/Whitepaceweb.PNG"
    },
    {
      name: "My Resume",
      description: "My Resume created with HTML and css fully Responsive",
      technologies: ["HTML", "CSS"],
      githubLink: "https://github.com/TayyabAziz11/My-Resume",
      liveLink: "https://my-resume-silk-three.vercel.app/",
      image: "/my-resume.PNG"
    },
    {
      name: "Login Page",
      description: "Responsive Home Login Page",
      technologies: ["HTML", "CSS"],
      githubLink: "https://github.com/TayyabAziz11/Responsive-website",
      liveLink: "https://responsive-website-mauve-xi.vercel.app/",
      image: "/Loginpage.PNG"
    }
  ];

  return (
    <section id="projects" className="min-h-screen bg-gradient-to-b from-slate-100 to-white dark:from-slate-800 dark:to-slate-900 transition-all duration-500">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-2 mb-4">
              <RiProjectorLine size={30} className="text-blue-500" />
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white">
                My Projects
              </h2>
            </div>
            <p className="text-slate-700 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
              A collection of web development projects showcasing my skills and creativity.
            </p>
          </div>

          {/* Projects Grid */}
          <div 
            id="projects-section" 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {projects.map((project, index) => (
              <div
                key={project.name}
                className={`transform transition-all duration-500 ${
                  isVisible
                    ? 'translate-y-0 opacity-100'
                    : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="group relative bg-white dark:bg-slate-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
                  {/* Project Image Placeholder */}
                  <div className="aspect-video bg-slate-200 dark:bg-slate-700 flex items-center justify-center">
                    <img 
                      src={project.image} 
                      alt={project.name} 
                      className="w-full h-full object-fill"
                    />
                  </div>

                  {/* Project Details */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                      {project.name}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-300 mb-4 text-sm">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech) => (
                        <span 
                          key={tech} 
                          className="text-xs bg-slate-100 dark:bg-slate-700 px-2 py-1 rounded-full text-slate-700 dark:text-slate-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Project Links */}
                    <div className="flex justify-between items-center">
                      <a 
                        href={project.githubLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-slate-700 dark:text-white hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                      >
                        <FaGithub size={24} />
                      </a>
                      <a 
                        href={project.liveLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition-colors"
                      >
                        Live Demo <FaExternalLinkAlt size={16} />
                      </a>
                    </div>
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