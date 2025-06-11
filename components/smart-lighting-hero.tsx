import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function SmartLightingHero() {
  return (
    <section className="relative bg-gradient-to-br from-blue-600 to-blue-800 py-20 lg:py-32 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/placeholder.svg?height=800&width=1600"
          alt="Modern home with smart lighting system"
          width={1600}
          height={800}
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 to-blue-800/80"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Smart lighting fixtures image - moved to right (originally on left) */}
          <div className="relative lg:order-2">
            <Image
              src="14399.jpg"
              alt="Modern smart lighting fixtures"
              width={600}
              height={500}
              className="w-full max-w-lg mx-auto h-auto rounded-lg"
            />

            {/* Lighting control overlay */}
            <div className="absolute top-8 left-8 bg-white rounded-lg shadow-xl p-4">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-blue-600 rounded-full animate-pulse"></div>
                <div>
                  <div className="font-semibold text-slate-800 text-sm">Evening Scene Active</div>
                  <div className="text-xs text-slate-600">Warm lighting enabled</div>
                </div>
              </div>
            </div>
          </div>

          {/* Text content - moved to left (originally on right) */}
          <div className="space-y-8 text-white lg:order-1">
            <div className="inline-block">
              <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wide">
                INTELLIGENT LIGHTING
              </span>
            </div>

            <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
              Intelligent & energy-efficient smart lighting
            </h1>

            <p className="text-xl text-blue-100 leading-relaxed max-w-xl">
              Transform your home with intelligent lighting that adapts to your lifestyle. Create custom scenes, save
              energy, and enhance your home security with our advanced smart lighting system.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 text-lg font-semibold">
                Explore Smart Lighting
              </Button>
              <Button className="bg-blue-500 hover:bg-blue-400 text-white px-8 py-3 text-lg">Get Free Quote</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
