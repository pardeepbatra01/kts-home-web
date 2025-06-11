import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Apple, Play } from "lucide-react"

export default function AppDownloadSection() {
  return (
    <section className="py-20 bg-slate-800 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <div className="space-y-8">
            <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
              Complete control of your home wherever you are!
            </h2>

            <p className="text-xl text-slate-300 leading-relaxed">
              Experience the freedom of total home control with our award-winning mobile app. Monitor security, control
              devices, and manage automation from anywhere with an internet connection.
            </p>

            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold text-sm">1</span>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Real-time Monitoring</h4>
                  <p className="text-slate-300">
                    Get instant notifications and live updates from all your connected devices
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold text-sm">2</span>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Remote Control</h4>
                  <p className="text-slate-300">Control lights, locks, thermostats, and security systems remotely</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold text-sm">3</span>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Smart Automation</h4>
                  <p className="text-slate-300">Create custom scenes and schedules for ultimate convenience</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-black text-white hover:bg-gray-800 flex items-center space-x-3 px-6 py-3">
                <Apple className="w-6 h-6" />
                <div className="text-left">
                  <div className="text-xs">Download on the</div>
                  <div className="font-semibold">App Store</div>
                </div>
              </Button>
              <Button className="bg-black text-white hover:bg-gray-800 flex items-center space-x-3 px-6 py-3">
                <Play className="w-6 h-6" />
                <div className="text-left">
                  <div className="text-xs">Get it on</div>
                  <div className="font-semibold">Google Play</div>
                </div>
              </Button>
            </div>
          </div>

          {/* App interface mockup */}
          <div className="relative">
            <Image
              src="/monitoring.jpg"
              alt="Person using Kts Home app on smartphone"
              width={400}
              height={500}
              className="w-full max-w-md mx-auto h-auto rounded-lg"
            />

            {/* Control overlay */}
            <div className="absolute bottom-8 left-8 bg-white text-slate-800 rounded-lg shadow-xl p-4">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <div>
                  <div className="font-semibold text-sm">Connected</div>
                  <div className="text-xs text-slate-600">All systems online</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
