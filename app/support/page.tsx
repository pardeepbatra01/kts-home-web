import type { Metadata } from "next"
import CustomerLoginSection from "@/components/customer-login-section"
import CustomerSupportSection from "@/components/customer-support-section"
import Header from "@/components/header"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "Customer Portal | Fluent Home",
  description: "Access your Fluent Home customer account or get support from our team.",
}

export default function CustomerPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <Navigation />
      <main className="flex-1 bg-gray-50">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="mb-12 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">Customer Support</h1>
            <p className="mt-4 text-lg text-gray-600">How can we help you today?</p>
          </div>

          <div className="max-w-3xl mx-auto">
            <CustomerSupportSection />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
