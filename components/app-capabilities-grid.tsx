import { Shield, Video, Clock, Home, Lightbulb, AlertTriangle } from "lucide-react"

export default function AppCapabilitiesGrid() {
  const capabilities = [
    {
      icon: Shield,
      title: "Remote Arm & Disarm",
      description: "Arm and disarm your security system from anywhere with one-touch controls",
    },
    {
      icon: Video,
      title: "Live Video Streaming",
      description: "Watch live HD video feeds from all your security cameras in real-time",
    },
    {
      icon: Clock,
      title: "Real-time Alerts",
      description: "Receive instant push notifications for all security and automation events",
    },
    {
      icon: Home,
      title: "Remote Device Check",
      description: "Monitor the status of all connected smart home devices remotely",
    },
    {
      icon: Lightbulb,
      title: "Smart Lighting Control",
      description: "Control all smart lights, create scenes, and set automated schedules",
    },
    {
      icon: AlertTriangle,
      title: "Emergency Controls",
      description: "Quick access to emergency features and panic buttons when needed",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-6">
            Everything you need in one powerful app
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Comprehensive smart home control with intuitive design and powerful features
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {capabilities.map((capability, index) => (
            <div key={index} className="text-center space-y-6 p-6 rounded-lg hover:bg-slate-50 transition-colors">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                <capability.icon className="w-8 h-8 text-blue-600" />
              </div>

              <h3 className="text-xl font-bold text-slate-800">{capability.title}</h3>

              <p className="text-slate-600 leading-relaxed">{capability.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-blue-50 rounded-xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-slate-800 mb-4">Why Choose Our Mobile App?</h3>
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div>
                <h4 className="font-semibold text-blue-600 mb-2">User-Friendly Design</h4>
                <p className="text-slate-600 text-sm">
                  Intuitive interface designed for users of all technical levels with easy navigation and clear
                  controls.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-blue-600 mb-2">Secure Connection</h4>
                <p className="text-slate-600 text-sm">
                  Bank-level encryption ensures your home data and controls are always secure and protected.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-blue-600 mb-2">Regular Updates</h4>
                <p className="text-slate-600 text-sm">
                  Continuous improvements and new features added regularly to enhance your smart home experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
