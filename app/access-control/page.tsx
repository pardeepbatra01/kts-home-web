import Header from "@/components/header"
import AccessControlHero from "@/components/access-control-hero"
import AccessControlFeatures from "@/components/access-control-features"
import SecureAccessSection from "@/components/secure-access-section"
import RemoteAccessSection from "@/components/remote-access-section"
import GetStartedSection from "@/components/get-started-section"
import CertificationBadges from "@/components/certification-badges"
import ProductShowcase from "@/components/product-showcase"
import ContactForm from "@/components/contact-form"
import Footer from "@/components/footer"
import Navigation from "@/components/navigation"

export default function AccessControlPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
       <Navigation />
      <AccessControlHero />
      <AccessControlFeatures />
      <SecureAccessSection />
      <RemoteAccessSection />
      <GetStartedSection />
      <CertificationBadges />
      <ProductShowcase />
      <ContactForm />
      <Footer />
    </div>
  )
}
