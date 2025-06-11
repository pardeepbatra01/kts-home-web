import Header from "@/components/header"
import Navigation from "@/components/navigation"
import PromoBanner from "@/components/promo-banner"
import OutdoorCameraHero from "@/components/outdoor-camera-hero"
import OutdoorCameraProduct from "@/components/outdoor-camera-product"
import HomeMonitoringSection from "@/components/home-monitoring-section"
import OutdoorCameraSystemSection from "@/components/outdoor-camera-system-section"
import OutdoorCameraComparison from "@/components/outdoor-camera-comparison"
import CertificationBadges from "@/components/certification-badges"
import ProductShowcase from "@/components/product-showcase"
import GetStartedSection from "@/components/get-started-section"
import ContactForm from "@/components/contact-form"
import OutdoorCameraFAQ from "@/components/outdoor-camera-faq"
import Footer from "@/components/footer"

export default function OutdoorCamerasPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <Navigation />
      <OutdoorCameraHero />
      <OutdoorCameraProduct />
      <HomeMonitoringSection />
      <OutdoorCameraSystemSection />
      <CertificationBadges />
      <ProductShowcase />
      <GetStartedSection />
      <ContactForm />
      <OutdoorCameraFAQ />
      <Footer />
    </div>
  )
}
