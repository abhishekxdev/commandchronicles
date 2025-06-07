import { Terminal } from "lucide-react"

export function Footer() {
  return (
    <footer className="relative z-10 px-4 sm:px-6 py-10 sm:py-16 bg-[#23231f] text-[#ecebdc]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between md:items-start gap-10 md:gap-12">
        {/* Tagline */}
        <div className="flex-1 min-w-[220px] mb-8 md:mb-0 text-center md:text-left">
          <h2 className="text-2xl sm:text-3xl font-bold mb-2">Add a spark to your <span className="italic font-normal">workflow</span></h2>
          <p className="text-base sm:text-lg text-[#ecebdc]/80">CommandChronicles: Where every command tells a story.</p>
        </div>
        {/* Company Links */}
        <div className="flex-1 flex flex-col sm:flex-row gap-8 sm:gap-12 justify-center text-center sm:text-left">
          <div>
            <h3 className="text-lg sm:text-xl font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-[#ecebdc]/90">
              <li><a href="#" className="hover:underline">Changelog</a></li>
              <li><a href="#" className="hover:underline">Resources</a></li>
              <li><a href="#" className="hover:underline">FAQ</a></li>
            </ul>
          </div>
          <div>
            <ul className="space-y-2 text-[#ecebdc]/90 mt-6 sm:mt-0">
              <li><a href="#" className="hover:underline">About</a></li>
              <li><a href="#" className="hover:underline">Pricing</a></li>
              <li><a href="#" className="hover:underline">Blog</a></li>
            </ul>
          </div>
          <div>
            <ul className="space-y-2 text-[#ecebdc]/90 mt-6 sm:mt-0">
              <li><a href="#" className="hover:underline">Contact us</a></li>
              <li>
                <button className="inline-flex items-center gap-2 bg-orange-700 hover:bg-orange-800 text-white font-semibold px-4 py-2 rounded-md mt-2 text-sm transition-colors w-full justify-center sm:w-auto sm:justify-start">
                  <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" className="text-white"><rect x="2" y="4" width="14" height="10" rx="2"/><path d="M2 6l7 5 7-5"/></svg>
                  We&apos;re hiring!
                </button>
              </li>
            </ul>
          </div>
        </div>
        {/* Social Media */}
        <div className="flex-1 min-w-[180px] text-center md:text-left mt-8 md:mt-0">
          <h3 className="text-lg sm:text-xl font-semibold mb-4">Social media</h3>
          <ul className="space-y-2 text-[#ecebdc]/90">
            <li><a href="#" className="hover:underline">Instagram</a></li>
            <li><a href="#" className="hover:underline">Github</a></li>
            <li><a href="#" className="hover:underline">Linkedin</a></li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
