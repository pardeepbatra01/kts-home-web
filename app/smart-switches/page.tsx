import Header from "@/components/header"
import Navigation from "@/components/navigation"
import PromoBanner from "@/components/promo-banner"
import SmartSwitchesHero from "@/components/smart-switches-hero"
import SmartSwitchProduct from "@/components/smart-switch-product"
import ConvenienceSafetySection from "@/components/convenience-safety-section"
import MobileSwitchControl from "@/components/mobile-switch-control"
import CertificationBadges from "@/components/certification-badges"
import ProductShowcase from "@/components/product-showcase"
import GetStartedSection from "@/components/get-started-section"
import ContactForm from "@/components/contact-form"
import SmartSwitchesFAQ from "@/components/smart-switches-faq"
import Footer from "@/components/footer"

export default function SmartSwitchesPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <Navigation />
      {/* <PromoBanner /> */}
      <SmartSwitchesHero />
      <SmartSwitchProduct />
      <ConvenienceSafetySection />
      <MobileSwitchControl />
      <CertificationBadges />
      <ProductShowcase />
      <GetStartedSection />
      <ContactForm />
      <SmartSwitchesFAQ />
      <Footer />
    </div>
  )
}
