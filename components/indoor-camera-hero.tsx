import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function IndoorCameraHero() {
  return (
    <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>

      <div className="relative max-w-7xl mx-auto px-4 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Text content - moved to right (originally on left in reference) */}
          <div className="space-y-6 lg:space-y-8 lg:order-2">
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
              This is what an indoor security camera should be.
            </h1>

            <p className="text-lg lg:text-xl text-blue-100 leading-relaxed max-w-2xl">
              Monitor your home's interior with crystal-clear HD video, intelligent motion detection, and seamless smart
              home integration. Keep your family safe with advanced indoor surveillance technology.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-white text-blue-600 hover:bg-blue-50 px-6 lg:px-8 py-3 text-lg font-semibold">
                Get Free Quote
              </Button>
            </div>

            <div className="flex items-center space-x-6 pt-4">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                <span className="text-sm text-blue-100">Professional Installation</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                <span className="text-sm text-blue-100">24/7 Monitoring</span>
              </div>
            </div>
          </div>

          {/* Hero image - moved to left (originally on right in reference) */}
          <div className="relative lg:order-1">
            <div className="relative">
              <Image
                src="home-safety.jpg"
                alt="Person holding tablet showing indoor security camera feed"
                width={500}
                height={600}
                className="w-full max-w-lg mx-auto h-auto rounded-lg shadow-2xl"
              />

              {/* Floating notification */}
              <div className="absolute top-4 right-4 bg-white rounded-lg shadow-xl p-4 max-w-xs">
                <div className="flex items-center space-x-3">
                  <div className="w-4 h-4 bg-blue-600 rounded-full animate-pulse"></div>
                  <div>
                    <div className="font-semibold text-slate-800 text-sm">Motion Detected</div>
                    <div className="text-xs text-slate-600">Living Room Camera</div>
                  </div>
                </div>
              </div>

              {/* Live indicator */}
              <div className="absolute bottom-4 left-4 bg-red-600 text-white rounded-full px-3 py-1 text-sm font-medium">
                ● LIVE
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
