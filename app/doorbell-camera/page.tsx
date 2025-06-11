import Header from "@/components/header"
import Navigation from "@/components/navigation"
import PromoBanner from "@/components/promo-banner"
import DoorbellCameraHero from "@/components/doorbell-camera-hero"
import DoorbellProductSection from "@/components/doorbell-product-section"
import FirstLineDefenseSection from "@/components/first-line-defense-section"
import SmartHomeExperienceSection from "@/components/smart-home-experience-section"
import DoorbellComparisonSection from "@/components/doorbell-comparison-section"
import CertificationBadges from "@/components/certification-badges"
import ProductShowcase from "@/components/product-showcase"
import GetStartedSection from "@/components/get-started-section"
import ContactForm from "@/components/contact-form"
import DoorbellCameraFAQ from "@/components/doorbell-camera-faq"
import Footer from "@/components/footer"

export default function DoorbellCameraPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <Navigation />
      <DoorbellCameraHero />
      <DoorbellProductSection />
      <FirstLineDefenseSection />
      <SmartHomeExperienceSection />
      <CertificationBadges />
      <ProductShowcase />
      <GetStartedSection />
      <ContactForm />
      <DoorbellCameraFAQ />
      <Footer />
    </div>
  )
}
