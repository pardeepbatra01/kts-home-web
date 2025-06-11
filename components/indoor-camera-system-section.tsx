import Image from "next/image"
import { Check } from "lucide-react"

export default function IndoorCameraSystemSection() {
  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Mobile app image - moved to left (originally on right in reference) */}
          <div className="relative lg:order-1">
            <div className="relative max-w-sm mx-auto">
              <Image
                src="person-showcasing-their-home-using-their-smartphone.jpg"
                alt="Mobile app showing indoor camera feeds"
                width={300}
                height={600}
                className="w-full h-auto"
              />

              {/* App interface overlays */}
              <div className="absolute top-16 left-1/2 transform -translate-x-1/2 bg-white rounded-lg shadow-lg p-3 max-w-xs">
                <div className="text-xs font-semibold text-slate-800 mb-1">Living Room</div>
                <div className="text-xs text-slate-600">Motion detected 2 min ago</div>
              </div>

              <div className="absolute bottom-32 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white rounded-lg p-3 max-w-xs">
                <div className="text-xs font-semibold mb-1">Recording Active</div>
                <div className="text-xs opacity-90">Kitchen Camera</div>
              </div>
            </div>
          </div>

          {/* Text content - moved to right (originally on left in reference) */}
          <div className="space-y-6 lg:space-y-8 lg:order-2">
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-slate-800 leading-tight">
              Check in at home, any time you want.
            </h2>

            <p className="text-lg text-slate-600 leading-relaxed">
              Stay connected to your home with our powerful mobile app. Monitor live feeds, receive instant alerts, and
              control your indoor cameras from anywhere in the world.
            </p>

            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Check className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-slate-800 mb-1">Live Streaming</h4>
                  <p className="text-slate-600">Watch real-time HD video from all your indoor cameras</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Check className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-slate-800 mb-1">Smart Alerts</h4>
                  <p className="text-slate-600">Receive push notifications for motion, sound, and activity</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Check className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-slate-800 mb-1">Cloud Playback</h4>
                  <p className="text-slate-600">Access recorded footage instantly from secure cloud storage</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Check className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-slate-800 mb-1">Remote Control</h4>
                  <p className="text-slate-600">Pan, tilt, and zoom cameras remotely through the app</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Check className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-slate-800 mb-1">Family Sharing</h4>
                  <p className="text-slate-600">Grant access to family members with custom permissions</p>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 rounded-lg p-6">
              <h4 className="font-semibold text-slate-800 mb-2">Available on iOS & Android</h4>
              <p className="text-slate-600 text-sm">
                Download our free mobile app and start monitoring your home in minutes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
