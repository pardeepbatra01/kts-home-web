import Image from "next/image"
import { Video, Mic, Shield, Wifi } from "lucide-react"

export default function DoorbellProductSection() {
  const features = [
    "1080p HD video with night vision",
    "Two-way audio communication",
    "Motion detection with smart alerts",
    "Cloud storage and local recording",
    "Weather-resistant design (IP65)",
    "Professional installation included",
  ]

  const specifications = [
    { label: "Video Quality", value: "1080p Full HD" },
    { label: "Field of View", value: "160° diagonal" },
    { label: "Night Vision", value: "Up to 25 feet" },
    { label: "Audio", value: "Two-way with noise cancellation" },
    { label: "Storage", value: "Cloud + Local SD card" },
    { label: "Power", value: "Hardwired or battery" },
  ]

  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-slate-800 mb-4 lg:mb-6">
            Smart Video Doorbell Camera
          </h2>
          <p className="text-lg lg:text-xl text-slate-600 max-w-3xl mx-auto">
            Crystal clear video and audio communication with advanced security features
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Doorbell device image - moved to left (originally on right in reference) */}
          <div className="relative lg:order-1 mt-8 lg:mt-0">
            <Image
              src="close-up-woman-checking-security-camera.jpg"
              alt="Smart Video Doorbell Camera Device"
              width={400}
              height={500}
              className="w-full max-w-sm mx-auto h-auto"
            />

            {/* Feature callouts */}
            <div className="absolute top-4 lg:top-8 right-4 lg:right-8 bg-blue-600 text-white rounded-lg p-2 lg:p-3">
              <div className="text-xs lg:text-sm font-medium">1080p HD</div>
            </div>
            <div className="absolute bottom-4 lg:bottom-8 left-4 lg:left-8 bg-green-600 text-white rounded-lg p-2 lg:p-3">
              <div className="text-xs lg:text-sm font-medium">IP65 Rated</div>
            </div>
            <div className="absolute top-1/2 left-4 lg:left-8 bg-yellow-500 text-white rounded-lg p-2 lg:p-3">
              <div className="text-xs lg:text-sm font-medium">Night Vision</div>
            </div>
          </div>

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
                <Video className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <div className="text-sm font-medium text-slate-800">HD Video</div>
              </div>
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <Mic className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <div className="text-sm font-medium text-slate-800">Two-Way Audio</div>
              </div>
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <Shield className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <div className="text-sm font-medium text-slate-800">Secure Cloud</div>
              </div>
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <Wifi className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <div className="text-sm font-medium text-slate-800">Wi-Fi Ready</div>
              </div>
            </div>

            <div className="bg-blue-50 rounded-lg p-4 lg:p-6">
              <h4 className="font-semibold text-slate-800 mb-3">Professional Installation</h4>
              <p className="text-slate-600 text-sm leading-relaxed">
                Our certified technicians will install your smart doorbell camera, ensuring proper wiring, optimal
                positioning, and seamless integration with your existing smart home system.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
