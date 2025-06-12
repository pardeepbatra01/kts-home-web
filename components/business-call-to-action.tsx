import { Button } from "@/components/ui/button"
import { Phone, Calendar, Shield } from "lucide-react"

export default function BusinessCallToAction() {
  return (
    <section className="py-16 lg:py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <div className="flex items-center justify-center space-x-2 text-blue-200">
              <Shield className="w-6 h-6" />
              <span className="text-sm font-medium uppercase tracking-wide">Business Security Experts</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              Call Us for Professional Help!
              <span className="block">Get a Free Quote Today!</span>
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Ready to protect your business with a professional security system? Our commercial security experts are
              standing by to provide a free consultation and customized quote for your business needs.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 text-lg px-8 py-4">
              <Phone className="w-5 h-5 mr-2" />
              Call Now: 1-855-BUSINESS
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-600 text-lg px-8 py-4"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Schedule Free Consultation
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">24/7</div>
              <div className="text-blue-200">Business Support Available</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">Free</div>
              <div className="text-blue-200">Business Consultation & Quote</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">100%</div>
              <div className="text-blue-200">Satisfaction Guarantee</div>
            </div>
          </div>

          <div className="text-center text-blue-200 text-sm">
            Licensed, bonded, and insured commercial security professionals • Serving businesses nationwide
          </div>
        </div>
      </div>
    </section>
  )
}
