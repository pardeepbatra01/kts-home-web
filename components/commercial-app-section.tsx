import { Button } from "@/components/ui/button"
import { Smartphone, Shield, Eye, Bell, Users, Lock } from "lucide-react"

export default function CommercialAppSection() {
  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content - Swapped to RIGHT (originally left in reference) */}
          <div className="space-y-8 lg:order-2">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
                Manage Your Business Security
                <span className="block text-blue-600">From Anywhere</span>
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Our comprehensive business security app gives you complete control over your commercial security system.
                Monitor multiple locations, manage employee access, and receive instant alerts.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Eye className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Multi-Location Monitoring</h3>
                  <p className="text-gray-600 text-sm">Monitor all business locations from a single dashboard</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Employee Access Control</h3>
                  <p className="text-gray-600 text-sm">Manage staff access codes and permissions remotely</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Bell className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Instant Business Alerts</h3>
                  <p className="text-gray-600 text-sm">Receive immediate notifications for security events</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Lock className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Remote Arm/Disarm</h3>
                  <p className="text-gray-600 text-sm">Control your security system from anywhere</p>
                </div>
              </div>
            </div>

            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
              <Smartphone className="w-5 h-5 mr-2" />
              Download Business App
            </Button>
          </div>

          {/* Image - Swapped to LEFT (originally right in reference) */}
          <div className="lg:order-1">
            <div className="relative">
              <div className="absolute inset-0 bg-blue-500/10 rounded-3xl transform -rotate-6"></div>
              <div className="relative bg-white rounded-3xl shadow-2xl p-8">
                <img
                  src="call-center-employee-providing-shipment-information-via-gps-satellite-navigation.jpg"
                  alt="Business security app interface showing multiple camera feeds and controls"
                  className="w-full h-auto rounded-2xl"
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
