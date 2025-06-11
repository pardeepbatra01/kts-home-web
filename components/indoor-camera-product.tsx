import Image from "next/image"
import { Check } from "lucide-react"

export default function IndoorCameraProduct() {
  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-slate-800 mb-4">Indoor Security Cameras</h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Crystal-clear HD video monitoring for every room in your home with intelligent features and seamless
            integration.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Product features - moved to left (originally on right in reference) */}
          <div className="space-y-6 lg:space-y-8 lg:order-1">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-slate-800">1080p Full HD</h4>
                    <p className="text-sm text-slate-600">Crystal-clear video quality</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-slate-800">Night Vision</h4>
                    <p className="text-sm text-slate-600">See clearly up to 25 feet in darkness</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-slate-800">Two-Way Audio</h4>
                    <p className="text-sm text-slate-600">Communicate through your camera</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-slate-800">Smart Detection</h4>
                    <p className="text-sm text-slate-600">AI-powered person detection</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-slate-800">Pan & Tilt</h4>
                    <p className="text-sm text-slate-600">360° horizontal, 180° vertical</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-slate-800">Cloud Storage</h4>
                    <p className="text-sm text-slate-600">Secure cloud recording included</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-slate-800">Easy Setup</h4>
                    <p className="text-sm text-slate-600">Wireless installation in minutes</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-slate-800">Privacy Mode</h4>
                    <p className="text-sm text-slate-600">Disable recording when home</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 rounded-lg p-6">
              <h4 className="font-semibold text-slate-800 mb-2">Professional Installation Included</h4>
              <p className="text-slate-600 text-sm">
                Our certified technicians will install and configure your indoor cameras for optimal coverage and
                performance.
              </p>
            </div>
          </div>

          {/* Product image - moved to right (originally on left in reference) */}
          <div className="relative lg:order-2">
            <div className="relative bg-gradient-to-br from-slate-100 to-slate-200 rounded-2xl p-8 lg:p-12">
              <Image
                src="medium-shot-blurry-woman-indoors.jpg"
                alt="White indoor security camera with sleek design"
                width={300}
                height={400}
                className="w-full max-w-sm mx-auto h-auto"
              />

              {/* Feature callouts */}
              <div className="absolute top-4 left-4 bg-blue-600 text-white rounded-lg px-3 py-2 text-sm font-medium">
                1080p HD
              </div>

              <div className="absolute top-4 right-4 bg-white rounded-lg shadow-lg px-3 py-2 text-sm font-medium text-slate-800">
                360° Pan
              </div>

              <div className="absolute bottom-4 left-4 bg-green-600 text-white rounded-lg px-3 py-2 text-sm font-medium">
                Night Vision
              </div>

              <div className="absolute bottom-4 right-4 bg-white rounded-lg shadow-lg px-3 py-2 text-sm font-medium text-slate-800">
                Two-Way Audio
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
