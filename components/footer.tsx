import { Terminal } from "lucide-react"

export function Footer() {
  return (
    <footer className="relative z-10 px-4 sm:px-6 py-10 sm:py-16 bg-[#23231f] text-[#ecebdc]">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row lg:justify-between lg:items-start gap-8 lg:gap-12">
        {/* Tagline */}
        <div className="flex-1 min-w-[220px] mb-6 lg:mb-0 text-center lg:text-left">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-2">Add a spark to your <span className="italic font-normal">workflow</span></h2>
          <p className="text-sm sm:text-base lg:text-lg text-[#ecebdc]/80">CommandChronicles: Where every command tells a story.</p>
        </div>
        {/* Company Links */}
        <div className="flex-1 flex flex-col sm:flex-row gap-6 sm:gap-8 lg:gap-12 justify-center text-center sm:text-left">
          <div className="flex-1">
            <h3 className="text-base sm:text-lg lg:text-xl font-semibold mb-3 sm:mb-4">Company</h3>
            <ul className="space-y-2 text-[#ecebdc]/90 text-sm sm:text-base">
              <li><a href="#" className="hover:underline">Changelog</a></li>
              <li><a href="#" className="hover:underline">Resources</a></li>
              <li><a href="#" className="hover:underline">FAQ</a></li>
            </ul>
          </div>
          <div className="flex-1">
            <ul className="space-y-2 text-[#ecebdc]/90 mt-6 sm:mt-0 text-sm sm:text-base">
              <li><a href="#" className="hover:underline">About</a></li>
              <li><a href="#" className="hover:underline">Pricing</a></li>
              <li><a href="#" className="hover:underline">Blog</a></li>
            </ul>
          </div>
          <div className="flex-1">
            <ul className="space-y-2 text-[#ecebdc]/90 mt-6 sm:mt-0 text-sm sm:text-base">
              <li><a href="#" className="hover:underline">Contact us</a></li>
              <li>
                <button className="inline-flex items-center gap-2 bg-orange-700 hover:bg-orange-800 text-white font-semibold px-3 sm:px-4 py-2 rounded-md mt-2 text-xs sm:text-sm transition-colors w-full justify-center sm:w-auto sm:justify-start">
                  <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" className="text-white flex-shrink-0"><rect x="2" y="4" width="14" height="10" rx="2"/><path d="M2 6l7 5 7-5"/></svg>
                  We&apos;re hiring!
                </button>
              </li>
            </ul>
          </div>
        </div>
        {/* Social Media */}
        <div className="flex-1 min-w-[180px] text-center lg:text-left mt-6 lg:mt-0">
          <h3 className="text-base sm:text-lg lg:text-xl font-semibold mb-3 sm:mb-4">Social media</h3>
          <ul className="space-y-2 text-[#ecebdc]/90 text-sm sm:text-base">
            <li><a href="#" className="hover:underline">Instagram</a></li>
            <li><a href="#" className="hover:underline">Github</a></li>
            <li><a href="#" className="hover:underline">Linkedin</a></li>
          </ul>
        </div>
      </div>
    </footer>
  )
}