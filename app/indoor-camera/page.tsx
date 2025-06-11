import Header from "@/components/header"
import Navigation from "@/components/navigation"
import IndoorCameraHero from "@/components/indoor-camera-hero"
import IndoorCameraProduct from "@/components/indoor-camera-product"
import HomeWatchingSection from "@/components/home-watching-section"
import IndoorCameraSystemSection from "@/components/indoor-camera-system-section"
import IndoorCameraComparison from "@/components/indoor-camera-comparison"
import CertificationBadges from "@/components/certification-badges"
import ProductShowcase from "@/components/product-showcase"
import GetStartedSection from "@/components/get-started-section"
import ContactForm from "@/components/contact-form"
import IndoorCameraFAQ from "@/components/indoor-camera-faq"
import Footer from "@/components/footer"

export default function IndoorCamerasPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Navigation />
      <IndoorCameraHero />
      <IndoorCameraProduct />
      <HomeWatchingSection />
      <IndoorCameraSystemSection />
      <CertificationBadges />
      <ProductShowcase />
      <GetStartedSection />
      <ContactForm />
      <IndoorCameraFAQ />
      <Footer />
    </div>
  )
}
