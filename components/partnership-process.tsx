import { Button } from "@/components/ui/button"
import { Phone, Calendar, Smartphone } from "lucide-react"

export default function PartnershipProcess() {
  return (
    <section className="py-16 lg:py-20 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">HOW TO GET STARTED:</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="text-center">
            <div className="bg-white/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
              <Phone className="w-10 h-10 text-blue-200" />
            </div>
            <h3 className="text-xl font-semibold mb-4">1. Call for Partnership</h3>
            <p className="text-blue-100 leading-relaxed">
              Speak with our partnership team to discuss opportunities and learn about our dealer program benefits.
            </p>
          </div>

          <div className="text-center">
            <div className="bg-white/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
              <Calendar className="w-10 h-10 text-blue-200" />
            </div>
            <h3 className="text-xl font-semibold mb-4">2. Schedule Your Training</h3>
            <p className="text-blue-100 leading-relaxed">
              Get comprehensive training on our products, installation processes, and business development strategies.
            </p>
          </div>

          <div className="text-center">
            <div className="bg-white/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
              <Smartphone className="w-10 h-10 text-blue-200" />
            </div>
            <h3 className="text-xl font-semibold mb-4">3. Launch Your Business</h3>
            <p className="text-blue-100 leading-relaxed">
              Start selling with our complete support system, marketing materials, and ongoing technical assistance.
            </p>
          </div>
        </div>

        <div className="text-center">
          <Button
            size="lg"
            className="bg-white text-blue-700 hover:bg-blue-50 font-semibold px-8 py-3 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          >
            CALL 855-GET-KTS
          </Button>
        </div>
      </div>
    </section>
  )
}
