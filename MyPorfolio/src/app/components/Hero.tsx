"use client";
import { IoMdHome } from "react-icons/io";
import { IoPersonSharp } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { RiFileList3Fill } from "react-icons/ri";
import { GiBrain } from "react-icons/gi";
import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Darkmode from "./Darkmode";
import Image from "next/image";
import { FaFacebook, FaInstagram, FaLinkedin, FaGithub, FaDiscord } from "react-icons/fa";
import { SiReaddotcv } from "react-icons/si";
import { FaLaptopFile } from "react-icons/fa6";

// Loading Component
const LoadingScreen = () => (
  <div className="fixed inset-0 bg-white dark:bg-slate-900 z-50 flex items-center justify-center">
    <div className="relative">
      {/* Animated circles */}
      <div className="flex gap-2">
        <div className="w-4 h-4 rounded-full bg-blue-500 animate-bounce" style={{ animationDelay: "0s" }}></div>
        <div className="w-4 h-4 rounded-full bg-purple-500 animate-bounce" style={{ animationDelay: "0.2s" }}></div>
        <div className="w-4 h-4 rounded-full bg-blue-500 animate-bounce" style={{ animationDelay: "0.4s" }}></div>
      </div>
      {/* Loading text */}
      <div className="mt-4 text-center">
        <span className="text-slate-600 dark:text-slate-400 text-sm font-medium">Loading</span>
      </div>
    </div>
  </div>
);

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [displayText, setDisplayText] = useState("");
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const fullText = "Hi, I'm Tayyab Aziz";

  // Add functions for scrolling and resume download
  const scrollToProjects = () => {
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = "/TayyabResume.pdf"; // Update this path to your actual resume file
    link.download = "TayyabResume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Loading and initialization effect
  useEffect(() => {
    // Simulate loading time
    const loadTimer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Adjust time as needed

    return () => clearTimeout(loadTimer);
  }, []);

  // Typing animation effect - now starts after loading
  useEffect(() => {
    if (!isLoading) {
      let currentIndex = 0;
      const typingInterval = setInterval(() => {
        if (currentIndex <= fullText.length) {
          setDisplayText(fullText.substring(0, currentIndex));
          currentIndex++;
        } else {
          clearInterval(typingInterval);
          setIsTypingComplete(true);
        }
      }, 100);

      return () => clearInterval(typingInterval);
    }
  }, [isLoading]);

  // Navigation menu items
  const menuItems = [
    { name: "Home", icon: <IoMdHome size={20} /> },
    { name: "About", icon: <IoPersonSharp size={20} /> },
    { name: "Contact", icon: <FaPhoneAlt size={20} /> },
    { name: "Skills", icon: <RiFileList3Fill size={20} /> },
    { name: "Projects", icon: <GiBrain size={20} /> },
  ];

  // Social media links
  const socialLinks = [
    {
      icon: <FaFacebook size={24} />,
      href: "https://www.facebook.com/profile.php?id=100087520745969",
      hover: "hover:text-blue-600 dark:hover:text-blue-600",
      label: "Facebook",
    },
    {
      icon: <FaInstagram size={24} />,
      href: "https://www.instagram.com/ps_tayyab?igsh=OTIwc2VyaDIyZjU1",
      hover: "hover:text-pink-600 dark:hover:text-pink-600",
      label: "Instagram",
    },
    {
      icon: <FaLinkedin size={24} />,
      href: "https://www.linkedin.com/in/tayyab-aziz-763a502b4/",
      hover: "hover:text-blue-500 dark:hover:text-blue-500",
      label: "LinkedIn",
    },
    {
      icon: <FaGithub size={24} />,
      href: "https://github.com/TayyabAziz11",
      hover: "dark:hover:text-white hover:text-slate-900",
      label: "GitHub",
    },
    {
      icon: <FaDiscord size={24} />,
      href: "https://discordapp.com/users/872006373972533269",
      hover: "hover:text-indigo-600 dark:hover:text-indigo-600",
      label: "Discord",
    },
  ];

  // Add this at the beginning of your return statement
  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-white to-slate-100 dark:from-slate-900 dark:to-slate-800 transition-all duration-500">
      {/* Navigation Bar */}
      <nav className={`relative transition-opacity duration-500 ${isLoading ? "opacity-0" : "opacity-100"}`}>
        {/* Fixed Header */}
        <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-md text-slate-900 dark:text-white p-4 flex justify-between items-center fixed top-0 left-0 right-0 z-50 border-b border-slate-200 dark:border-slate-700">
          <span className="text-xl md:text-3xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            Tayyab.
          </span>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={`#${item.name.toLowerCase()}`}
                className="flex items-center gap-2 text-slate-700 dark:text-slate-200 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
              >
                {item.icon}
                {item.name}
              </a>
            ))}
            <Darkmode />
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            <Darkmode />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        <div
          className={`lg:hidden fixed w-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-md transition-all duration-300 ease-in-out z-40 top-16 border-b border-slate-200 dark:border-slate-700 ${
            isOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 pointer-events-none"
          }`}
        >
          <div className="py-2">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={`#${item.name.toLowerCase()}`}
                className="flex items-center gap-3 px-4 py-3 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.icon}
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Spacer for fixed header */}
      <div className={`h-16 ${isOpen ? "h-[calc(16rem)]" : ""} transition-all duration-300`} />

      {/* Main Hero Content */}
      <main id="home" className="container mx-auto px-4 flex-1 flex flex-col lg:flex-row items-center justify-between py-12">
        {/* Left Column */}
        <div className="w-full lg:w-1/2 flex">
          {/* Desktop Social Links */}
          <div className="hidden lg:block mr-8">
            <ul className="fixed left-8 top-1/2 transform -translate-y-1/2">
              {socialLinks.map((social, index) => (
                <li key={index} className={`${index > 0 ? "mt-5" : ""}`}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className={`${social.hover} text-slate-600 dark:text-slate-400 cursor-pointer transition-all duration-300`}
                  >
                    {social.icon}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Hero Content */}
          <div className="text-center lg:text-left">
            <div className="relative mb-4">
              <h1
                className={`text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white transition-opacity duration-300 ${
                  displayText ? "opacity-100" : "opacity-0"
                }`}
              >
                {displayText}
                <span className="animate-blink">|</span>
              </h1>
            </div>

            {/* Content that appears after typing animation */}
            <div
              className={`transform transition-all duration-500 ${
                isTypingComplete ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
              }`}
            >
              <p className="text-2xl lg:text-3xl bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent font-semibold mb-6">
                Frontend Developer
              </p>
              <p className="text-slate-700 dark:text-slate-300 mb-8 max-w-2xl leading-relaxed">
                A passionate Web Designer focused on creating beautiful, responsive websites and focus on clean, modern designs that reflect both the brand&apos;s identity and the needs of its audience.
              </p>

              {/* Call-to-Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 items-center justify-center lg:justify-start">
                <button
                  onClick={downloadResume}
                  className="w-full sm:w-auto bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-8 py-3 rounded-lg flex items-center justify-center gap-2 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                >
                  <span>Resume</span>
                  <SiReaddotcv className="text-xl" />
                </button>
                <button
                  onClick={scrollToProjects}
                  className="w-full sm:w-auto bg-slate-800 dark:bg-slate-700 hover:bg-slate-700 dark:hover:bg-slate-600 text-white px-8 py-3 rounded-lg flex items-center justify-center gap-2 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                >
                  <span>My Projects</span>
                  <FaLaptopFile className="text-xl" />
                </button>
              </div>

              {/* Mobile Social Links */}
              <div className="flex justify-center lg:hidden mt-8 gap-6">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className={`text-slate-600 dark:text-slate-400 ${social.hover} cursor-pointer transition-colors`}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Profile Image */}
        <div
          className={`w-full lg:w-1/2 flex justify-center mt-8 lg:mt-0 transform transition-all duration-500 ${
            isTypingComplete ? "translate-x-0 opacity-100" : "translate-x-4 opacity-0"
          }`}
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-2xl opacity-20 animate-pulse dark:opacity-30"></div>
            <Image
              src="/tayyab.png"
              className="rounded-full relative z-10 transition-transform duration-500 hover:scale-105"
              width={400}
              height={400}
              alt="Tayyab Aziz profile picture"
              priority
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
