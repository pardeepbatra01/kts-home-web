import { Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

export function LicensingHero() {
  return (
    <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/placeholder.svg?height=600&width=1200')`,
        }}
      />

      {/* Blue Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-800/80 to-blue-600/70" />

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6">Licensing</h1>
        <p className="text-lg md:text-xl lg:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
          Fluent Home is fully licensed and certified to provide professional security and automation services across
          all our service areas.
        </p>
        <Button
          size="lg"
          className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 text-lg font-semibold rounded-full"
        >
          <Phone className="mr-2 h-5 w-5" />
          855-438-6500
        </Button>
      </div>
    </section>
  )
}
