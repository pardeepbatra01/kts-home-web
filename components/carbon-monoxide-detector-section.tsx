import Image from "next/image"
import { CheckCircle, Shield, Smartphone, Clock, AlertTriangle } from "lucide-react"

export default function CarbonMonoxideDetectorSection() {
  const features = [
    {
      icon: Shield,
      title: "Easy monitoring",
      description: "Real-time CO level monitoring with instant smartphone alerts",
    },
    {
      icon: Smartphone,
      title: "Instant Notification",
      description: "Immediate alerts sent directly to your mobile device and monitoring center",
    },
    {
      icon: Clock,
      title: "Electrochemical Sensing",
      description: "Advanced sensor technology for accurate CO detection and fewer false alarms",
    },
    {
      icon: AlertTriangle,
      title: "Professional Monitoring",
      description: "24/7 professional monitoring with emergency response coordination",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text content - moved to left (originally on right) */}
          <div className="space-y-8">
            <div>
              <span className="text-blue-600 font-semibold text-sm uppercase tracking-wide">SMART DETECTION</span>
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 leading-tight mt-2">
                Carbon Monoxide Detector
              </h2>
              <p className="text-lg text-slate-600 mt-4">Best-in-class with 24/7 smart CO detection monitoring</p>
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
                  <h4 className="font-semibold text-slate-800 mb-2">Professional Installation Included</h4>
                  <p className="text-slate-600 text-sm">
                    Our certified technicians will install and test your carbon monoxide detector, ensuring optimal
                    placement and connectivity with your smart home system.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Detector image - moved to right (originally on left) */}
          <div className="relative">
            <Image
              src="smoke-alarm-isolated-white.jpg"
              alt="Smart Carbon Monoxide Detector Device"
              width={500}
              height={500}
              className="w-full max-w-lg mx-auto h-auto"
            />

            {/* Status indicators */}
            <div className="absolute top-8 right-8 bg-white rounded-lg shadow-xl p-4">
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-sm font-medium text-slate-800">CO Levels Normal</span>
              </div>
              <div className="text-xs text-slate-600">Last checked: 2 min ago</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
