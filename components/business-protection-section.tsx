import { Button } from "@/components/ui/button"
import { Shield, Clock, Phone, CheckCircle } from "lucide-react"

export default function BusinessProtectionSection() {
  const protectionFeatures = [
    "Comprehensive asset protection for inventory, equipment, and property",
    "Employee safety monitoring with panic buttons and emergency response",
    "Customer safety assurance with visible security presence and monitoring",
    "Loss prevention through advanced surveillance and access control",
    "Insurance premium reductions with certified security system installation",
    "Remote monitoring capabilities for multi-location business management",
    "Integration with existing business systems and fire safety equipment",
    "Detailed reporting and analytics for business security insights",
    "Scalable solutions that grow with your business expansion needs",
    "Compliance assistance for industry-specific security requirements",
  ]

  return (
    <section className="py-16 lg:py-20 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content - Swapped to LEFT (originally right in reference) */}
          <div className="space-y-8 lg:order-1">
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-blue-400">
                <Shield className="w-5 h-5" />
                <span className="text-sm font-medium uppercase tracking-wide">Business Protection</span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                Every Business
                <span className="block text-blue-400">Protected</span>
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed">
                Our commercial security systems provide comprehensive protection for businesses of all sizes. From small
                retail shops to large corporate facilities, we deliver enterprise-grade security solutions.
              </p>
            </div>

            <div className="space-y-4">
              {protectionFeatures.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">{feature}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                <Phone className="w-5 h-5 mr-2" />
                Call Business Sales
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-slate-900"
              >
                <Clock className="w-5 h-5 mr-2" />
                Schedule Consultation
              </Button>
            </div>
          </div>

          {/* Image - Swapped to RIGHT (originally left in reference) */}
          <div className="lg:order-2">
            <div className="relative">
              <div className="absolute inset-0 bg-blue-500/20 rounded-2xl transform rotate-3"></div>
              <img
                src="cctv-security-technology-with-lock-icon-digital-remix.jpg"
                alt="Business owner managing security system in commercial environment"
                className="relative rounded-2xl shadow-2xl w-full h-auto object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-blue-600 text-white p-4 rounded-xl shadow-lg">
                <div className="text-2xl font-bold">24/7</div>
                <div className="text-sm">Business Monitoring</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
