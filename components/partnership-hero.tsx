import { Button } from "@/components/ui/button"

export default function PartnershipHero() {
  return (
    <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white py-20 lg:py-32">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="mb-6">
            <span className="text-blue-200 text-sm font-medium tracking-wider uppercase">
              KTS HOME SMART TECHNOLOGY PARTNERS
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight">
            WE BUILD
            <br />
            <span className="text-blue-300">PARTNERSHIPS</span>
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            The strongest technology partnerships through your trusted smart home network. Call Now to Connect to Your
            Success!
          </p>
          <Button
            size="lg"
            className="bg-white text-blue-700 hover:bg-blue-50 font-semibold px-8 py-3 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          >
            CALL 855-GET-KTS
          </Button>
        </div>
      </div>
    </section>
  )
}
