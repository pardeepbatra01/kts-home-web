import HelpCenterHeader from "@/components/help-center-header"
import HelpCenterHero from "@/components/help-center-hero"
import HelpCategories from "@/components/help-categories"
import TrendingArticles from "@/components/trending-articles"
import HelpContactSection from "@/components/help-contact-section"
import HelpCenterFooter from "@/components/help-center-footer"
import Header from "@/components/header"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import ContactForm from "@/components/contact-form"

export const metadata = {
  title: "Help Center | Fluent Home",
  description: "Find answers to your questions about Fluent Home products and services.",
}

export default function HelpCenterPage() {
  return (
    <div className="flex min-h-screen flex-col">
         <Header />
            <Navigation />
      <main className="flex-1">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
            <div className="lg:col-span-3">
              <HelpCategories />
            </div>
            <div className="lg:col-span-1">
            </div>
          </div>
        </div>
         <ContactForm />
      </main>
  <Footer />
    </div>
  )
}
