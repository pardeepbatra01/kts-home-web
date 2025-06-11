import Header from "@/components/header"
import Navigation from "@/components/navigation"
import PromoBanner from "@/components/promo-banner"
import SmartLightingHero from "@/components/smart-lighting-hero"
import SmartBulbProduct from "@/components/smart-bulb-product"
import LightingSafetySection from "@/components/lighting-safety-section"
import MobileLightingControl from "@/components/mobile-lighting-control"
import CertificationBadges from "@/components/certification-badges"
import ProductShowcase from "@/components/product-showcase"
import GetStartedSection from "@/components/get-started-section"
import ContactForm from "@/components/contact-form"
import Footer from "@/components/footer"

export default function SmartLightingPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <Navigation />
      {/* <PromoBanner /> */}
      <SmartLightingHero />
      <SmartBulbProduct />
      <LightingSafetySection />
      <MobileLightingControl />
      <CertificationBadges />
      <ProductShowcase />
      <GetStartedSection />
      <ContactForm />
      <Footer />
    </div>
  )
}
