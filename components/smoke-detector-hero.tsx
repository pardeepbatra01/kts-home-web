import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function SmokeDetectorHero() {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 to-blue-100 py-20 lg:py-32 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/placeholder.svg?height=800&width=1600"
          alt="Family safe at home with smoke detection"
          width={1600}
          height={800}
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50/90 to-blue-100/70"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Device image - moved to left (originally on right) */}
          <div className="relative lg:order-1">
            <Image
              src="still-life-tech-device.jpg"
              alt="Smart Smoke Detector"
              width={400}
              height={400}
              className="w-full max-w-md mx-auto h-auto"
            />
          </div>

          {/* Text content - moved to right (originally on left) */}
          <div className="space-y-8 lg:order-2">
            <h1 className="text-4xl lg:text-6xl font-bold text-slate-800 leading-tight">
              Advanced fire protection with our smart smoke detector system
            </h1>

            <p className="text-lg text-slate-600 leading-relaxed max-w-xl">
              Protect your family with our intelligent smoke detection system featuring dual-sensor technology, instant
              smartphone alerts, and 24/7 professional monitoring. Early detection saves lives and property.
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
        </div>
      </div>
    </section>
  )
}
