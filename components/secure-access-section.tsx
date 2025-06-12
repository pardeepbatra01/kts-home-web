import { Button } from "@/components/ui/button"
import { Shield, Phone } from "lucide-react"

export default function SecureAccessSection() {
  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content - Swapped to LEFT (originally right in reference) */}
          <div className="space-y-8 lg:order-1">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
                Stay Secure the
                <span className="block text-blue-600">Professional Way</span>
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Our advanced access control systems provide the highest level of security for your business. With
                multiple authentication methods, real-time monitoring, and comprehensive reporting, you can ensure that
                only authorized personnel have access to your premises.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-3 h-3 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Multi-Factor Authentication</h3>
                  <p className="text-gray-600">
                    Combine keycards, PIN codes, and biometric verification for maximum security
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-3 h-3 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Time-Based Access Control</h3>
                  <p className="text-gray-600">
                    Set specific hours and days when employees can access different areas of your business
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-3 h-3 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Instant Security Alerts</h3>
                  <p className="text-gray-600">
                    Receive immediate notifications for unauthorized access attempts or security breaches
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-3 h-3 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Comprehensive Audit Trail</h3>
                  <p className="text-gray-600">
                    Detailed logs of all access events for compliance and security investigation purposes
                  </p>
                </div>
              </div>
            </div>

            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
              <Phone className="w-5 h-5 mr-2" />
              Call Now for Free Quote!
            </Button>
          </div>

          {/* Image - Swapped to RIGHT (originally left in reference) */}
          <div className="lg:order-2">
            <div className="relative">
              <div className="absolute inset-0 bg-blue-500/10 rounded-2xl transform -rotate-3"></div>
              <div className="relative bg-white rounded-2xl shadow-2xl p-8">
                <img
                  src="biometric-technology-background-with-fingerprint-scanning-system-virtual-screen-digital-remix.jpg"
                  alt="Professional woman using secure access control system"
                  className="w-full h-auto rounded-xl"
                />
                <div className="absolute -top-4 -right-4 bg-blue-600 text-white p-3 rounded-full">
                  <Shield className="w-6 h-6" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
