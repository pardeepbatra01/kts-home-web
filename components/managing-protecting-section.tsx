import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function ManagingProtectingSection() {
  return (
    <section className="py-20 bg-slate-200">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text content - moved to right */}
          <div className="lg:order-2 space-y-8">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 leading-tight">
              Managing & protecting your home has never been easier
            </h2>

            <p className="text-lg text-slate-600 leading-relaxed">
              Advanced AI-powered monitoring and instant alerts keep your family safe while intelligent automation makes
              daily life more convenient and efficient.
            </p>

            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold text-sm">1</span>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800 mb-1">Real-time Monitoring</h4>
                  <p className="text-slate-600">
                    Get instant notifications about your home's status and security events
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold text-sm">2</span>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800 mb-1">Smart Automation</h4>
                  <p className="text-slate-600">Automate routines based on your schedule and preferences</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold text-sm">3</span>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800 mb-1">Emergency Response</h4>
                  <p className="text-slate-600">Immediate alerts to emergency services when needed</p>
                </div>
              </div>
            </div>

            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">Call Now For Free Quote</Button>
          </div>

          {/* Control panel image - moved to left */}
          <div className="lg:order-1 relative">
            <Image
              src="smart-home.jpg"
              alt="Home Protection Interface"
              width={300}
              height={400}
              className="w-full max-w-sm mx-auto h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
