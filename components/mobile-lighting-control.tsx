import Image from "next/image"
import { CheckCircle } from "lucide-react"

export default function MobileLightingControl() {
  const features = [
    "Control lights from anywhere in the world",
    "Create custom lighting scenes and schedules",
    "Voice control with Alexa and Google Assistant",
    "Energy monitoring and usage reports",
    "Geofencing for automatic on/off",
    "Integration with security system events",
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Features content - moved to right (originally on left) */}
          <div className="space-y-8 lg:order-2">
            <div>
              <span className="text-blue-600 font-semibold text-sm uppercase tracking-wide">MOBILE CONTROL</span>
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 leading-tight mt-2">
                Control your lighting from anywhere
              </h2>
              <p className="text-lg text-slate-600 mt-4">
                Complete lighting control at your fingertips with our intuitive mobile app
              </p>
            </div>

            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0" />
                  <span className="text-slate-700 font-medium">{feature}</span>
                </div>
              ))}
            </div>

            <div className="bg-blue-50 rounded-lg p-6">
              <h4 className="font-semibold text-slate-800 mb-3">Smart Automation Features</h4>
              <p className="text-slate-600 text-sm leading-relaxed">
                Set up intelligent automation rules that respond to your daily routines. Lights can automatically adjust
                based on time of day, occupancy, natural light levels, or security events. Create the perfect ambiance
                for any situation with just a tap.
              </p>
            </div>
          </div>

          {/* Mobile app mockup - moved to left (originally on right) */}
          <div className="relative lg:order-1">
            <Image
              src="high-angle-hands-holding-smartphone.jpg"
              alt="Smart lighting mobile app interface"
              width={300}
              height={600}
              className="w-full max-w-sm mx-auto h-auto"
            />

            {/* App features overlay */}
            <div className="absolute top-8 right-8 bg-blue-600 text-white rounded-lg p-4">
              <div className="text-sm font-medium">Lighting Control</div>
              <div className="text-xs opacity-90">12 devices connected</div>
            </div>

            {/* Scene indicator */}
            <div className="absolute bottom-8 left-8 bg-white rounded-lg shadow-xl p-4">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div>
                  <div className="font-semibold text-slate-800 text-sm">Movie Night</div>
                  <div className="text-xs text-slate-600">Scene active</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
