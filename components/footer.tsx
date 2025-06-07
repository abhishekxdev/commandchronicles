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
    <footer className="relative z-10 px-4 sm:px-6 py-16 sm:py-20 bg-[#23231f] text-[#ecebdc]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Left Column - Tagline */}
          <div className="lg:col-span-1">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight">
              Every command <span className="italic font-normal text-gray-300">tells a story</span>
            </h2>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Company</h3>
            <div className="space-y-4">
              <a href="#" className="block text-gray-400 hover:text-white transition-colors text-sm">
                Changelog
              </a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors text-sm">
                Resources
              </a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors text-sm">
                FAQ
              </a>
            </div>
          </div>

          {/* About Column with Contact us and We're hiring */}
          <div>
            <div className="space-y-4">
              <a href="#" className="block text-gray-400 hover:text-white transition-colors text-sm">
                About
              </a>
              <button 
                onClick={() => scrollToSection('pricing')}
                className="block text-gray-400 hover:text-white transition-colors text-sm text-left"
              >
                Pricing
              </button>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors text-sm">
                Blog
              </a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors text-sm">
                Contact us
              </a>
            </div>
            
            {/* We're hiring button positioned right after Contact us */}
            <div className="mt-4">
              <button className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white text-sm font-medium rounded-md transition-colors">
                <span>🔥</span>
                We're hiring!
              </button>
            </div>
          </div>

          {/* Social Media Column */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Social media</h3>
            <div className="space-y-4">
              <a href="#" className="block text-gray-400 hover:text-white transition-colors text-sm">
                Instagram
              </a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors text-sm">
                Github
              </a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors text-sm">
                Linkedin
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}