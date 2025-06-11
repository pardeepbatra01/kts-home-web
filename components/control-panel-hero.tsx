import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function ControlPanelHero() {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 to-blue-100 py-20 lg:py-32 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/smart-control-panel.jpg"
          alt="Woman using smart home control"
          width={1600}
          height={800}
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50/90 to-blue-100/70"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text content - moved to left */}
          <div className="space-y-8">
            <h1 className="text-4xl lg:text-6xl font-bold text-slate-800 leading-tight">
              Smart Control Panel: Your Home Security Command Center
            </h1>

            <p className="text-lg text-slate-600 leading-relaxed max-w-xl">
              Take command of your entire home security system from one intelligent hub. Monitor cameras, check CO levels,
              control access, and receive instant alerts. Our advanced touch-screen panel features voice control and
              cellular backup for uninterrupted protection.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg">Get Started Today</Button>
              <Button
                variant="outline"
                className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 text-lg"
              >
                Learn More
              </Button>
            </div>
          </div>

          {/* Control panel image - moved to right */}
          <div className="relative">
            <Image
              src="/smart-control-panel.jpg"
              alt="Kts Smart Control Panel"
              width={400}
              height={500}
              className="w-full max-w-md mx-auto h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
