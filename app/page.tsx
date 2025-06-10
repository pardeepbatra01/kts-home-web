"use client"

import Header from "@/components/header"
import Navigation from "@/components/navigation"
import PromoBanner from "@/components/promo-banner"
import HeroSection from "@/components/hero-section"
import ContactForm from "@/components/contact-form"
import AITechnologySection from "@/components/ai-technology-section"
import MobileAppSection from "@/components/mobile-app-section"
import PackageTheftSection from "@/components/package-theft-section"
import VideoAnalyticsSection from "@/components/video-analytics-section"
import CrimePreventionSection from "@/components/crime-prevention-section"
import ProductShowcase from "@/components/product-showcase"
import WhyFluentSection from "@/components/why-fluent-section"
import LocationsSection from "@/components/locations-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <Navigation />
      <PromoBanner />
      <HeroSection />
      <ContactForm />
      <AITechnologySection />
      <MobileAppSection />
      <PackageTheftSection />
      <VideoAnalyticsSection />
      <CrimePreventionSection />
      <ProductShowcase />
      <WhyFluentSection />
      <ContactForm variant="secondary" />
      <LocationsSection />
      <Footer />
    </div>
  )
}
