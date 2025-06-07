import { Hero } from "@/components/hero"

import { CTA } from "@/components/cta"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen relative overflow-hidden" style={{ backgroundColor: '#272724' }}>
      {/* Grid overlay that only covers hero section */}
      <div className="grid-overlay"></div>
      <Header />
      <Hero />
     
      <CTA />
      <Footer />
    </div>
  )
}