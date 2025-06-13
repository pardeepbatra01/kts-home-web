import LocationsHero from "@/components/locations-hero"
import ServiceAreas from "@/components/service-areas"
import LocationsForm from "@/components/locations-form"
import Header from "@/components/header"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

export default function LocationsPage() {
  return (
    <main>
       <Header />
      <Navigation />
      <LocationsHero />
      <ServiceAreas />
      <LocationsForm />
       <Footer />
    </main>
  )
}
