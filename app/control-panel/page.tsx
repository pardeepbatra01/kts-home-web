import Header from "@/components/header"
import Navigation from "@/components/navigation"
import PromoBanner from "@/components/promo-banner"
import ControlPanelHero from "@/components/control-panel-hero"
import SmartControlSection from "@/components/smart-control-section"
import SimpleSecureSection from "@/components/simple-secure-section"
import ControlsComeTogetherSection from "@/components/controls-come-together-section"
import ManagingProtectingSection from "@/components/managing-protecting-section"
import FeatureCardsSection from "@/components/feature-cards-section"
import CertificationBadges from "@/components/certification-badges"
import ProductShowcase from "@/components/product-showcase"
import GetStartedSection from "@/components/get-started-section"
import ContactForm from "@/components/contact-form"
import FAQSection from "@/components/faq-section"
import Footer from "@/components/footer"

export default function ControlPanelPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <Navigation />
      {/* <PromoBanner /> */}
      <ControlPanelHero />
      <SimpleSecureSection />
      <ManagingProtectingSection />
      <SmartControlSection />
      <ControlsComeTogetherSection />
      <FeatureCardsSection />
      <CertificationBadges />
      <GetStartedSection />
      <ProductShowcase />
      <FAQSection />
      <ContactForm />
      
      <Footer />
    </div>
  )
}
