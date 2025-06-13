import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

export default function LocationsForm() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="max-w-2xl mx-auto">
            {/* Form Content */}
            <div className="p-8 lg:p-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                Start building your smart home system today!
              </h2>
              <p className="text-gray-600 mb-8">
                or Call <span className="text-blue-600 font-semibold">855-436-8500</span> for a FREE custom quote.
              </p>

              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="firstName">First Name*</Label>
                    <Input id="firstName" className="mt-1" placeholder="First Name" />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name*</Label>
                    <Input id="lastName" className="mt-1" placeholder="Last Name" />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email">Email Address*</Label>
                  <Input id="email" type="email" className="mt-1" placeholder="Email Address" />
                </div>

                <div>
                  <Label htmlFor="phone">Phone Number*</Label>
                  <Input id="phone" type="tel" className="mt-1" placeholder="Phone Number" />
                </div>

                <div className="text-xs text-gray-500">
                  * Clicking the button constitutes your electronic signature and consent for Fluent Home to use
                  automated technology, including calls, texts, and prerecorded messages to contact you at the
                  information provided. This consent is not required to make a purchase. See our{" "}
                  <a href="#" className="text-blue-600 hover:underline">
                    Privacy Policy
                  </a>{" "}
                  and{" "}
                  <a href="#" className="text-blue-600 hover:underline">
                    Terms of Use
                  </a>{" "}
                  for more information.
                </div>

                <div>
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white w-full md:w-auto px-8 py-3 flex items-center justify-center gap-2">
                    <span>Start Your Quote</span>
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              </form>
            </div>

           
          </div>
        </div>
      </div>
    </section>
  )
}
