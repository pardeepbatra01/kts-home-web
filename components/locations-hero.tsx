import { Button } from "@/components/ui/button"
import { PhoneCall } from "lucide-react"

export default function LocationsHero() {
  return (
    <section className="relative h-[500px] md:h-[600px] overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: "url('/scanning-finger-coronavirus-contaminated-fingerprint-access-control.jpg')",
          backgroundPosition: "center 40%",
        }}
      ></div>

      {/* Blue Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-blue-800/70 to-blue-700/60 z-10"></div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">Locations</h1>
        <div className="max-w-2xl">
          <p className="text-white/90 text-lg md:text-xl mb-8">
            KTS Home is proud to serve Alberta, Canada with premium security and home automation solutions. We provide unparalleled control and enhanced peace of mind for our Canadian customers.
          </p>
          <Button className="bg-blue-500 hover:bg-blue-600 text-white flex items-center gap-2 px-6 py-6 text-lg">
            <PhoneCall className="w-5 h-5" />
            <span>855-436-8500</span>
          </Button>
        </div>
      </div>
    </section>
  )
}
