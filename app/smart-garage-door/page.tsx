import Header from "@/components/header"
import Navigation from "@/components/navigation"
import PromoBanner from "@/components/promo-banner"
import SmartGarageDoorHero from "@/components/smart-garage-door-hero"
import GarageDoorProductSection from "@/components/garage-door-product-section"
import ConvenienceSecuritySection from "@/components/convenience-security-section"
import MobileGarageControl from "@/components/mobile-garage-control"
import CertificationBadges from "@/components/certification-badges"
import ProductShowcase from "@/components/product-showcase"
import GetStartedSection from "@/components/get-started-section"
import ContactForm from "@/components/contact-form"
import GarageDoorFAQ from "@/components/garage-door-faq"
import Footer from "@/components/footer"

export default function SmartGarageDoorPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <Navigation />
      <PromoBanner />
      <SmartGarageDoorHero />
      <GarageDoorProductSection />
      <ConvenienceSecuritySection />
      <MobileGarageControl />
      <CertificationBadges />
      <ProductShowcase />
      <GetStartedSection />
      <ContactForm />
      <GarageDoorFAQ />
      <Footer />
    </div>
  )
}
