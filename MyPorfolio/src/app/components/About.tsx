"use client"
import React, { useState, useEffect } from 'react';
import { IoPersonSharp } from "react-icons/io5";
import Image from "next/image";

const About = () => {
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

    const element = document.getElementById('about-section');
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
    "Problem Solving",
    "Team Collaboration",
    "Clean Code",
    "UI/UX Design",
    "Responsive Design",
    "Performance Optimization"
  ];

  return (
    <section id="about" className="min-h-screen bg-gradient-to-b from-white to-slate-100 dark:from-slate-900 dark:to-slate-800 transition-all duration-500">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-2 mb-4">
              <IoPersonSharp size={30} className="text-blue-500" />
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white">
                About Me
              </h2>
            </div>
            <p className="text-slate-700 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Get to know me and my journey in web development
            </p>
          </div>

          {/* About Content */}
          <div 
            id="about-section"
            className={`grid grid-cols-1 lg:grid-cols-5 gap-12 items-center transform transition-all duration-500 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            {/* Image Column - Takes up 2 columns */}
            <div className="lg:col-span-2 flex justify-center">
              <div className="relative w-64 h-64">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-2xl opacity-20 animate-pulse dark:opacity-30"></div>
                <Image
                  src="/tayyab.png"
                  width={500}
                  height={256}
                  alt="Tayyab Aziz"
                  className="rounded-full relative z-10 transition-transform duration-500 hover:scale-105"
                  priority
                />
              </div>
            </div>

            {/* Content Column - Takes up 3 columns */}
            <div className="lg:col-span-3 space-y-6">
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                  Frontend Developer & UI Designer
                </h3>
                <p className="text-slate-700 dark:text-slate-300 mb-6">
                  Hello! I&apos;m a passionate frontend developer with a keen eye for creating beautiful and functional web experiences. My journey in web development started with a curiosity for building things that live on the internet, and it has evolved into a professional pursuit of crafting user-centric applications.
                </p>
                <p className="text-slate-700 dark:text-slate-300 mb-6">
                  I specialize in building responsive websites that provide seamless user experiences. My approach combines technical skills with creative problem-solving to deliver solutions that meet both user needs and business goals.
                </p>
              </div>

              {/* Key Skills Section */}
              <div className="mt-8">
                <h4 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">
                  Key Strengths
                </h4>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {skills.map((skill) => (
                    <div 
                      key={skill}
                      className="bg-white dark:bg-slate-800 px-4 py-3 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 text-center"
                    >
                      <span className="text-slate-700 dark:text-slate-300 text-sm">
                        {skill}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Info */}
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-[1px] rounded-lg">
                  <div className="bg-white dark:bg-slate-800 p-4 rounded-lg">
                    <h5 className="text-sm font-semibold text-slate-900 dark:text-white mb-1">Projects Completed</h5>
                    <span className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">15+</span>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-[1px] rounded-lg">
                  <div className="bg-white dark:bg-slate-800 p-4 rounded-lg">
                    <h5 className="text-sm font-semibold text-slate-900 dark:text-white mb-1">Years Experience</h5>
                    <span className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">1+</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;