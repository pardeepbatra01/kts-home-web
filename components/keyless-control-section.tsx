import Image from "next/image"
import { CheckCircle } from "lucide-react"

export default function KeylessControlSection() {
  const features = [
    "Unlock with smartphone app",
    "Create temporary access codes",
    "Monitor all door activity",
    "Auto-lock after set time",
    "Voice control integration",
    "Emergency backup key",
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Mobile app mockup */}
          <div className="relative">
            <Image
              src="close-up-electric-car-france.jpg"
              alt="Smart lock mobile app interface"
              width={300}
              height={600}
              className="w-full max-w-sm mx-auto h-auto"
            />

            {/* App features overlay */}
            <div className="absolute top-8 right-8 bg-blue-600 text-white rounded-lg p-4">
              <div className="text-sm font-medium">Smart Lock App</div>
              <div className="text-xs opacity-90">Full control at your fingertips</div>
            </div>
          </div>

          {/* Features content */}
          <div className="space-y-8">
            <div>
              <span className="text-blue-600 font-semibold text-sm uppercase tracking-wide">KEYLESS CONVENIENCE</span>
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 leading-tight mt-2">
                Leave your keys at home
              </h2>
              <p className="text-lg text-slate-600 mt-4">
                Your smartphone is all you need to access your home securely and conveniently
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
              <h4 className="font-semibold text-slate-800 mb-3">Smart Home Integration</h4>
              <p className="text-slate-600 text-sm leading-relaxed">
                Our smart locks integrate seamlessly with your existing smart home system. Set up automation rules to
                turn on lights when you unlock the door, adjust the thermostat when you arrive home, or receive
                notifications when family members come and go.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
