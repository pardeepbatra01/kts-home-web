import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function HomeMonitoringSection() {
  return (
    <section className="py-16 lg:py-20 bg-slate-100">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Text content - moved to right (originally on left in reference) */}
          <div className="space-y-6 lg:space-y-8 lg:order-2">
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-slate-800 leading-tight">
              What's happening around your home?
            </h2>

            <p className="text-lg text-slate-600 leading-relaxed">
              Stay informed about all activity around your property with intelligent outdoor cameras that distinguish
              between people, vehicles, and animals. Get instant alerts for important events while filtering out false
              alarms from wind, rain, or shadows.
            </p>

            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold text-sm">1</span>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800 mb-1">Smart Detection</h4>
                  <p className="text-slate-600">AI-powered recognition of people, vehicles, and packages</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold text-sm">2</span>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800 mb-1">Custom Zones</h4>
                  <p className="text-slate-600">Set specific areas for monitoring and alerts</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold text-sm">3</span>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800 mb-1">24/7 Recording</h4>
                  <p className="text-slate-600">Continuous recording with cloud and local storage options</p>
                </div>
              </div>
            </div>

            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 lg:px-8 py-3">
              Call Now For Free Quote!
            </Button>
          </div>

          {/* Single camera image - moved to left (originally on right in reference) */}
          <div className="relative lg:order-1 mt-8 lg:mt-0">
            <Image
              src="06june22_cctv_icon_02.jpg"
              alt="White outdoor security camera mounted on wall"
              width={400}
              height={500}
              className="w-full max-w-md mx-auto h-auto"
            />

            {/* Detection overlay */}
            <div className="absolute bottom-4 lg:bottom-8 right-4 lg:right-8 bg-white rounded-lg shadow-xl p-3 lg:p-4">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <div>
                  <div className="font-semibold text-slate-800 text-sm">Person Detected</div>
                  <div className="text-xs text-slate-600">Front yard area</div>
                </div>
              </div>
            </div>

            {/* Night vision indicator */}
            <div className="absolute top-4 lg:top-8 left-4 lg:left-8 bg-blue-600 text-white rounded-lg p-3 lg:p-4">
              <div className="text-sm font-medium">Night Vision</div>
              <div className="text-xs opacity-90">Color mode active</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
