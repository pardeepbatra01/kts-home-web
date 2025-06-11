import Image from "next/image"
import { Video, Shield, Eye, Cloud } from "lucide-react"

export default function OutdoorCameraProduct() {
  const features = [
    "4K Ultra HD video recording",
    "Advanced color night vision",
    "Smart motion detection with AI",
    "Weatherproof IP67 rating",
    "Two-way audio communication",
    "Professional installation included",
  ]

  const specifications = [
    { label: "Video Resolution", value: "4K Ultra HD (3840x2160)" },
    { label: "Night Vision", value: "Color up to 30 feet" },
    { label: "Field of View", value: "130° diagonal" },
    { label: "Weather Rating", value: "IP67 waterproof" },
    { label: "Storage", value: "Cloud + Local NVR" },
    { label: "Power", value: "PoE or AC adapter" },
  ]

  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-slate-800 mb-4 lg:mb-6">
            Outdoor Security Cameras
          </h2>
          <p className="text-lg lg:text-xl text-slate-600 max-w-3xl mx-auto">
            Professional-grade outdoor surveillance with 4K clarity and intelligent monitoring
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Product details - moved to left (originally on right in reference) */}
          <div className="space-y-6 lg:space-y-8 lg:order-1">
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
                <div className="text-sm font-medium text-slate-800">4K Video</div>
              </div>
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <Eye className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <div className="text-sm font-medium text-slate-800">Night Vision</div>
              </div>
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <Shield className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <div className="text-sm font-medium text-slate-800">Weatherproof</div>
              </div>
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <Cloud className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <div className="text-sm font-medium text-slate-800">Cloud Storage</div>
              </div>
            </div>

            <div className="bg-blue-50 rounded-lg p-4 lg:p-6">
              <h4 className="font-semibold text-slate-800 mb-3">Professional Installation</h4>
              <p className="text-slate-600 text-sm leading-relaxed">
                Our certified technicians will install your outdoor cameras with proper weatherproofing, optimal
                positioning, and seamless integration with your existing security system.
              </p>
            </div>
          </div>

          {/* Camera devices image - moved to right (originally on left in reference) */}
          <div className="relative lg:order-2 mt-8 lg:mt-0">
            <Image
              src="06june22_cctv_icon_02.jpg"
              alt="White and black outdoor security cameras"
              width={400}
              height={500}
              className="w-full max-w-sm mx-auto h-auto"
            />

            {/* Feature callouts */}
            <div className="absolute top-4 lg:top-8 left-4 lg:left-8 bg-blue-600 text-white rounded-lg p-2 lg:p-3">
              <div className="text-xs lg:text-sm font-medium">4K Ultra HD</div>
            </div>
            <div className="absolute bottom-4 lg:bottom-8 right-4 lg:right-8 bg-green-600 text-white rounded-lg p-2 lg:p-3">
              <div className="text-xs lg:text-sm font-medium">IP67 Rated</div>
            </div>
            <div className="absolute top-1/2 right-4 lg:right-8 bg-yellow-500 text-white rounded-lg p-2 lg:p-3">
              <div className="text-xs lg:text-sm font-medium">Color Night</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
