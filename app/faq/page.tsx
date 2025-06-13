import type { Metadata } from "next"
import FaqHero from "@/components/faq-hero"
import FaqAccordion from "@/components/faq-accordion"
import Header from "@/components/header"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "FAQ - KTS Home",
  description: "Frequently asked questions about KTS Home security systems, services, and policies.",
}

export default function FaqPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <Navigation />
      <main className="flex-1 bg-gray-50">
        <FaqHero />
        <section className="container mx-auto px-4 py-12 md:py-16 lg:py-20">
          <FaqAccordion />
        </section>
      </main>
      <Footer />
    </div>
  )
}
