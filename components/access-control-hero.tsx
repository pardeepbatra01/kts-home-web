import { Button } from "@/components/ui/button"
import { Shield, Phone, Key, Users } from "lucide-react"

export default function AccessControlHero() {
  return (
    <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative max-w-7xl mx-auto px-4 py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image - Swapped to LEFT (originally right in reference) */}
          <div className="lg:order-1">
            <div className="relative">
              <div className="absolute inset-0 bg-blue-500/20 rounded-2xl transform rotate-3"></div>
              <img
                src="scanning-finger-coronavirus-contaminated-fingerprint-access-control.jpg"
                alt="Professional using access control keypad system"
                className="relative rounded-2xl shadow-2xl w-full h-auto object-cover"
              />
              <div className="absolute -bottom-6 -right-6 bg-white text-blue-600 p-4 rounded-xl shadow-lg">
                <div className="text-2xl font-bold">100%</div>
                <div className="text-sm">Secure Access</div>
              </div>
            </div>
          </div>

          {/* Content - Swapped to RIGHT (originally left in reference) */}
          <div className="space-y-8 lg:order-2">
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-blue-200">
                <Key className="w-5 h-5" />
                <span className="text-sm font-medium uppercase tracking-wide">Access Control Systems</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                Control Access to
                <span className="block text-blue-200">Your Business</span>
                <span className="block">Premises</span>
              </h1>
            </div>

            <p className="text-xl lg:text-2xl text-blue-100 leading-relaxed max-w-2xl">
              Secure your business with advanced access control systems. Manage employee entry, track access logs, and
              protect sensitive areas with keycard, biometric, and mobile access solutions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 text-lg px-8 py-4">
                Get Access Control Quote
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-600 text-lg px-8 py-4"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Access Control Experts
              </Button>
            </div>

            <div className="flex items-center space-x-6 text-blue-200">
              <div className="flex items-center space-x-2">
                <Shield className="w-5 h-5" />
                <span className="text-sm">Enterprise Security</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="w-5 h-5" />
                <span className="text-sm">Employee Management</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
