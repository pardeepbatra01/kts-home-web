import Image from "next/image"

export default function ControlsComeTogetherSection() {
  return (
    <section className="py-20 bg-slate-100">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text content - moved to right */}
          <div className="lg:order-2 space-y-8">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 leading-tight">
              Where all your home controls come together
            </h2>

            <p className="text-lg text-slate-600 leading-relaxed">
              Centralize your entire smart home ecosystem in one elegant interface. From lighting and climate to
              security and entertainment, everything is just a touch away.
            </p>

            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h4 className="font-semibold text-slate-800 mb-2">Unified Control</h4>
                <p className="text-slate-600 text-sm">
                  Control lights, thermostats, locks, cameras, and more from a single, intuitive interface.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h4 className="font-semibold text-slate-800 mb-2">Smart Automation</h4>
                <p className="text-slate-600 text-sm">
                  Create custom scenes and schedules that adapt to your lifestyle and preferences.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h4 className="font-semibold text-slate-800 mb-2">Voice Integration</h4>
                <p className="text-slate-600 text-sm">
                  Works seamlessly with Alexa, Google Assistant, and other voice platforms.
                </p>
              </div>
            </div>
          </div>

          {/* Control panel image - moved to left */}
          <div className="lg:order-1 relative">
            <Image
              src="smart-home-tablet-wall.jpg"
              alt="Unified Home Controls Interface"
              width={400}
              height={500}
              className="w-full max-w-md mx-auto h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
