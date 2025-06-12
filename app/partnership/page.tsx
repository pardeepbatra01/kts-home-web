import PartnershipHero from "@/components/partnership-hero"
import CustomizedSolutions from "@/components/customized-solutions"
import PartnershipProcess from "@/components/partnership-process"
import PartnershipBenefits from "@/components/partnership-benefits"
import TechnologyIntegration from "@/components/technology-integration"
import CertificationBadges from "@/components/certification-badges"
import ProductShowcase from "@/components/product-showcase"
import GetStartedSection from "@/components/get-started-section"
import ContactForm from "@/components/contact-form"
import Header from "@/components/header"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

export default function PartnershipPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <Navigation />
      <PartnershipHero />
      <CustomizedSolutions />
      <PartnershipProcess />
      <PartnershipBenefits />
      <TechnologyIntegration />
      <CertificationBadges />
      <ProductShowcase />
      <GetStartedSection />
      <ContactForm />
       <Footer />
    </div>
  )
}
