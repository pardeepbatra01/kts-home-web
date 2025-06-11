import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function HomeWatchingSection() {
  return (
    <section className="py-16 lg:py-20 bg-slate-100">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Indoor camera image - moved to right (originally on left in reference) */}
          <div className="relative lg:order-2">
            <div className="relative">
              <Image
                src="house-automation-with-camera.jpg"
                alt="White indoor security camera on wooden shelf with plants"
                width={600}
                height={500}
                className="w-full h-auto rounded-lg shadow-xl"
              />

              {/* Motion detection overlay */}
              <div className="absolute top-6 right-6 bg-white rounded-lg shadow-xl p-4">
                <div className="flex items-center space-x-3">
                  <div className="w-4 h-4 bg-blue-600 rounded-full animate-pulse"></div>
                  <div>
                    <div className="font-semibold text-slate-800 text-sm">Recording</div>
                    <div className="text-xs text-slate-600">Motion detected</div>
                  </div>
                </div>
              </div>

              {/* Privacy mode indicator */}
              <div className="absolute bottom-6 left-6 bg-slate-800 text-white rounded-lg p-3">
                <div className="text-sm font-medium">Privacy Mode</div>
                <div className="text-xs opacity-90">Camera disabled</div>
              </div>
            </div>
          </div>

          {/* Text content - moved to left (originally on right in reference) */}
          <div className="space-y-6 lg:space-y-8 lg:order-1">
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-slate-800 leading-tight">
              Switch between your indoor security cameras and watch live or recorded video.
            </h2>

            <p className="text-lg text-slate-600 leading-relaxed">
              Seamlessly monitor multiple rooms with our intuitive camera switching system. Access live feeds instantly
              or review recorded footage from any camera in your home security network.
            </p>

            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold text-sm">1</span>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800 mb-1">Multi-Camera View</h4>
                  <p className="text-slate-600">Monitor up to 16 cameras simultaneously on one screen</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold text-sm">2</span>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800 mb-1">Instant Playback</h4>
                  <p className="text-slate-600">Review recorded events with timeline scrubbing</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold text-sm">3</span>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800 mb-1">Smart Alerts</h4>
                  <p className="text-slate-600">Get notified only for important events and activities</p>
                </div>
              </div>
            </div>

            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 lg:px-8 py-3">
              Call Now For Free Quote!
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
