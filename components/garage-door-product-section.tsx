import Image from "next/image"
import { Smartphone, Shield, Wifi, Bell } from "lucide-react"

export default function GarageDoorProductSection() {
  const features = [
    "Remote garage door control via smartphone",
    "Real-time door status notifications",
    "Automatic closing after set time",
    "Integration with home security system",
    "Voice control compatibility",
    "Professional installation included",
  ]

  const specifications = [
    { label: "Connectivity", value: "Wi-Fi + Bluetooth" },
    { label: "Compatibility", value: "Most garage door openers" },
    { label: "Power", value: "AC adapter with battery backup" },
    { label: "Range", value: "Unlimited (internet connected)" },
    { label: "Installation", value: "Professional" },
    { label: "Warranty", value: "3 years" },
  ]

  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-slate-800 mb-4 lg:mb-6">
            Smart Garage Door Control for Your Home
          </h2>
          <p className="text-lg lg:text-xl text-slate-600 max-w-3xl mx-auto">
            Advanced garage door monitoring and control with seamless smart home integration
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Product details - moved to right (originally on left in reference) */}
          <div className="space-y-6 lg:space-y-8 lg:order-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
              <div>
                <h4 className="font-semibold text-slate-800 mb-3">Key Features</h4>
                <div className="space-y-2">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0"></div>
                      <span className="text-slate-600 text-sm">{feature}</span>
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
                <Smartphone className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <div className="text-sm font-medium text-slate-800">App Control</div>
              </div>
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <Shield className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <div className="text-sm font-medium text-slate-800">Secure Access</div>
              </div>
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <Wifi className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <div className="text-sm font-medium text-slate-800">Wi-Fi Connected</div>
              </div>
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <Bell className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <div className="text-sm font-medium text-slate-800">Smart Alerts</div>
              </div>
            </div>
          </div>

          {/* Garage door controller image - moved to left (originally on right in reference) */}
          <div className="relative lg:order-1 mt-8 lg:mt-0">
            <Image
              src="/placeholder.svg?height=500&width=400"
              alt="Smart Garage Door Controller Device"
              width={400}
              height={500}
              className="w-full max-w-sm mx-auto h-auto"
            />

            {/* Feature callouts */}
            <div className="absolute top-4 lg:top-8 left-4 lg:left-8 bg-blue-600 text-white rounded-lg p-2 lg:p-3">
              <div className="text-xs lg:text-sm font-medium">Wi-Fi Ready</div>
            </div>
            <div className="absolute bottom-4 lg:bottom-8 right-4 lg:right-8 bg-green-600 text-white rounded-lg p-2 lg:p-3">
              <div className="text-xs lg:text-sm font-medium">Easy Install</div>
            </div>
            <div className="absolute top-1/2 right-4 lg:right-8 bg-yellow-500 text-white rounded-lg p-2 lg:p-3">
              <div className="text-xs lg:text-sm font-medium">Voice Control</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
