import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Phone } from "lucide-react"

export default function FireProtectionSection() {
  return (
    <section className="py-20 bg-slate-100">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text content - moved to left (originally on right) */}
          <div className="space-y-8">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 leading-tight">
              Complete fire protection, instant emergency response
            </h2>

            <p className="text-lg text-slate-600 leading-relaxed">
              Our smart smoke detection system provides comprehensive fire protection with dual-sensor technology that
              distinguishes between different types of fires. When smoke is detected, our monitoring center immediately
              contacts the fire department while sending alerts to your smartphone and emergency contacts.
            </p>

            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold text-sm">1</span>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800 mb-1">Early Detection</h4>
                  <p className="text-slate-600">
                    Dual-sensor technology detects both fast-flaming and slow-smoldering fires instantly
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold text-sm">2</span>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800 mb-1">Multi-Channel Alerts</h4>
                  <p className="text-slate-600">
                    Simultaneous notifications to smartphones, monitoring center, and local alarm system
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold text-sm">3</span>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800 mb-1">Fire Department Dispatch</h4>
                  <p className="text-slate-600">
                    Professional monitoring team immediately contacts fire department and coordinates response
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h4 className="font-semibold text-slate-800 mb-3">Call Now For Free Fire Safety Assessment</h4>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white flex items-center space-x-2 px-6 py-3">
                <Phone className="w-4 h-4" />
                <span>855-438-6500</span>
              </Button>
            </div>
          </div>

          {/* Fire department response image - moved to right (originally on left) */}
          <div className="relative">
            <Image
              src="/home-automation-with-tablet.jpg"
              alt="Fire department emergency response coordination"
              width={600}
              height={500}
              className="w-full h-auto rounded-lg"
            />

            {/* Emergency response overlay */}
            <div className="absolute bottom-8 left-8 bg-red-600 text-white rounded-lg shadow-xl p-4">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                <div>
                  <div className="font-semibold text-sm">Emergency Response Ready</div>
                  <div className="text-xs opacity-90">Fire department coordination active</div>
                </div>
              </div>
            </div>

            {/* Response time indicator */}
            <div className="absolute top-8 right-8 bg-white rounded-lg shadow-xl p-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">&lt; 30s</div>
                <div className="text-xs text-slate-600">Average response time</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
