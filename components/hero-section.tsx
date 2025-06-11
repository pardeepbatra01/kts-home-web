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
              Complete Home Security & Safety Solutions
            </h1>

            <p className="text-lg text-slate-600 leading-relaxed max-w-xl">
              KTS delivers comprehensive protection with smart video surveillance, CO detection, and 24/7 professional monitoring. 
              Our integrated system keeps your family safe from both security threats and environmental hazards, all controlled 
              through one intuitive app.
            </p>
          </div>

          <div className="relative">
            <div className="relative">
              <Image
                src="person.png"
                alt="Security camera with smart notifications"
                width={700}
                height={500}
                className="w-full h-auto rounded-lg"
              />

              {/* Person Detected notification */}
              

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
