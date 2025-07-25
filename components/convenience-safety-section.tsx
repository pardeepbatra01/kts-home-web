import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function ConvenienceSafetySection() {
  return (
    <section className="py-16 lg:py-20 bg-slate-100">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Text content - moved to left (originally on right in reference) */}
          <div className="space-y-6 lg:space-y-8 lg:order-1">
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-slate-800 leading-tight">
              More convenience and enhanced safety
            </h2>

            <p className="text-lg text-slate-600 leading-relaxed">
              Smart switches provide more than just convenience - they enhance your home's safety and security. Set
              lights to turn on automatically when you arrive home, create vacation schedules to simulate occupancy, and
              never worry about leaving lights on again.
            </p>

            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold text-sm">1</span>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800 mb-1">Remote Control</h4>
                  <p className="text-slate-600">Turn lights on or off from anywhere using your smartphone</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold text-sm">2</span>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800 mb-1">Smart Scheduling</h4>
                  <p className="text-slate-600">Set automatic schedules for energy savings and security</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold text-sm">3</span>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800 mb-1">Energy Monitoring</h4>
                  <p className="text-slate-600">Track power usage and optimize your energy consumption</p>
                </div>
              </div>
            </div>

            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 lg:px-8 py-3">
              Get Your Smart Switches
            </Button>
          </div>

          {/* Wall outlet with smart switch image - moved to right (originally on left in reference) */}
          <div className="relative lg:order-2 mt-8 lg:mt-0">
            <Image
              src="person-using-smartphone-his-automated-home.jpg"
              alt="Smart switch installed in wall outlet"
              width={600}
              height={500}
              className="w-full h-auto rounded-lg shadow-2xl"
            />

            {/* Control status overlay */}
            <div className="absolute bottom-4 lg:bottom-8 right-4 lg:right-8 bg-white rounded-lg shadow-xl p-3 lg:p-4">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <div>
                  <div className="font-semibold text-slate-800 text-sm">Switch Active</div>
                  <div className="text-xs text-slate-600">Dimmed to 75%</div>
                </div>
              </div>
            </div>

            {/* Energy monitoring indicator */}
            <div className="absolute top-4 lg:top-8 left-4 lg:left-8 bg-blue-600 text-white rounded-lg p-3 lg:p-4">
              <div className="text-sm font-medium">Energy Monitor</div>
              <div className="text-xs opacity-90">12W current usage</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
