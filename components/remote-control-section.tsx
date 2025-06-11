import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function RemoteControlSection() {
  return (
    <section className="py-16 lg:py-20 bg-slate-100">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Text content - moved to left (originally on right in reference) */}
          <div className="space-y-6 lg:space-y-8 lg:order-1">
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-slate-800 leading-tight">
              Intelligent enough to respond to your lifestyle automatically
            </h2>

            <p className="text-lg text-slate-600 leading-relaxed">
              Our smart thermostat learns your daily routines and automatically adjusts temperature settings for optimal
              comfort and energy efficiency. Whether you're home, away, or sleeping, it adapts to your lifestyle
              seamlessly.
            </p>

            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold text-sm">1</span>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800 mb-1">Learning Algorithm</h4>
                  <p className="text-slate-600">
                    Automatically learns your schedule and temperature preferences over time
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold text-sm">2</span>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800 mb-1">Geofencing Technology</h4>
                  <p className="text-slate-600">Adjusts temperature based on your location and arrival time</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold text-sm">3</span>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800 mb-1">Energy Optimization</h4>
                  <p className="text-slate-600">Maximizes comfort while minimizing energy consumption and costs</p>
                </div>
              </div>
            </div>

            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 lg:px-8 py-3">
              Call Now For Free Quote!
            </Button>
          </div>

          {/* Living room with thermostat image - moved to right (originally on left in reference) */}
          <div className="relative lg:order-2 mt-8 lg:mt-0">
            <Image
              src="digital-tablet-screen-with-smart-home-controller-wooden-table.jpg"
              alt="Modern living room with wall-mounted smart thermostat"
              width={600}
              height={500}
              className="w-full h-auto rounded-lg shadow-2xl"
            />

            {/* Smart control overlay */}
            <div className="absolute bottom-4 lg:bottom-8 right-4 lg:right-8 bg-white rounded-lg shadow-xl p-3 lg:p-4">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-blue-600 rounded-full animate-pulse"></div>
                <div>
                  <div className="font-semibold text-slate-800 text-sm">Auto Mode Active</div>
                  <div className="text-xs text-slate-600">Learning your preferences</div>
                </div>
              </div>
            </div>

            {/* Temperature display */}
            <div className="absolute top-4 lg:top-8 left-4 lg:left-8 bg-blue-600 text-white rounded-lg p-3 lg:p-4">
              <div className="text-lg lg:text-xl font-bold">50°F</div>
              <div className="text-xs opacity-90">Target Temperature</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
