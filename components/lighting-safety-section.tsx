import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function LightingSafetySection() {
  return (
    <section className="py-20 bg-slate-100">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text content - moved to right (originally on left) */}
          <div className="space-y-8 lg:order-2">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 leading-tight">
              Enhance your security with intelligent lighting automation
            </h2>

            <p className="text-lg text-slate-600 leading-relaxed">
              Smart lighting isn't just about convenience - it's a powerful security tool. Our intelligent lighting
              system can simulate occupancy when you're away, automatically illuminate pathways for safety, and
              integrate with your security system to deter intruders.
            </p>

            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold text-sm">1</span>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800 mb-1">Automated Security Lighting</h4>
                  <p className="text-slate-600">
                    Lights automatically turn on when motion is detected or security events occur
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold text-sm">2</span>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800 mb-1">Vacation Mode</h4>
                  <p className="text-slate-600">Simulate occupancy with random lighting patterns when you're away</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold text-sm">3</span>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800 mb-1">Pathway Illumination</h4>
                  <p className="text-slate-600">Automatic lighting guides you safely through your home at night</p>
                </div>
              </div>
            </div>

            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">Call Now For Free Quote!</Button>
          </div>

          {/* Modern house exterior image - moved to left (originally on right) */}
          <div className="relative lg:order-1">
            <Image
              src="high-angle-hands-holding-smartphone.jpg"
              alt="Modern house with smart outdoor lighting at night"
              width={600}
              height={500}
              className="w-full h-auto rounded-lg"
            />

            {/* Security lighting overlay */}
            <div className="absolute bottom-8 right-8 bg-white rounded-lg shadow-xl p-4">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-blue-600 rounded-full animate-pulse"></div>
                <div>
                  <div className="font-semibold text-slate-800 text-sm">Security Mode Active</div>
                  <div className="text-xs text-slate-600">Perimeter lighting enabled</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
