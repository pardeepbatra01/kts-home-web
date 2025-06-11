import Header from "@/components/header"
import Navigation from "@/components/navigation"
import PromoBanner from "@/components/promo-banner"
import MobileAppHero from "@/components/mobile-app-hero"
import AppFeaturesSection from "@/components/app-features-section"
import MobileControlSection from "@/components/mobile-control-section"
import AppDownloadSection from "@/components/app-download-section"
import AppCapabilitiesGrid from "@/components/app-capabilities-grid"
import CertificationBadges from "@/components/certification-badges"
import ProductShowcase from "@/components/product-showcase"
import GetStartedSection from "@/components/get-started-section"
import ContactForm from "@/components/contact-form"
import Footer from "@/components/footer"

export default function MobileAppPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <Navigation />
      {/* <PromoBanner /> */}
      <MobileAppHero />
      <AppFeaturesSection />
      <MobileControlSection />
      <AppDownloadSection />
      <AppCapabilitiesGrid />
      <CertificationBadges />
      <ProductShowcase />
      <GetStartedSection />
      <ContactForm />
      <Footer />
    </div>
  )
}
