import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Phone } from "lucide-react"

export default function ReliableDetectionSection() {
  return (
    <section className="py-20 bg-slate-100">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text content - moved to left (originally on right) */}
          <div className="space-y-8">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 leading-tight">
              Reliable detection, rapid response
            </h2>

            <p className="text-lg text-slate-600 leading-relaxed">
              Our smart carbon monoxide detectors provide continuous monitoring with instant alerts sent directly to
              your smartphone and our 24/7 monitoring center. When dangerous CO levels are detected, our trained
              professionals immediately contact emergency services and notify you of the situation.
            </p>

            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold text-sm">1</span>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800 mb-1">Instant Detection</h4>
                  <p className="text-slate-600">
                    Advanced electrochemical sensors detect CO levels immediately and accurately
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold text-sm">2</span>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800 mb-1">Immediate Alerts</h4>
                  <p className="text-slate-600">
                    Smartphone notifications and professional monitoring center alerts within seconds
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold text-sm">3</span>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800 mb-1">Emergency Response</h4>
                  <p className="text-slate-600">
                    Professional monitoring team contacts emergency services and coordinates response
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h4 className="font-semibold text-slate-800 mb-3">Call Now For Free Quote</h4>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white flex items-center space-x-2 px-6 py-3">
                <Phone className="w-4 h-4" />
                <span>855-438-6500</span>
              </Button>
            </div>
          </div>

          {/* Customer service image - moved to right (originally on left) */}
          <div className="relative">
            <Image
              src="smoke-alarm-isolated-white.jpg"
              alt="Professional monitoring team providing 24/7 support"
              width={600}
              height={500}
              className="w-full h-auto rounded-lg"
            />

            {/* Monitoring status overlay */}
            <div className="absolute bottom-8 left-8 bg-white rounded-lg shadow-xl p-4">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <div>
                  <div className="font-semibold text-slate-800 text-sm">24/7 Monitoring Active</div>
                  <div className="text-xs text-slate-600">Professional response team standing by</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
