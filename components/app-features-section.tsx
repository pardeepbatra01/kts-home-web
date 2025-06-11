import Image from "next/image"
import { CheckCircle, Home, Shield, Smartphone, Zap, Camera, Lock } from "lucide-react"

export default function AppFeaturesSection() {
  const features = [
    {
      icon: Home,
      title: "Control Your Home",
      description: "Manage lights, locks, thermostats, and more from anywhere",
    },
    {
      icon: Shield,
      title: "Security Monitoring",
      description: "Real-time alerts and live video feeds from all cameras",
    },
    {
      icon: Smartphone,
      title: "Smart Notifications",
      description: "Instant push notifications for all security events",
    },
    {
      icon: Zap,
      title: "Automation Control",
      description: "Create and manage custom automation scenes",
    },
    {
      icon: Camera,
      title: "Live Video Streaming",
      description: "Watch live HD video from all connected cameras",
    },
    {
      icon: Lock,
      title: "Remote Access Control",
      description: "Lock/unlock doors and manage access remotely",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Mobile app mockup */}
          <div className="relative">
            <Image
              src="/smart-app.jpg"
              alt="Kts Smart Home App Features"
              width={300}
              height={600}
              className="w-full max-w-sm mx-auto h-auto"
            />
          </div>

          {/* Features content */}
          <div className="space-y-8">
            <div>
              <span className="text-blue-600 font-semibold text-sm uppercase tracking-wide">SMART HOME APP</span>
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 leading-tight mt-2">
                Kts Smart Home App
              </h2>
              <p className="text-lg text-slate-600 mt-4">Your entire smart home, just one tap away</p>
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
                  <h4 className="font-semibold text-slate-800 mb-2">Available on iOS & Android</h4>
                  <p className="text-slate-600 text-sm">
                    Download our free app from the App Store or Google Play and start controlling your smart home today.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
