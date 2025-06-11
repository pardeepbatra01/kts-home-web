import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function OutdoorCameraHero() {
  return (
    <section className="relative bg-gradient-to-br from-blue-600 to-blue-800 py-16 lg:py-24 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/screencapture-fluenthome-outdoor-security-camera-2025-06-11-15_37_42.png-7P0eHrCh9AbG1k4HzblE4qLXI4ZKuY.jpeg"
          alt="Modern backyard with outdoor security cameras"
          width={1600}
          height={800}
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 to-blue-800/80"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Outdoor scene image - moved to left (originally on right in reference) */}
          <div className="relative lg:order-1 mt-8 lg:mt-0">
            <Image
              src="2008.i211.011..video surveillance security cameras realistic set.jpg"
              alt="Backyard patio with outdoor security cameras monitoring the area"
              width={600}
              height={500}
              className="w-full max-w-lg mx-auto h-auto rounded-lg"
            />

            {/* Camera detection overlay */}
            <div className="absolute top-4 lg:top-8 right-4 lg:right-8 bg-white rounded-lg shadow-xl p-3 lg:p-4">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-blue-600 rounded-full animate-pulse"></div>
                <div>
                  <div className="font-semibold text-slate-800 text-sm">Motion Detected</div>
                  <div className="text-xs text-slate-600">Backyard camera</div>
                </div>
              </div>
            </div>

            {/* Recording status */}
            <div className="absolute bottom-4 lg:bottom-8 left-4 lg:left-8 bg-red-600 text-white rounded-lg p-3 lg:p-4">
              <div className="text-sm font-medium">● Recording</div>
              <div className="text-xs opacity-90">4K Ultra HD</div>
            </div>
          </div>

          {/* Text content - moved to right (originally on left in reference) */}
          <div className="space-y-6 lg:space-y-8 text-white lg:order-2">
            <div className="inline-block">
              <span className="bg-blue-100 text-blue-800 px-3 py-1 lg:px-4 lg:py-2 rounded-full text-xs lg:text-sm font-semibold uppercase tracking-wide">
                OUTDOOR SECURITY
              </span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
              Outdoor security cameras designed for complete protection
            </h1>

            <p className="text-lg lg:text-xl text-blue-100 leading-relaxed max-w-xl">
              Monitor your entire property with weatherproof 4K cameras featuring advanced night vision, intelligent
              motion detection, and 24/7 cloud recording. Keep your home secure from every angle.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-white text-blue-600 hover:bg-blue-50 px-6 lg:px-8 py-3 text-base lg:text-lg font-semibold">
                Shop Outdoor Cameras
              </Button>
              <Button className="bg-blue-500 hover:bg-blue-400 text-white px-6 lg:px-8 py-3 text-base lg:text-lg">
                Get Free Quote
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
