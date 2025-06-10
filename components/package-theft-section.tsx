import Image from "next/image"
import { Package, AlertTriangle } from "lucide-react"

export default function PackageTheftSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <Image
              src="parcel.webp"
              alt="Package delivery protection system"
              width={600}
              height={500}
              className="w-full h-auto rounded-lg"
            />
            </div>

            {/* Package alert overlay */}
            <div className="absolute top-8 right-8 bg-white rounded-lg shadow-xl p-4">
              <div className="flex items-center space-x-3">
                <Package className="w-6 h-6 text-blue-600" />
                <div>
                  <div className="font-semibold text-slate-800">Package Delivered</div>
                  <div className="text-sm text-slate-600">Front door - 2:34 PM</div>
                </div>
              </div>
            </div>

           

          <div className="space-y-6">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 leading-tight">
              Stop Package Theft Before It Happens
            </h2>

            <p className="text-lg text-slate-600 leading-relaxed">
              Our AI-powered system detects when packages are delivered and monitors them continuously. Get instant
              alerts if someone approaches your packages, and use two-way audio to deter potential thieves before they
              strike.
            </p>

            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-blue-600 font-bold text-sm">1</span>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800 mb-1">Package Detection</h4>
                  <p className="text-slate-600">Automatically detects when packages are delivered to your doorstep</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-blue-600 font-bold text-sm">2</span>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800 mb-1">Continuous Monitoring</h4>
                  <p className="text-slate-600">
                    AI watches your packages 24/7 and alerts you to any suspicious activity
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-blue-600 font-bold text-sm">3</span>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800 mb-1">Active Deterrence</h4>
                  <p className="text-slate-600">Use two-way audio and smart lighting to scare away potential thieves</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
