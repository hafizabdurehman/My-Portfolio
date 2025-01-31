"use client"
import { IoMdHome } from "react-icons/io"
import { IoPersonSharp } from "react-icons/io5"
import { FaPhoneAlt } from "react-icons/fa"
import { RiFileList3Fill } from "react-icons/ri"
import { GiBrain } from "react-icons/gi"
import React, { useState } from 'react'
import { Menu, X } from 'lucide-react'
import Darkmode from "./Darkmode"

const MobileNavbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const menuItems = [
    { name: 'Home', icon: <IoMdHome size={20} /> },
    { name: 'About', icon: <IoPersonSharp size={20} /> },
    { name: 'Contact', icon: <FaPhoneAlt size={20} /> },
    { name: 'Skills', icon: <RiFileList3Fill size={20} /> },
    { name: 'Projects', icon: <GiBrain size={20} /> }
  ]

  return (
    <nav className="relative flex">
      {/* Fixed navbar for all screen sizes */}
      <div className=" dark:bg-slate-900 text-black dark:text-white p-4 flex justify-between items-center fixed top-0 left-0 right-0 z-50">
        <span className="text-xl md:text-3xl font-bold">Tayyab.</span>
        
        {/* Desktop Menu - Hidden on mobile, visible on lg screens */}
        <div className="hidden lg:flex items-center gap-8">
          {menuItems.map((item) => (
            <a
              key={item.name}
              href={`#${item.name.toLowerCase()}`}
              className="flex items-center gap-2 hover:text-slate-300 transition-colors"
            >
              {item.icon}
              {item.name}
            </a>
          ))}
          <Darkmode />
        </div>

        {/* Mobile Right Section */}
        <div className="flex items-center gap-2 lg:hidden">
          <Darkmode />
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 hover:bg-slate-700 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`lg:hidden fixed w-full bg-white dark:bg-slate-800 transition-all duration-300 ease-in-out z-40 top-16 ${
          isOpen ? 'translate-y-0 opacity-100' : '-translate-y-2 opacity-0 pointer-events-none'
        }`}
      >
        <div className="py-2">
          {menuItems.map((item) => (
            <a
              key={item.name}
              href={`#${item.name.toLowerCase()}`}
              className="flex items-center gap-3 px-4 py-3 text-black dark:text-white hover:bg-slate-700 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {item.icon}
              {item.name}
            </a>
          ))}
        </div>
      </div>

      {/* Spacer */}
      <div className="h-16"></div>
    </nav>
  )
}

export default MobileNavbar