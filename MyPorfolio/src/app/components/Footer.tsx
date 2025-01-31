"use client"
import React from 'react';
import Link from 'next/link';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { IoMailSharp, IoPersonSharp } from "react-icons/io5";
import { FaCode } from "react-icons/fa6";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navigationLinks = [
    { name: 'About', href: '#about', icon: <IoPersonSharp size={16} /> },
    { name: 'Projects', href: '#projects', icon: <FaCode size={16} /> },
    { name: 'Contact', href: '#contact', icon: <IoMailSharp size={16} /> },
  ];

  const socialLinks = [
    {
      name: 'GitHub',
      icon: <FaGithub size={20} />,
      url: 'https://github.com/TayyabAziz11'
    },
    {
      name: 'LinkedIn',
      icon: <FaLinkedin size={20} />,
      url: 'https://www.linkedin.com/in/tayyab-aziz-763a502b4'
    },
   
  ];

  return (
    <footer className="bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Footer Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Brand Column */}
            <div className="col-span-1 md:col-span-2">
              <Link 
                href="/"
                className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent"
              >
                Tayyab Aziz
              </Link>
              <p className="mt-4 text-slate-600 dark:text-slate-400 max-w-md">
                Frontend developer focused on creating beautiful and functional web experiences. 
                Always excited to take on new challenges and bring creative ideas to life.
              </p>
              {/* Social Links */}
              <div className="flex gap-4 mt-6">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-600 dark:text-slate-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300"
                    aria-label={link.name}
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links Column */}
            <div className="col-span-1">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
                Quick Links
              </h3>
              <ul className="space-y-3">
                {navigationLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300"
                    >
                      {link.icon}
                      <span>{link.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Column */}
            <div className="col-span-1">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
                Contact
              </h3>
              <div className="space-y-3">
                <p className="text-slate-600 dark:text-slate-400">
                  Email: tayyab.aziz.110@gmail.com
                </p>
                <p className="text-slate-600 dark:text-slate-400">
                  Location: Karachi, Pakistan
                </p>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-800">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-slate-600 dark:text-slate-400 text-sm text-center md:text-left">
                © {currentYear} Tayyab Aziz. All rights reserved.
              </p>
              <div className="flex items-center gap-4">
                <Link
                  href="/privacy"
                  className="text-sm text-slate-600 dark:text-slate-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="/terms"
                  className="text-sm text-slate-600 dark:text-slate-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300"
                >
                  Terms of Service
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;