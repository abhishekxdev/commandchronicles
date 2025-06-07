import { Badge } from "@/components/ui/badge"
import { RefreshCw, Search, Clock, Star, Shield } from "lucide-react"

const features = [
  {
    icon: RefreshCw,
    title: "Cross-Machine Sync",
    description:
      "Your command history, synchronized across every machine you use. Work anywhere, and never lose track.",
    color: "blue",
  },
  {
    icon: Search,
    title: "Context-Aware Search",
    description:
      "View every command alongside its project, path, and environment. Know exactly where and why it was run.",
    color: "green",
  },
  {
    icon: Clock,
    title: "Execution Insights",
    description: "Dive into each command's execution details — from duration to exit codes and timestamps.",
    color: "purple",
  },
  {
    icon: Star,
    title: "Favorites Management",
    description: "Bookmark your most-used commands for quick access and zero guesswork.",
    color: "yellow",
  },
  {
    icon: Shield,
    title: "Built-In Privacy",
    description: "Commands are encrypted at rest, and customizable patterns automatically exclude sensitive info.",
    color: "red",
  },
]

const colorClasses = {
  blue: "bg-blue-100 text-blue-600",
  green: "bg-green-100 text-green-600",
  purple: "bg-purple-100 text-purple-600",
  yellow: "bg-yellow-100 text-yellow-600",
  red: "bg-red-100 text-red-600",
}

export function Features() {
  return (
    <section id="features" className="relative z-10 px-6 py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-6 bg-blue-900 text-blue-200 border-blue-800">
            🧩 Feature Section
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Built for developers who live in the terminal.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className={`bg-gray-700 rounded-xl p-8 shadow-sm border border-gray-600 hover:bg-gray-600 transition-shadow ${
                  index === 4 ? "md:col-span-2 lg:col-span-1" : ""
                }`}
              >
                <div className="flex items-center mb-4">
                  <div className={`p-3 rounded-lg mr-4 ${colorClasses[feature.color as keyof typeof colorClasses]}`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                </div>
                <p className="text-gray-300 leading-relaxed">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
