import Header from "@/components/header"
import Navigation from "@/components/navigation"
import PromoBanner from "@/components/promo-banner"
import SmokeDetectorHero from "@/components/smoke-detector-hero"
import SmokeDetectorSection from "@/components/smoke-detector-section"
import FireProtectionSection from "@/components/fire-protection-section"
import CertificationBadges from "@/components/certification-badges"
import ProductShowcase from "@/components/product-showcase"
import GetStartedSection from "@/components/get-started-section"
import ContactForm from "@/components/contact-form"
import SmokeDetectorFAQ from "@/components/smoke-detector-faq"
import Footer from "@/components/footer"

export default function SmokeDetectorPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <Navigation />
      {/* <PromoBanner /> */}
      <SmokeDetectorHero />
      <SmokeDetectorSection />
      <FireProtectionSection />
      <CertificationBadges />
      <ProductShowcase />
      <GetStartedSection />
      <ContactForm />
      <SmokeDetectorFAQ />
      <Footer />
    </div>
  )
}
