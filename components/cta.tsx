import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CTA() {
  return (
    <section className="relative z-10 px-4 sm:px-6 py-16 sm:py-20">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-6">Ready to master your terminal history?</h2>
        <p className="text-lg sm:text-xl text-gray-300 mb-6 sm:mb-8 leading-relaxed">
          Join thousands of developers who've transformed their CLI workflow.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
          <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg w-full sm:w-auto">
            Start Free Trial
            <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
          </Button>
          <Button variant="outline" size="lg" className="px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg w-full sm:w-auto">
            Schedule Demo
          </Button>
        </div>
      </div>
    </section>
  )
}