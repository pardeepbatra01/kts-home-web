import Header from "@/components/header"
import Navigation from "@/components/navigation"
import PromoBanner from "@/components/promo-banner"
import SmartThermostatHero from "@/components/smart-thermostat-hero"
import ThermostatProductSection from "@/components/thermostat-product-section"
import RemoteControlSection from "@/components/remote-control-section"
import MobileThermostatControl from "@/components/mobile-thermostat-control"
import ThermostatComparisonSection from "@/components/thermostat-comparison-section"
import CertificationBadges from "@/components/certification-badges"
import ProductShowcase from "@/components/product-showcase"
import GetStartedSection from "@/components/get-started-section"
import ContactForm from "@/components/contact-form"
import ThermostatFAQ from "@/components/thermostat-faq"
import Footer from "@/components/footer"

export default function SmartThermostatPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <Navigation />
      {/* <PromoBanner /> */}
      <SmartThermostatHero />
      <ThermostatProductSection />
      <RemoteControlSection />
      <MobileThermostatControl />
      <CertificationBadges />
      <ProductShowcase />
      <GetStartedSection />
      <ContactForm />
      <ThermostatFAQ />
      <Footer />
    </div>
  )
}
