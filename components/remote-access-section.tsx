import { Button } from "@/components/ui/button"
import { Smartphone, Phone } from "lucide-react"

export default function RemoteAccessSection() {
  return (
    <section className="py-16 lg:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image - Swapped to LEFT (originally right in reference) */}
          <div className="lg:order-1">
            <div className="relative">
              <div className="absolute inset-0 bg-blue-500/10 rounded-2xl transform rotate-3"></div>
              <div className="relative bg-white rounded-2xl shadow-2xl p-8">
                <img
                  src="close-up-electric-car-france.jpg"
                  alt="Hand using mobile device for remote access control"
                  className="w-full h-auto rounded-xl"
                />
                <div className="absolute -top-4 -left-4 bg-blue-600 text-white p-3 rounded-full">
                  <Smartphone className="w-6 h-6" />
                </div>
              </div>
            </div>
          </div>

          {/* Content - Swapped to RIGHT (originally left in reference) */}
          <div className="space-y-8 lg:order-2">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
                Lock and Unlock Your
                <span className="block text-blue-600">Business Doors Remotely</span>
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Take complete control of your business access from anywhere in the world. Our mobile access control
                system allows you to grant or revoke access, monitor entry logs, and secure your premises with just a
                few taps on your smartphone.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-3 h-3 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Remote Door Control</h3>
                  <p className="text-gray-600">
                    Lock or unlock any door in your business remotely using your smartphone or tablet
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-3 h-3 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Temporary Access Codes</h3>
                  <p className="text-gray-600">
                    Generate temporary access codes for visitors, contractors, or new employees instantly
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-3 h-3 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Real-Time Access Logs</h3>
                  <p className="text-gray-600">
                    View live access logs and receive instant notifications when someone enters or exits
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-3 h-3 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Emergency Lockdown</h3>
                  <p className="text-gray-600">
                    Instantly secure all doors in case of emergency with one-touch lockdown functionality
                  </p>
                </div>
              </div>
            </div>

            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
              <Phone className="w-5 h-5 mr-2" />
              Call Now for Free Quote!
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
