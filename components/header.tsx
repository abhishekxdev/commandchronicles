"use client";
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Terminal } from "lucide-react"

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add("overflow-hidden")
    } else {
      document.body.classList.remove("overflow-hidden")
    }
    // Clean up in case component unmounts while menu is open
    return () => document.body.classList.remove("overflow-hidden")
  }, [menuOpen])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const headerHeight = 80 // Account for fixed header
      const elementPosition = element.offsetTop - headerHeight
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      })
    }
    setMenuOpen(false)
  }

  return (
    <header className="relative z-50 px-4 sm:px-6 py-4 sm:py-6">
      <nav className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Terminal className="h-6 w-6 sm:h-8 sm:w-8 text-orange-500" />
          <span className="text-lg sm:text-xl font-bold text-white">CommandChronicles</span>
        </div>
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
          <button 
            onClick={() => scrollToSection('features')}
            className="text-gray-300 hover:text-white transition-colors text-sm lg:text-base cursor-pointer"
          >
            Features
          </button>
          <button 
            onClick={() => scrollToSection('testimonials')}
            className="text-gray-300 hover:text-white transition-colors text-sm lg:text-base cursor-pointer"
          >
            Testimonials
          </button>
          <button 
            onClick={() => scrollToSection('pricing')}
            className="text-gray-300 hover:text-white transition-colors text-sm lg:text-base cursor-pointer"
          >
            Pricing
          </button>
          <Button size="sm" className="bg-black text-white text-sm lg:text-base px-3 lg:px-4">
            Sign In
          </Button>
        </div>
        {/* Hamburger for mobile */}
        <button
          className="md:hidden flex items-center justify-center p-2 rounded focus:outline-none focus:ring-2 focus:ring-orange-500 z-50"
          aria-label="Open menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" className="text-white">
            <path d="M4 7h20M4 14h20M4 21h20" />
          </svg>
        </button>
      </nav>
      {/* Mobile Menu - Compact Dropdown */}
      {menuOpen && (
        <div className="fixed inset-x-0 top-0 bg-[#23231f] z-[100] shadow-xl border-b border-gray-700">
          {/* Header with Logo and Close Button */}
          <div className="flex items-center justify-between p-4 sm:p-6 border-b border-gray-700">
            {/* Logo in Mobile Menu */}
            <div className="flex items-center space-x-2">
              <Terminal className="h-6 w-6 sm:h-8 sm:w-8 text-orange-500" />
              <span className="text-lg sm:text-xl font-bold text-white">CommandChronicles</span>
            </div>
            {/* Close Button */}
            <button
              className="text-white p-2 focus:outline-none focus:ring-2 focus:ring-orange-500 rounded"
              aria-label="Close menu"
              onClick={() => setMenuOpen(false)}
            >
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" className="text-white">
                <path d="M6 6l16 16M6 22L22 6" />
              </svg>
            </button>
          </div>
          
          {/* Navigation Links - Compact Layout */}
          <div className="px-6 py-6 space-y-4">
            <button 
              onClick={() => scrollToSection('features')}
              className="block text-gray-300 hover:text-white text-lg transition-colors font-medium py-2 w-full text-left"
            >
              Features
            </button>
            <button 
              onClick={() => scrollToSection('testimonials')}
              className="block text-gray-300 hover:text-white text-lg transition-colors font-medium py-2 w-full text-left"
            >
              Testimonials
            </button>
            <button 
              onClick={() => scrollToSection('pricing')}
              className="block text-gray-300 hover:text-white text-lg transition-colors font-medium py-2 w-full text-left"
            >
              Pricing
            </button>
            <Button 
              size="lg" 
              className="bg-black hover:bg-gray-800 text-white w-full text-lg py-3 mt-4" 
              onClick={() => setMenuOpen(false)}
            >
              Sign In
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}