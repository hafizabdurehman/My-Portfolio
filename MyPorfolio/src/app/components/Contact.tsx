"use client"
import React, { useState, useEffect } from 'react';
import { IoMailSharp } from "react-icons/io5";
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const element = document.getElementById('contact-section');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const handleSubmit = (e:any) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e:any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const socialLinks = [
    {
      name: 'GitHub',
      icon: <FaGithub size={24} />,
      url: 'https://github.com/TayyabAziz11'
    },
    {
      name: 'LinkedIn',
      icon: <FaLinkedin size={24} />,
      url: 'https://www.linkedin.com/in/tayyab-aziz-763a502b4/'
    },
    
  ];

  return (
    <section id="contact" className="min-h-screen bg-gradient-to-b from-slate-100 to-white dark:from-slate-800 dark:to-slate-900 transition-all duration-500">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-2 mb-4">
              <IoMailSharp size={30} className="text-blue-500" />
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white">
                Get In Touch
              </h2>
            </div>
            <p className="text-slate-700 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Have a question or want to work together? Feel free to reach out!
            </p>
          </div>

          {/* Contact Content */}
          <div 
            id="contact-section"
            className={`grid grid-cols-1 lg:grid-cols-2 gap-12 transform transition-all duration-500 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            {/* Contact Form */}
            <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-lg">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold py-3 px-6 rounded-lg hover:opacity-90 transition-all duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              {/* Quick Contact Info */}
              <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                  Contact Information
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                      Email
                    </h4>
                    <p className="text-slate-700 dark:text-slate-300">
                      tayyab.aziz.110@gmail.com
                    </p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                      Location
                    </h4>
                    <p className="text-slate-700 dark:text-slate-300">
                      Karachi, Pakistan
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                  Connect With Me
                </h3>
                <div className="flex gap-4">
                  {socialLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-4 bg-slate-100 dark:bg-slate-700 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-600 transition-all duration-300 text-slate-700 dark:text-slate-300 hover:text-blue-500 dark:hover:text-blue-400"
                    >
                      {link.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;