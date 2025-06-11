import Image from "next/image"
import { Zap, Wifi, Smartphone, Clock } from "lucide-react"

export default function SmartSwitchProduct() {
  const features = [
    { label: "Smart Setup", value: "Easy 15-minute installation" },
    { label: "Remote Control", value: "Control from anywhere via app" },
    { label: "Voice Control", value: "Works with Alexa & Google" },
    { label: "Scheduling", value: "Set automatic on/off times" },
    { label: "Energy Monitor", value: "Track power usage" },
    { label: "Scene Control", value: "Create custom lighting scenes" },
  ]

  const specifications = [
    { label: "Voltage", value: "120V AC" },
    { label: "Load Capacity", value: "15A resistive" },
    { label: "Connectivity", value: "Wi-Fi 2.4GHz" },
    { label: "Compatibility", value: "Standard wall boxes" },
    { label: "Certification", value: "UL Listed" },
    { label: "Warranty", value: "3 years" },
  ]

  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-slate-800 mb-4 lg:mb-6">Smart Switches</h2>
          <p className="text-lg lg:text-xl text-slate-600 max-w-3xl mx-auto">
            Control any light or fan with your smartphone and smart home system
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Text content - moved to left (originally on right in reference) */}
          <div className="space-y-6 lg:space-y-8 lg:order-1">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
              <div>
                <h4 className="font-semibold text-slate-800 mb-3">Key Features</h4>
                <div className="space-y-2">
                  {features.map((feature, index) => (
                    <div key={index} className="flex justify-between text-sm">
                      <span className="text-slate-600">{feature.label}:</span>
                      <span className="text-slate-800 font-medium">{feature.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-slate-800 mb-3">Specifications</h4>
                <div className="space-y-2">
                  {specifications.map((spec, index) => (
                    <div key={index} className="flex justify-between text-sm">
                      <span className="text-slate-600">{spec.label}:</span>
                      <span className="text-slate-800 font-medium">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <Zap className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <div className="text-sm font-medium text-slate-800">Smart Control</div>
              </div>
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <Wifi className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <div className="text-sm font-medium text-slate-800">Wi-Fi Ready</div>
              </div>
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <Smartphone className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <div className="text-sm font-medium text-slate-800">App Control</div>
              </div>
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <Clock className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <div className="text-sm font-medium text-slate-800">Scheduling</div>
              </div>
            </div>

            <div className="bg-blue-50 rounded-lg p-4 lg:p-6">
              <h4 className="font-semibold text-slate-800 mb-3">Professional Installation</h4>
              <p className="text-slate-600 text-sm leading-relaxed">
                Our certified electricians will safely install your smart switches, ensuring proper wiring and
                integration with your existing electrical system and smart home network.
              </p>
            </div>
          </div>

          {/* Smart switch device image - moved to right (originally on left in reference) */}
          <div className="relative lg:order-2 mt-8 lg:mt-0">
            <Image
              src="/placeholder.svg?height=500&width=400"
              alt="Smart Switch Device with touchscreen interface"
              width={400}
              height={500}
              className="w-full max-w-sm mx-auto h-auto"
            />

            {/* Feature callouts */}
            <div className="absolute top-4 lg:top-8 left-4 lg:left-8 bg-blue-600 text-white rounded-lg p-2 lg:p-3">
              <div className="text-xs lg:text-sm font-medium">Touch Control</div>
            </div>
            <div className="absolute bottom-4 lg:bottom-8 right-4 lg:right-8 bg-green-600 text-white rounded-lg p-2 lg:p-3">
              <div className="text-xs lg:text-sm font-medium">UL Listed</div>
            </div>
            <div className="absolute top-1/2 right-4 lg:right-8 bg-yellow-500 text-white rounded-lg p-2 lg:p-3">
              <div className="text-xs lg:text-sm font-medium">Dimmer</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
