import { Button } from "@/components/ui/button"

export default function CustomizedSolutions() {
  return (
    <section className="py-16 lg:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
          <img
                  src="medium-shot-people-working-office.jpg"
                  alt="Professional commercial security camera system"
                  className="w-full h-auto rounded-xl"
                />
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">CUSTOMIZED TO YOUR BUSINESS.</h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              We'll personalize a smart home security system to fit your needs and grow your partnership opportunities
              with proven technology solutions.
            </p>
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              LEARN MORE ABOUT US
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
