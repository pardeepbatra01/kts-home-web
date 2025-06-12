import Header from "@/components/header"
import CommercialSecurityHero from "@/components/commercial-security-hero"
import BusinessQuoteSection from "@/components/business-quote-section"
import CommercialAppSection from "@/components/commercial-app-section"
import BusinessSecurityFeatures from "@/components/business-security-features"
import BusinessProtectionSection from "@/components/business-protection-section"
import BusinessMonitoringSection from "@/components/business-monitoring-section"
import BusinessTestimonialsSection from "@/components/business-testimonials-section"
import CertificationBadges from "@/components/certification-badges"
import GetStartedSection from "@/components/get-started-section"
import ContactForm from "@/components/contact-form"
import CommercialSecurityFaq from "@/components/commercial-security-faq"
import BusinessCallToAction from "@/components/business-call-to-action"
import Footer from "@/components/footer"
import Navigation from "@/components/navigation"

export default function CommercialSecurityPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Navigation />
      <CommercialSecurityHero />
      <BusinessQuoteSection />
      <CommercialAppSection />
      <BusinessSecurityFeatures />
      <BusinessProtectionSection />
      <BusinessMonitoringSection />
      <BusinessTestimonialsSection />
      <CertificationBadges />
      <GetStartedSection />
      <ContactForm />
      <CommercialSecurityFaq />
      <BusinessCallToAction />
      <Footer />
    </div>
  )
}
