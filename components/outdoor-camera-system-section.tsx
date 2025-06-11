import Image from "next/image"
import { CheckCircle } from "lucide-react"

export default function OutdoorCameraSystemSection() {
  const features = [
    "Monitor multiple camera feeds simultaneously",
    "Receive instant alerts for suspicious activity",
    "Review recorded footage from anywhere",
    "Control camera settings remotely",
    "Share access with family members",
    "Integration with smart home devices",
  ]

  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-slate-800 mb-4 lg:mb-6">
            An Outdoor Security Camera System for Your Home
          </h2>
          <p className="text-lg lg:text-xl text-slate-600 max-w-3xl mx-auto">
            Complete property surveillance with professional-grade cameras and intelligent monitoring
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Features content - moved to left (originally on right in reference) */}
          <div className="space-y-6 lg:space-y-8 lg:order-1">
            <div className="space-y-3 lg:space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 lg:w-6 lg:h-6 text-blue-600 flex-shrink-0" />
                  <span className="text-slate-700 font-medium text-sm lg:text-base">{feature}</span>
                </div>
              ))}
            </div>

            <div className="bg-blue-50 rounded-lg p-4 lg:p-6">
              <h4 className="font-semibold text-slate-800 mb-3">Smart Home Integration</h4>
              <p className="text-slate-600 text-sm leading-relaxed">
                Your outdoor cameras integrate seamlessly with your existing smart home system. Set up automation rules
                to turn on lights when motion is detected, coordinate with your security system, or receive alerts on
                all your devices for comprehensive protection.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white border border-blue-200 rounded-lg p-3 lg:p-4 text-center">
                <div className="text-xl lg:text-2xl font-bold text-blue-600">4K</div>
                <div className="text-xs lg:text-sm text-slate-600">Ultra HD Video</div>
              </div>
              <div className="bg-white border border-blue-200 rounded-lg p-3 lg:p-4 text-center">
                <div className="text-xl lg:text-2xl font-bold text-blue-600">24/7</div>
                <div className="text-xs lg:text-sm text-slate-600">Recording</div>
              </div>
            </div>
          </div>

          {/* Mobile app mockup - moved to right (originally on left in reference) */}
          <div className="relative lg:order-2 mt-8 lg:mt-0">
            <Image
              src="06june22_cctv_icon_02.jpg"
              alt="Mobile app showing outdoor camera feeds"
              width={300}
              height={600}
              className="w-full max-w-sm mx-auto h-auto"
            />

            {/* App features overlay */}
            <div className="absolute top-4 lg:top-8 left-4 lg:left-8 bg-blue-600 text-white rounded-lg p-2 lg:p-4">
              <div className="text-xs lg:text-sm font-medium">Camera System</div>
              <div className="text-xs opacity-90">4 cameras online</div>
            </div>

            {/* Live feed indicator */}
            <div className="absolute bottom-4 lg:bottom-8 right-4 lg:right-8 bg-white rounded-lg shadow-xl p-2 lg:p-4">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div>
                  <div className="font-semibold text-slate-800 text-xs lg:text-sm">Live Feed</div>
                  <div className="text-xs text-slate-600">All cameras</div>
                </div>
              </div>
            </div>

            {/* Recording status */}
            <div className="absolute top-1/2 right-2 lg:right-4 bg-green-500 text-white rounded-lg p-2 lg:p-3">
              <div className="text-xs font-medium">Recording</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
