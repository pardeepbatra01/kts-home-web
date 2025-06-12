import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Building, Users, MapPin, Phone } from "lucide-react"

export default function BusinessQuoteSection() {
  return (
    <section className="py-16 lg:py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Start Securing Your Business Today!
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get a customized commercial security solution tailored to your business needs. Free consultation and
            competitive pricing for all business sizes.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <Label htmlFor="business-name" className="text-base font-medium text-gray-700">
                  Business Name *
                </Label>
                <Input id="business-name" placeholder="Enter your business name" className="mt-2 h-12" />
              </div>

              <div>
                <Label htmlFor="business-type" className="text-base font-medium text-gray-700">
                  Business Type *
                </Label>
                <Input id="business-type" placeholder="e.g., Retail, Office, Warehouse" className="mt-2 h-12" />
              </div>

              <div>
                <Label htmlFor="square-footage" className="text-base font-medium text-gray-700">
                  Square Footage
                </Label>
                <Input id="square-footage" placeholder="Approximate size of your business" className="mt-2 h-12" />
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <Label htmlFor="contact-name" className="text-base font-medium text-gray-700">
                  Contact Name *
                </Label>
                <Input id="contact-name" placeholder="Your full name" className="mt-2 h-12" />
              </div>

              <div>
                <Label htmlFor="business-phone" className="text-base font-medium text-gray-700">
                  Business Phone *
                </Label>
                <Input id="business-phone" placeholder="(555) 123-4567" className="mt-2 h-12" />
              </div>

              <div>
                <Label htmlFor="business-email" className="text-base font-medium text-gray-700">
                  Business Email *
                </Label>
                <Input id="business-email" type="email" placeholder="business@company.com" className="mt-2 h-12" />
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-12 py-4 text-lg">
              Get Free Business Quote
            </Button>
            <p className="text-sm text-gray-500 mt-4">No obligation • Free consultation • Custom pricing available</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-12">
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Building className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">All Business Types</h3>
            <p className="text-sm text-gray-600">Retail, office, warehouse, restaurant, and more</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Scalable Solutions</h3>
            <p className="text-sm text-gray-600">From small shops to large enterprises</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Local Installation</h3>
            <p className="text-sm text-gray-600">Professional installation in your area</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">24/7 Support</h3>
            <p className="text-sm text-gray-600">Round-the-clock business support</p>
          </div>
        </div>
      </div>
    </section>
  )
}
