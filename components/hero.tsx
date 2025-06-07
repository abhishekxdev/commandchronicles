import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight } from "lucide-react"
import { TerminalPreview } from "./terminal-preview"
import { Terminal } from "lucide-react"

function AboutSection() {
  return (
    <section className="relative z-10 px-4 sm:px-6 py-12 sm:py-16 max-w-6xl mx-auto text-left">
      <div className="flex flex-col lg:flex-row items-start gap-6 lg:gap-8 mb-8">
        <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg bg-[#232422] flex items-center justify-center flex-shrink-0">
          <Terminal className="h-6 w-6 sm:h-8 sm:w-8 text-orange-500" />
        </div>
        <div className="flex-1">
          <p className="text-xl sm:text-2xl font-semibold text-neutral-100 mb-3 sm:mb-4 leading-relaxed">
            CommandChronicles is a <span className="font-bold">secure, cross-device command line utility</span><br className="hidden sm:block" />
            built to help developers keep track of their terminal usage — with full context and privacy.
          </p>
          <p className="text-base sm:text-lg text-neutral-400 mb-3 sm:mb-4 leading-relaxed">
            Whether you're <span className="font-bold text-neutral-100">working solo</span> or <span className="font-bold text-neutral-100">across multiple machines</span>,<br className="hidden lg:block" />
            CommandChronicles gives you the tools to <span className="font-bold text-neutral-100">search smarter</span>,<br className="hidden lg:block" />
            track command behavior, and stay productive without compromising security.
          </p>
          <p className="text-base sm:text-lg text-neutral-400 leading-relaxed">
            <span className="font-bold text-neutral-100">Encrypted command sync</span>, <span className="font-bold text-neutral-100">context-rich search</span>, and<br className="hidden lg:block" />
            a seamless CLI experience — all designed to help you<br className="hidden lg:block" />
            work faster, safer, and with complete command over your history.
          </p>
        </div>
      </div>
      <button className="mt-4 px-6 sm:px-8 py-3 sm:py-4 bg-orange-500 hover:bg-orange-600 text-white text-base sm:text-lg font-semibold rounded-md transition-colors w-full sm:w-auto">
        Request Demo
      </button>
    </section>
  )
}

function TestimonialSection() {
  const testimonials = [
    {
      quote: "Easily monitor and manage the time spent on tasks and projects with NimbusFlow's intuitive time tracking. Gain insights",
      name: "Name",
      company: "Company",
      avatar: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2"
    },
    {
      quote: "Easily monitor and manage the time spent on tasks and projects with NimbusFlow's intuitive time tracking. Gain insights",
      name: "Name", 
      company: "Company",
      avatar: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2"
    },
    {
      quote: "Easily monitor and manage the time spent on tasks and projects with NimbusFlow's intuitive time tracking. Gain insights",
      name: "Name",
      company: "Company", 
      avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2"
    },
    {
      quote: "Easily monitor and manage the time spent on tasks and projects with NimbusFlow's intuitive time tracking. Gain insights",
      name: "Name",
      company: "Company",
      avatar: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2"
    }
  ]

  return (
    <section id="testimonials" className="relative z-10 px-4 sm:px-6 py-16 sm:py-20 max-w-7xl mx-auto">
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-12 sm:mb-16 text-center">
        Don't simply take it from us...
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 sm:gap-8">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-[#1a1a1a] rounded-xl p-6 border border-gray-800 flex flex-col">
            <div className="flex items-start mb-4">
              <img 
                src={testimonial.avatar}
                alt={testimonial.name}
                className="w-12 h-12 rounded-full object-cover flex-shrink-0"
              />
            </div>
            
            <p className="text-gray-300 text-sm leading-relaxed mb-6 flex-grow">
              "{testimonial.quote}"
            </p>
            
            <div className="mt-auto">
              <div className="font-semibold text-white text-sm">{testimonial.name}</div>
              <div className="text-gray-400 text-xs">{testimonial.company}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

function WhatMakesUsDifferentSection() {
  return (
    <section className="relative z-10 px-4 sm:px-6 py-16 sm:py-20 max-w-7xl mx-auto">
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-neutral-100 mb-8 sm:mb-12">What makes us different</h2>
      <div className="flex flex-col xl:flex-row items-center gap-8 sm:gap-12">
        {/* Left: Features */}
        <div className="flex-1 w-full space-y-4 sm:space-y-6 max-w-2xl xl:max-w-lg">
          <div className="bg-background border border-gray-800 rounded-xl p-4 sm:p-6 flex flex-col gap-2 shadow-lg">
            <div className="flex items-center gap-3 mb-2">
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" className="text-gray-200 flex-shrink-0"><rect x="3" y="3" width="18" height="18" rx="3"/><path d="M3 9h18M9 21V9"/></svg>
              <span className="text-lg sm:text-xl font-bold text-white">Project Dashboards</span>
            </div>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
              Easily monitor the time spent on tasks with intuitive time tracking, and enhance productivity with real-time tracking and detailed reports.
            </p>
          </div>
          <div className="bg-background border border-gray-800 rounded-xl p-4 sm:p-6 flex flex-col gap-3 shadow-lg">
            <div className="flex items-center gap-3">
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" className="text-gray-200 flex-shrink-0"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
              <span className="text-lg sm:text-xl font-bold text-white">Time management</span>
            </div>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
              Track command execution times, analyze productivity patterns, and optimize your workflow with detailed time insights and performance metrics.
            </p>
          </div>
          <div className="bg-background border border-gray-800 rounded-xl p-4 sm:p-6 flex flex-col gap-3 shadow-lg">
            <div className="flex items-center gap-3">
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" className="text-gray-200 flex-shrink-0"><circle cx="12" cy="12" r="10"/><path d="M8 12h8M12 8v8"/></svg>
              <span className="text-lg sm:text-xl font-bold text-white">Cross-functional collaboration</span>
            </div>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
              Share command knowledge across teams, enable seamless onboarding, and foster collaboration with shared command libraries and team insights.
            </p>
          </div>
        </div>
        {/* Right: Mockup */}
        <div className="flex-1 w-full flex justify-center">
          <div className="rounded-2xl bg-orange-500 p-4 sm:p-6 lg:p-8 flex items-end min-h-[280px] sm:min-h-[340px] w-full max-w-[400px] sm:max-w-[480px]">
            <div className="bg-[#181818] rounded-xl w-full h-[220px] sm:h-[260px] p-4 sm:p-6 flex flex-col justify-between shadow-2xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-md bg-black flex items-center justify-center flex-shrink-0">
                  <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" className="text-orange-500"><rect x="2" y="2" width="16" height="16" rx="4"/></svg>
                </div>
                <span className="text-base sm:text-lg font-bold text-white">Company</span>
              </div>
              <div className="flex-1 flex flex-col gap-2 text-gray-300 text-xs sm:text-sm">
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-white">My Task</span>
                  <span className="ml-2 px-2 py-0.5 rounded bg-orange-500 text-xs text-white font-bold">Kanban</span>
                </div>
                <div className="mt-2">
                  <div className="font-semibold text-gray-200 mb-1 text-xs sm:text-sm">Backlog</div>
                  <div className="bg-gray-800 rounded p-2 mb-1">
                    <div className="text-xs text-gray-100">Interface Framework</div>
                    <div className="text-[10px] text-gray-400">Craft a striking interface that boosts user engagement.</div>
                  </div>
                  <div className="bg-gray-800 rounded p-2">
                    <div className="text-xs text-gray-100">Interface Blueprint</div>
                    <div className="text-[10px] text-gray-400">Design a UI layout that enhances navigation.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function FeatureSection() {
  return (
    <section id="features" className="relative z-10 px-4 sm:px-6 py-16 sm:py-20 max-w-7xl mx-auto">
      <div className="text-center mb-8 sm:mb-12">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">Experience our features</h2>
        <p className="text-base sm:text-lg text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed">
          CommandChronicles streamlines terminal history management and collaboration, boosting developer productivity with intuitive dashboards, context-rich search, and secure cross-device sync.
        </p>
        <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 sm:px-8 py-3 rounded-md text-base sm:text-lg transition-colors w-full sm:w-auto">
          Request Demo
        </button>
      </div>
      {/* Feature blocks - Alternating layout */}
      <div className="flex flex-col gap-16 sm:gap-20">
        {/* Block 1 - Terminal on LEFT, Text on RIGHT */}
        <div className="flex flex-col lg:flex-row items-center gap-6 sm:gap-8">
          <div className="flex-1 w-full flex justify-center order-2 lg:order-1">
            <div className="bg-background rounded-xl shadow-lg p-4 sm:p-6 max-w-md w-full">
              <div className="text-orange-500 mb-4">●</div>
              <div className="bg-gray-900 rounded p-3 sm:p-4 text-left text-gray-200 text-sm">
                <div className="mb-2">$ cc sync --all</div>
                <div className="text-gray-400 text-xs sm:text-sm">Your commands are now securely synced across all devices.</div>
              </div>
            </div>
          </div>
          <div className="flex-1 w-full order-1 lg:order-2">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">Seamless Command Sync</h3>
            <p className="text-gray-300 text-base leading-relaxed">Keep your terminal history up-to-date and accessible, no matter where you work. CommandChronicles ensures your commands are always available, securely and privately.</p>
          </div>
        </div>
        
        {/* Block 2 - Terminal on RIGHT, Text on LEFT */}
        <div className="flex flex-col lg:flex-row items-center gap-6 sm:gap-8">
          <div className="flex-1 w-full order-1">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">Context-Aware Search</h3>
            <p className="text-gray-300 text-base leading-relaxed">Search your command history by project, path, or environment. Instantly locate the exact command you need, with all the details you care about.</p>
          </div>
          <div className="flex-1 w-full flex justify-center order-2">
            <div className="bg-background rounded-xl shadow-lg p-4 sm:p-6 max-w-md w-full">
              <div className="text-orange-500 mb-4">●</div>
              <div className="bg-gray-900 rounded p-3 sm:p-4 text-left text-gray-200 text-sm">
                <div className="mb-2">$ cc search "docker build"</div>
                <div className="text-gray-400 text-xs sm:text-sm">Find any command, with full context, in seconds.</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Block 3 - Terminal on LEFT, Text on RIGHT */}
        <div className="flex flex-col lg:flex-row items-center gap-6 sm:gap-8">
          <div className="flex-1 w-full flex justify-center order-2 lg:order-1">
            <div className="bg-background rounded-xl shadow-lg p-4 sm:p-6 max-w-md w-full">
              <div className="text-orange-500 mb-4">●</div>
              <div className="bg-gray-900 rounded p-3 sm:p-4 text-left text-gray-200 text-sm">
                <div className="mb-2">$ cc privacy --status</div>
                <div className="text-gray-400 text-xs sm:text-sm">All your commands are encrypted and private.</div>
              </div>
            </div>
          </div>
          <div className="flex-1 w-full order-1 lg:order-2">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">Privacy & Encryption</h3>
            <p className="text-gray-300 text-base leading-relaxed">Your command history is encrypted at rest and in transit. Only you have access—no compromises, ever.</p>
          </div>
        </div>
        
        {/* Block 4 - Terminal on RIGHT, Text on LEFT */}
        <div className="flex flex-col lg:flex-row items-center gap-6 sm:gap-8">
          <div className="flex-1 w-full order-1">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">Team Collaboration</h3>
            <p className="text-gray-300 text-base leading-relaxed">Invite teammates, share command history, and boost productivity together. CommandChronicles is built for both solo developers and teams.</p>
          </div>
          <div className="flex-1 w-full flex justify-center order-2">
            <div className="bg-background rounded-xl shadow-lg p-4 sm:p-6 max-w-md w-full">
              <div className="text-orange-500 mb-4">●</div>
              <div className="bg-gray-900 rounded p-3 sm:p-4 text-left text-gray-200 text-sm">
                <div className="mb-2">$ cc team --invite alice</div>
                <div className="text-gray-400 text-xs sm:text-sm">Collaborate and share command insights with your team.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Feature grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-16 sm:mt-20">
        <div className="bg-background rounded-xl p-4 sm:p-6 border border-gray-800">
          <div className="text-xl sm:text-2xl font-bold text-white mb-2">1</div>
          <div className="font-semibold text-white mb-1">Secure Command Sync</div>
          <div className="text-gray-400 text-sm leading-relaxed">Sync your commands across devices with end-to-end encryption.</div>
        </div>
        <div className="bg-background rounded-xl p-4 sm:p-6 border border-gray-800">
          <div className="text-xl sm:text-2xl font-bold text-white mb-2">2</div>
          <div className="font-semibold text-white mb-1">Context-Rich Search</div>
          <div className="text-gray-400 text-sm leading-relaxed">Find any command instantly, with full project and environment context.</div>
        </div>
        <div className="bg-background rounded-xl p-4 sm:p-6 border border-gray-800 sm:col-span-2 lg:col-span-1">
          <div className="text-xl sm:text-2xl font-bold text-white mb-2">3</div>
          <div className="font-semibold text-white mb-1">Collaboration Tools</div>
          <div className="text-gray-400 text-sm leading-relaxed">Share, annotate, and manage command history as a team.</div>
        </div>
      </div>
    </section>
  )
}

function PricingSection() {
  return (
    <section id="pricing" className="relative z-10 px-4 sm:px-6 py-16 sm:py-20 max-w-7xl mx-auto">
      <div className="text-center mb-8 sm:mb-10">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">Pricing</h2>
      </div>
      <div className="flex flex-col items-center mb-8 sm:mb-12">
        <span className="text-gray-300 mb-2">Billed</span>
        <div className="flex gap-2 bg-[#23231f] rounded-lg p-1">
          <button className="px-4 sm:px-6 py-2 rounded-md bg-black text-white font-semibold focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm sm:text-base">
            Annual <span className="text-orange-500">(-10%)</span>
          </button>
          <button className="px-4 sm:px-6 py-2 rounded-md text-gray-300 font-semibold focus:outline-none text-sm sm:text-base">Monthly</button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
        {/* Basic */}
        <div className="bg-black rounded-2xl p-6 sm:p-8 flex flex-col items-center shadow-lg">
          <div className="text-base sm:text-lg font-semibold text-white mb-2">Basic (Free)</div>
          <div className="text-3xl sm:text-4xl font-bold text-white mb-4 sm:mb-6">$0</div>
          <ul className="text-gray-300 text-left mb-6 sm:mb-8 space-y-2 w-full text-sm sm:text-base">
            <li>✓ Unlimited command history</li>
            <li>✓ Context-aware search</li>
            <li>✓ Up to 2 devices</li>
            <li>✓ Basic privacy & encryption</li>
            <li>✓ Community support</li>
          </ul>
          <button className="bg-[#23231f] text-white px-4 sm:px-6 py-3 rounded-md font-semibold w-full text-sm sm:text-base">Get started</button>
        </div>
        {/* Pro */}
        <div className="bg-[#23231f] rounded-2xl p-6 sm:p-8 flex flex-col items-center shadow-lg">
          <div className="text-base sm:text-lg font-semibold text-white mb-2">Pro</div>
          <div className="text-3xl sm:text-4xl font-bold text-white mb-4 sm:mb-6">$12</div>
          <ul className="text-gray-300 text-left mb-6 sm:mb-8 space-y-2 w-full text-sm sm:text-base">
            <li>✓ Unlimited command history</li>
            <li>✓ Context-aware search</li>
            <li>✓ Up to 10 devices</li>
            <li>✓ Advanced privacy & encryption</li>
            <li>✓ Team collaboration</li>
            <li>✓ Priority support</li>
          </ul>
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 sm:px-6 py-3 rounded-md font-semibold w-full text-sm sm:text-base">Get started</button>
        </div>
        {/* Enterprise */}
        <div className="bg-black rounded-2xl p-6 sm:p-8 flex flex-col items-center shadow-lg md:col-span-2 lg:col-span-1">
          <div className="text-base sm:text-lg font-semibold text-white mb-2">Enterprise</div>
          <div className="text-3xl sm:text-4xl font-bold text-white mb-4 sm:mb-6">$30</div>
          <ul className="text-gray-300 text-left mb-6 sm:mb-8 space-y-2 w-full text-sm sm:text-base">
            <li>✓ Unlimited command history</li>
            <li>✓ Context-aware search</li>
            <li>✓ Unlimited devices</li>
            <li>✓ Enterprise-grade security</li>
            <li>✓ Team collaboration</li>
            <li>✓ Dedicated support</li>
          </ul>
          <button className="bg-[#23231f] text-white px-4 sm:px-6 py-3 rounded-md font-semibold w-full text-sm sm:text-base">Get started</button>
        </div>
      </div>
      <div className="text-center text-white text-base sm:text-lg mt-6 sm:mt-8">
        Have any questions? see our <a href="#" className="text-orange-500 underline hover:text-orange-600">FAQ</a>
      </div>
    </section>
  )
}

export function Hero() {
  return (
    <section className="relative z-10 px-4 sm:px-6 py-20 sm:py-24 lg:py-32 mt-16 sm:mt-0">
      <div className="max-w-5xl mx-auto">
        <div className="text-center max-w-4xl mx-auto">
          <Badge variant="secondary" className="mb-4 sm:mb-6 bg-orange-900 text-orange-200 border-orange-800 text-sm sm:text-base badge-hover">
          New: Context-Aware CLI History
          </Badge>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 leading-tight text-center">
            {/* Line 1 - Master Your Terminal History with cursor */}
            <div className="flex items-center justify-center gap-1 sm:gap-2">
              <span className="whitespace-nowrap">Master Your Terminal</span>
              <span className="whitespace-nowrap flex items-center gap-1 sm:gap-2">
                History
                <svg 
                  className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 animate-pulse fill-orange-500 stroke-white stroke-1 flex-shrink-0" 
                  viewBox="0 0 24 24"
                  alt="cursor"
                >
                  <path d="M13.64,21.97C13.14,22.21 12.54,22 12.31,21.5L10.13,16.76L7.62,18.78C7.45,18.92 7.24,19 7,19A1,1 0 0,1 6,18V3A1,1 0 0,1 7,2C7.24,2 7.47,2.09 7.64,2.23L7.65,2.22L19.14,11.86C19.57,12.22 19.62,12.85 19.27,13.27C19.12,13.45 18.91,13.57 18.7,13.61L15.54,14.23L17.74,18.96C18,19.46 17.76,20.05 17.26,20.28L13.64,21.97Z"/>
                </svg>
              </span>
            </div>
            {/* Line 2 - White text */}
            <div className="mt-4 sm:mt-6 text-white">
              Securely, Seamlessly, Everywhere
            </div>
          </h1>

          <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 mb-8 sm:mb-12 leading-relaxed max-w-3xl mx-auto">
            CommandChronicles is your encrypted, cross-device command log. Search, sync, and understand your CLI history
            like never before — with full context and total control.
          </p>

          {/* Decorative boxes around buttons */}
          <div className="relative mb-12 sm:mb-16">
            {/* Top-left decorative rectangle */}
            <div className="absolute -top-8 -left-8 w-24 h-12 border-2 border-blue-500/30 rounded-lg hidden lg:block"></div>
            
            {/* Bottom-right decorative rectangle */}
            <div className="absolute -bottom-8 -right-8 w-28 h-14 border-2 border-green-500/30 rounded-lg hidden lg:block"></div>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg w-full sm:w-auto">
                Get Started Free
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
              </Button>
              <Button size="lg" className="bg-black text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg w-full sm:w-auto">
                View Demo
              </Button>
            </div>
          </div>

          <TerminalPreview />
          <AboutSection />
          <TestimonialSection />
          <WhatMakesUsDifferentSection />
          <FeatureSection />
          <PricingSection />
        </div>
      </div>
    </section>
  )
}