import { Button } from "@/components/ui/button"
import { Camera, Eye, Shield, Smartphone } from "lucide-react"

export default function BusinessMonitoringSection() {
  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content - Swapped to RIGHT (originally left in reference) */}
          <div className="space-y-8 lg:order-2">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
                Monitor Your Business with a<span className="block text-blue-600">Professional Camera System</span>
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Keep watch over your business operations, employees, and customers with our advanced commercial camera
                systems. High-definition recording, remote access, and intelligent analytics provide complete visibility
                and peace of mind.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Camera className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">4K Commercial Cameras</h3>
                  <p className="text-gray-600">
                    Ultra-high definition recording with wide-angle coverage for comprehensive business monitoring
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Eye className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">24/7 Recording & Storage</h3>
                  <p className="text-gray-600">
                    Continuous recording with secure cloud storage and local backup options for business continuity
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Smartphone className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Remote Business Access</h3>
                  <p className="text-gray-600">
                    Monitor your business from anywhere with mobile app access and real-time notifications
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">AI-Powered Analytics</h3>
                  <p className="text-gray-600">
                    Intelligent detection of suspicious activity, customer counting, and business insights
                  </p>
                </div>
              </div>
            </div>

            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
              Learn More About Business Cameras
            </Button>
          </div>

          {/* Image - Swapped to LEFT (originally right in reference) */}
          <div className="lg:order-1">
            <div className="relative">
              <div className="absolute inset-0 bg-blue-500/10 rounded-2xl transform -rotate-3"></div>
              <div className="relative bg-white rounded-2xl shadow-2xl p-8">
                <img
                  src="medium-shot-people-working-office.jpg"
                  alt="Professional commercial security camera system"
                  className="w-full h-auto rounded-xl"
                />
                <div className="absolute -top-4 -right-4 bg-blue-600 text-white p-3 rounded-full">
                  <Camera className="w-6 h-6" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
