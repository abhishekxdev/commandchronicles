"use client";
import { Terminal } from "lucide-react"

export function Footer() {
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
  }

  return (
    <footer className="relative z-10 px-4 sm:px-6 py-10 sm:py-16 bg-[#23231f] text-[#ecebdc]">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center gap-6">
        {/* Logo and Tagline */}
        <div className="flex flex-col items-center gap-4">
          <div className="flex items-center space-x-2">
            <Terminal className="h-6 w-6 sm:h-8 sm:w-8 text-orange-500" />
            <span className="text-lg sm:text-xl font-bold text-white">CommandChronicles</span>
          </div>
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold">
            Add a spark to your <span className="italic font-normal">workflow</span>
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-[#ecebdc]/80">
            CommandChronicles: Where every command tells a story.
          </p>
        </div>

        {/* Navigation Buttons */}
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
          <button 
            onClick={() => scrollToSection('features')}
            className="text-[#ecebdc]/90 hover:text-white transition-colors text-sm sm:text-base cursor-pointer hover:underline"
          >
            Features
          </button>
          <button 
            onClick={() => scrollToSection('testimonials')}
            className="text-[#ecebdc]/90 hover:text-white transition-colors text-sm sm:text-base cursor-pointer hover:underline"
          >
            Testimonials
          </button>
          <button 
            onClick={() => scrollToSection('pricing')}
            className="text-[#ecebdc]/90 hover:text-white transition-colors text-sm sm:text-base cursor-pointer hover:underline"
          >
            Pricing
          </button>
        </div>
      </div>
    </footer>
  )
}