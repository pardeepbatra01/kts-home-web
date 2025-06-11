import Image from "next/image"
import { Thermometer, Smartphone, Zap, Wifi } from 'lucide-react'

export default function ThermostatProductSection() {
  const features = [
    {
      icon: Thermometer,
      title: "Precise Control",
      description: "±1°F temperature accuracy with advanced sensors",
    },
    {
      icon: Smartphone,
      title: "Smart Learning",
      description: "Learns your schedule and preferences automatically",
    },
    {
      icon: Zap,
      title: "Energy Savings",
      description: "Save up to 23% on heating and cooling costs",
    },
    {
      icon: Wifi,
      title: "Remote Access",
      description: "Control from anywhere with Wi-Fi connectivity",
    },
  ]

  const specifications = [
    { label: "Display", value: "3.5\" Color Touchscreen" },
    { label: "Connectivity", value: "Wi-Fi + Zigbee" },
    { label: "Compatibility", value: "Most HVAC Systems" },
    { label: "Sensors", value: "Temperature, Humidity, Motion" },
    { label: "Power", value: "24V AC with Battery Backup" },
    { label: "Warranty", value: "5 Years" },
  ]

  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Product details - moved to left (originally on right in reference) */}
          <div className="space-y-6 lg:space-y-8 lg:order-1">
            <div>
              <span className="text-blue-600 font-semibold text-sm uppercase tracking-wide">SMART CLIMATE</span>
              <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-slate-800 leading-tight mt-2">
                Smart Home Thermostat
              </h2>
              <p className="text-lg text-slate-600 mt-4">Control and save money. Effortlessly intelligent.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
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

            <div className="bg-blue-50 rounded-lg p-4 lg:p-6">
              <h4 className="font-semibold text-slate-800 mb-3">Technical Specifications</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 lg:gap-4">
                {specifications.map((spec, index) => (
                  <div key={index} className="flex justify-between text-sm">
                    <span className="text-slate-600">{spec.label}:</span>
                    <span className="text-slate-800 font-medium">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Thermostat device image - moved to right (originally on left in reference) */}
          <div className="relative lg:order-2 mt-8 lg:mt-0">
            <Image
              src="man-holding-smartphone-with-home-automation-app.jpg"
              alt="Smart Home Thermostat with touchscreen display"
              width={400}
              height={500}
              className="w-full max-w-sm mx-auto h-auto"
            />

            {/* Feature callouts */}
            <div className="absolute top-4 lg:top-8 right-4 lg:right-8 bg-blue-600 text-white rounded-lg p-2 lg:p-3">
              <div className="text-xs lg:text-sm font-medium">Color Display</div>
            </div>
            <div className="absolute bottom-4 lg:bottom-8 left-4 lg:left-8 bg-green-600 text-white rounded-lg p-2 lg:p-3">
              <div className="text-xs lg:text-sm font-medium">Energy Star</div>
            </div>
            <div className="absolute top-1/2 left-4 lg:left-8 bg-yellow-500 text-white rounded-lg p-2 lg:p-3">
              <div className="text-xs lg:text-sm font-medium">Smart Learning</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
