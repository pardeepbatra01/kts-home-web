import Header from "@/components/header"
import Navigation from "@/components/navigation"
import PromoBanner from "@/components/promo-banner"
import SmartLocksHero from "@/components/smart-locks-hero"
import SmartLockProduct from "@/components/smart-lock-product"
import SmartConvenienceSection from "@/components/smart-convenience-section"
import KeylessControlSection from "@/components/keyless-control-section"
import CertificationBadges from "@/components/certification-badges"
import ProductShowcase from "@/components/product-showcase"
import GetStartedSection from "@/components/get-started-section"
import ContactForm from "@/components/contact-form"
import SmartLocksFAQ from "@/components/smart-locks-faq"
import Footer from "@/components/footer"

export default function SmartLocksPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <Navigation />
      {/* <PromoBanner /> */}
      <SmartLocksHero />
      <SmartLockProduct />
      <SmartConvenienceSection />
      <KeylessControlSection />
      <CertificationBadges />
      <ProductShowcase />
      <GetStartedSection />
      <ContactForm />
      <SmartLocksFAQ />
      <Footer />
    </div>
  )
}
