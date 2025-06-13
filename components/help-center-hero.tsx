import { Search } from "lucide-react"

export default function HelpCenterHero() {
  return (
    <div className="relative bg-gray-100">
      <div className="absolute inset-0 overflow-hidden">
        <img src="/placeholder.jpg" alt="Person using mobile app" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-800/80 to-blue-600/70" />
      </div>

      <div className="relative container mx-auto px-4 py-16 md:py-24 text-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">Fluent Help Center</h1>
        <p className="text-lg text-white/90 mb-8">Search or browse our help articles</p>

        <div className="max-w-2xl mx-auto relative">
          <div className="relative">
            <input
              type="text"
              placeholder="Search keywords here..."
              className="w-full px-4 py-3 pl-12 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          </div>
        </div>
      </div>
    </div>
  )
}
