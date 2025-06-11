import Image from "next/image"
import { Shield, Smartphone, Wifi, Lock, Home, Settings } from "lucide-react"

export default function SimpleSecureSection() {
  const leftFeatures = [
    { icon: Shield, title: "Bank-level security", description: "Advanced encryption protects your data" },
    { icon: Smartphone, title: "Mobile integration", description: "Control from anywhere with our app" },
    { icon: Wifi, title: "Reliable connectivity", description: "Dual-band Wi-Fi ensures stable connection" },
  ]

  const rightFeatures = [
    { icon: Lock, title: "Secure authentication", description: "Biometric and PIN access control" },
    { icon: Home, title: "Whole home control", description: "Manage every connected device" },
    { icon: Settings, title: "Easy customization", description: "Personalize your smart home experience" },
  ]

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-6">
            Your simple & secure smart home solution.
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Experience effortless control with enterprise-grade security built into every interaction.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 items-center">
          {/* Left features */}
          <div className="space-y-8">
            {leftFeatures.map((feature, index) => (
              <div key={index} className="text-right">
                <div className="flex items-center justify-end space-x-4 mb-2">
                  <h4 className="font-semibold text-slate-800">{feature.title}</h4>
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-blue-600" />
                  </div>
                </div>
                <p className="text-slate-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Center control panel */}
          <div className="relative">
            <Image
              src="smart-home.jpg"
              alt="Control Panel Security Features"
              width={300}
              height={400}
              className="w-full max-w-sm mx-auto h-auto"
            />
          </div>

          {/* Right features */}
          <div className="space-y-8">
            {rightFeatures.map((feature, index) => (
              <div key={index} className="text-left">
                <div className="flex items-center space-x-4 mb-2">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h4 className="font-semibold text-slate-800">{feature.title}</h4>
                </div>
                <p className="text-slate-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
