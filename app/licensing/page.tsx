import type { Metadata } from "next"
import Header from "@/components/header"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "Licensing Information | KTS Home Security & Automation",
  description: "View KTS Home's licensing information for Alberta where we provide professional security and home automation services.",
}

export default function LicensingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <Navigation />
      <main className="flex-1 bg-gray-50">
        <section className="relative py-16 md:py-20 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Licensing Information</h1>
              <p className="text-xl text-gray-600 mb-8">Learn about our licensing and certifications in Alberta.</p>
            </div>
            <div className="mt-12 prose prose-lg mx-auto">
              <h2>Alberta Security Services and Investigators Act</h2>
              <p>
                KTS Home operates under the Alberta Security Services and Investigators Act (SSIA). 
                Our business license and all our security professionals are fully compliant with provincial regulations.
              </p>
              
              <h2 className="mt-8">Professional Certifications</h2>
              <p>
                Our technicians are certified and trained to install and maintain security systems according to 
                Canadian standards. We maintain all required certifications and regularly update our training 
                to stay current with industry best practices.
              </p>

              <h2 className="mt-8">Quality Assurance</h2>
              <p>
                We are committed to maintaining the highest standards of service and compliance. Our installation 
                and monitoring services meet or exceed all provincial requirements for security system providers.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
