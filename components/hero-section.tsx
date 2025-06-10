import Image from "next/image"

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-blue-100 py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-block">
              <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wide">
                HOME SECURITY
              </span>
            </div>

            <h1 className="text-4xl lg:text-6xl font-bold text-slate-800 leading-tight">
              Peace of mind starts with smarter video surveillance
            </h1>

            <p className="text-lg text-slate-600 leading-relaxed max-w-xl">
              Every Fluent smart home system features intelligent video surveillance and 24/7 video verification to keep
              your home safe and secure. Identify and deter real threats while also using light and sound to scare away
              lurkers before they become burglars.
            </p>
          </div>

          <div className="relative">
            <div className="relative">
              <Image
                src="personDetected.webp"
                alt="Security camera with smart notifications"
                width={700}
                height={500}
                className="w-full h-auto rounded-lg"
              />

              {/* Person Detected notification */}
              

              {/* Smart Alert notification */}
              <div className="absolute bottom-8 right-8 bg-slate-800 text-white rounded-lg p-4 shadow-xl">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-sm font-bold">F</span>
                  </div>
                  <div>
                    <div className="text-xs text-slate-300 uppercase tracking-wide">SMART ALERT</div>
                    <div className="text-sm font-medium">You in the orange jacket by the car!</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
