import Image from "next/image"
import { CheckCircle, Shield, Smartphone, Zap, AlertTriangle } from "lucide-react"

export default function SmokeDetectorSection() {
  const features = [
    {
      icon: Shield,
      title: "Dual-Sensor Technology",
      description: "Photoelectric and ionization sensors for comprehensive fire detection",
    },
    {
      icon: Smartphone,
      title: "Smart Notifications",
      description: "Instant alerts to your smartphone and family members simultaneously",
    },
    {
      icon: Zap,
      title: "Fast Response Time",
      description: "Advanced algorithms detect smoke particles within seconds of detection",
    },
    {
      icon: AlertTriangle,
      title: "Professional Monitoring",
      description: "24/7 fire department coordination and emergency response services",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text content - moved to left (originally on right) */}
          <div className="space-y-8">
            <div>
              <span className="text-blue-600 font-semibold text-sm uppercase tracking-wide">FIRE PROTECTION</span>
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 leading-tight mt-2">Smart Smoke Detector</h2>
              <p className="text-lg text-slate-600 mt-4">Advanced fire detection with 24/7 smart monitoring system</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <feature.icon className="w-5 h-5 text-blue-600" />
                    </div>
                    <h4 className="font-semibold text-slate-800">{feature.title}</h4>
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>

            <div className="bg-blue-50 rounded-lg p-6">
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-slate-800 mb-2">Professional Installation & Testing</h4>
                  <p className="text-slate-600 text-sm">
                    Our certified fire safety technicians install and test your smoke detectors according to NFPA
                    standards, ensuring optimal coverage and connectivity throughout your home.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Detector image - moved to right (originally on left) */}
          <div className="relative">
            <Image
              src="/smoke.png"
              alt="Smart Smoke Detector Device"
              width={500}
              height={500}
              className="w-full max-w-lg mx-auto h-auto"
            />

            {/* Status indicators */}
            <div className="absolute top-8 right-8 bg-white rounded-lg shadow-xl p-4">
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-sm font-medium text-slate-800">All Clear</span>
              </div>
              <div className="text-xs text-slate-600">Battery: 98% | Last test: Today</div>
            </div>

            {/* Detection zones indicator */}
            <div className="absolute bottom-8 left-8 bg-blue-600 text-white rounded-lg p-4">
              <div className="text-sm font-medium">Detection Zones</div>
              <div className="text-xs opacity-90">Monitoring 360° coverage</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
