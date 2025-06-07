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

  return (
    <header className="relative z-10 px-4 sm:px-6 py-4 sm:py-6">
      <nav className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Terminal className="h-6 w-6 sm:h-8 sm:w-8 text-orange-500" />
          <span className="text-lg sm:text-xl font-bold text-white">CommandChronicles</span>
        </div>
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
          <a href="#features" className="text-gray-300 hover:text-white transition-colors text-sm lg:text-base">
            Features
          </a>
          <a href="#pricing" className="text-gray-300 hover:text-white transition-colors text-sm lg:text-base">
            Pricing
          </a>
          <a href="#docs" className="text-gray-300 hover:text-white transition-colors text-sm lg:text-base">
            Docs
          </a>
          <Button size="sm" className="bg-black text-white text-sm lg:text-base px-3 lg:px-4">
            Sign In
          </Button>
        </div>
        {/* Hamburger for mobile */}
        <button
          className="md:hidden flex items-center justify-center p-2 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
          aria-label="Open menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" className="text-white">
            <path d="M4 7h20M4 14h20M4 21h20" />
          </svg>
        </button>
      </nav>
      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed inset-0 bg-[#23231f] z-50 flex flex-col">
          <div className="flex justify-end p-4">
            <button
              className="text-white text-2xl p-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
              aria-label="Close menu"
              onClick={() => setMenuOpen(false)}
            >
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" className="text-white">
                <path d="M6 6l16 16M6 22L22 6" />
              </svg>
            </button>
          </div>
          <div className="flex flex-col items-center gap-8 flex-1 justify-center px-6">
            <a href="#features" className="text-gray-300 hover:text-white text-2xl transition-colors" onClick={() => setMenuOpen(false)}>
              Features
            </a>
            <a href="#pricing" className="text-gray-300 hover:text-white text-2xl transition-colors" onClick={() => setMenuOpen(false)}>
              Pricing
            </a>
            <a href="#docs" className="text-gray-300 hover:text-white text-2xl transition-colors" onClick={() => setMenuOpen(false)}>
              Docs
            </a>
            <Button size="lg" className="bg-black text-white w-4/5 text-xl py-4" onClick={() => setMenuOpen(false)}>
              Sign In
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}