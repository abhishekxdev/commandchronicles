import { Hero } from "@/components/hero"

import { CTA } from "@/components/cta"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black grid-bg relative overflow-hidden">
      {/* Removed grid background */}
      <Header />
      <Hero />
     
      <CTA />
      <Footer />
    </div>
  )
}
