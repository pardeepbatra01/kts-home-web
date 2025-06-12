import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function TechnologyIntegration() {
  return (
    <section className="py-16 lg:py-20 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="relative">
              <Image
                src="woman-touching-smart-home-device-choosing-mode.jpg"
                alt="Smart doorbell camera technology"
                width={300}
                height={400}
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -top-4 -right-4 bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                !
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Simple.
              <br />
              Smart.
              <br />
              <span className="text-blue-300">Secure.</span>
            </h2>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              At Kts Homes, you have it in your job to be kts in everything from home security, and sharing that
              knowledge and experience with our customers. We want to make sure that you have all the tools to design
              your home to fit your lifestyle.
            </p>
            <Button
              size="lg"
              className="bg-white text-blue-700 hover:bg-blue-50 font-semibold px-8 py-3 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              LEARN MORE
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
