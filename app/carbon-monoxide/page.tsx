import Header from "@/components/header"
import Navigation from "@/components/navigation"
import PromoBanner from "@/components/promo-banner"
import CarbonMonoxideHero from "@/components/carbon-monoxide-hero"
import CarbonMonoxideDetectorSection from "@/components/carbon-monoxide-detector-section"
import ReliableDetectionSection from "@/components/reliable-detection-section"
import CertificationBadges from "@/components/certification-badges"
import ProductShowcase from "@/components/product-showcase"
import GetStartedSection from "@/components/get-started-section"
import ContactForm from "@/components/contact-form"
import CarbonMonoxideFAQ from "@/components/carbon-monoxide-faq"
import Footer from "@/components/footer"

export default function CarbonMonoxidePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <Navigation />
      {/* <PromoBanner /> */}
      <CarbonMonoxideHero />
      <CarbonMonoxideDetectorSection />
      <ReliableDetectionSection />
      <CertificationBadges />
      <ProductShowcase />
      <GetStartedSection />
      <ContactForm />
      <CarbonMonoxideFAQ />
      <Footer />
    </div>
  )
}
