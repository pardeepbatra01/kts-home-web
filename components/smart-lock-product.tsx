import Image from "next/image"
import { CheckCircle, Smartphone, Shield, Key } from "lucide-react"

export default function SmartLockProduct() {
  const features = [
    "Keyless entry with smartphone app",
    "Temporary access codes for guests",
    "Real-time access notifications",
    "Auto-lock and unlock features",
    "Battery backup protection",
    "Professional installation included",
  ]

  const specifications = [
    { label: "Battery Life", value: "Up to 12 months" },
    { label: "Connectivity", value: "Wi-Fi + Bluetooth" },
    { label: "Compatibility", value: "iOS & Android" },
    { label: "Installation", value: "Professional" },
    { label: "Warranty", value: "3 years" },
    { label: "Certification", value: "ANSI Grade 1" },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Smart lock product image */}
          <div className="relative">
            <Image
              src="close-up-uses-intercom.jpg"
              alt="Fluent Smart Door Lock"
              width={400}
              height={500}
              className="w-full max-w-md mx-auto h-auto"
            />

            {/* Feature callouts */}
            <div className="absolute top-8 left-8 bg-blue-600 text-white rounded-lg p-3">
              <Smartphone className="w-6 h-6" />
            </div>
            <div className="absolute bottom-8 right-8 bg-green-600 text-white rounded-lg p-3">
              <Shield className="w-6 h-6" />
            </div>
          </div>

          {/* Product details */}
          <div className="space-y-8">
            <div>
              <span className="text-blue-600 font-semibold text-sm uppercase tracking-wide">SMART SECURITY</span>
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 leading-tight mt-2">
                Smart Locks for Your Home
              </h2>
              <p className="text-lg text-slate-600 mt-4">
                Advanced security meets modern convenience with our premium smart door locks
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-slate-800 mb-3">Key Features</h4>
                <div className="space-y-2">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0" />
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

            <div className="bg-blue-50 rounded-lg p-6">
              <div className="flex items-start space-x-4">
                <Key className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-slate-800 mb-2">Never Lose Your Keys Again</h4>
                  <p className="text-slate-600 text-sm">
                    Your smartphone becomes your key. Grant access to family, friends, or service providers with
                    temporary codes that expire automatically.
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
