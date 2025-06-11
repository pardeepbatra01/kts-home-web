import Header from "@/components/header"
import Navigation from "@/components/navigation"
import PromoBanner from "@/components/promo-banner"
import MonitoringHero from "@/components/monitoring-hero"
import TestimonialSection from "@/components/testimonial-section"
import MonitoringFeatures from "@/components/monitoring-features"
import CertificationBadges from "@/components/certification-badges"
import ProductShowcase from "@/components/product-showcase"
import GetStartedSection from "@/components/get-started-section"
import ContactForm from "@/components/contact-form"
import Footer from "@/components/footer"

export default function MonitoringPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <Navigation />
      {/* <PromoBanner /> */}
      <MonitoringHero />
      <TestimonialSection />
      <MonitoringFeatures />
      <CertificationBadges />
      <ProductShowcase />
      <GetStartedSection />
      <ContactForm />
      <Footer />
    </div>
  )
}
