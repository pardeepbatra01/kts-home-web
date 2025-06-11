import Image from "next/image"
import { CheckCircle } from "lucide-react"

export default function SmartControlSection() {
  const features = [
    "7-inch HD touchscreen display",
    "Voice control integration",
    "Z-Wave and Zigbee compatibility",
    "24/7 professional monitoring",
    "Mobile app synchronization",
    "Energy usage tracking",
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text content - moved to right */}
          <div className="lg:order-2 space-y-8">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 leading-tight">
              Your Smarter KTS Smart Home Control Panel
            </h2>

            <p className="text-lg text-slate-600 leading-relaxed">
              The centralized nerve for your smart home & family. Our advanced control panel puts everything at your
              fingertips with an intuitive interface designed for the whole family.
            </p>

            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0" />
                  <span className="text-slate-700 font-medium">{feature}</span>
                </div>
              ))}
            </div>

            <div className="bg-blue-50 rounded-lg p-6">
              <h4 className="font-semibold text-slate-800 mb-2">Professional Installation</h4>
              <p className="text-slate-600 text-sm">
                Our certified technicians will install and configure your control panel, ensuring optimal performance
                and seamless integration with your existing smart home devices.
              </p>
            </div>
          </div>

          {/* Control panel image - moved to left */}
          <div className="lg:order-1 relative">
            <Image
              src="/smart-home-tablet-wall.jpg"
              alt="Smart Home Control Panel Interface"
              width={300}
              height={400}
              className="w-full max-w-sm mx-auto h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
