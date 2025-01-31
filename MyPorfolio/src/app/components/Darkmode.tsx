"use client"
import { useEffect, useState } from 'react'
import React from 'react'
import { FaMoon } from 'react-icons/fa'
import { BsSunFill } from 'react-icons/bs'

// Darkmode component
const Darkmode: React.FC = () => {
  // State for dark mode, default to true (dark mode)
  const [darkMode, setDarkMode] = useState<boolean>(true)

  // Check the theme on initial render (componentDidMount equivalent)
  useEffect(() => {
    const theme = localStorage.getItem("theme")
    if (theme === "dark") {
      setDarkMode(true)
    } else if (theme === "light") {
      setDarkMode(false)
    }
  }, [])

  // Update the theme when darkMode state changes
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
      localStorage.setItem("theme", "dark")
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem("theme", "light")
    }
  }, [darkMode])

  return (
    <div
      className='relative w-12 h-6 flex items-center dark:bg-gray-900 bg-teal-300 cursor-pointer rounded-full p-1'
      onClick={() => setDarkMode(!darkMode)}
    >
      <FaMoon className='text-white' size={14} />
      <div className='absolute bg-white w-4 h-4 rounded-full shadow-md transform transition-transform duration-300' style={darkMode ? {left:"2px" } : {right: "2px"}}>

      </div>
      <BsSunFill className='ml-auto text-yellow-400' size={14}/>
    </div>
  )
}

export default Darkmode
