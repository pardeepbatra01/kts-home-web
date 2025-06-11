import Image from "next/image"
import { CheckCircle } from "lucide-react"

export default function MobileThermostatControl() {
  const features = [
    "Adjust temperature from anywhere in the world",
    "Create custom heating and cooling schedules",
    "Monitor energy usage and cost savings",
    "Receive maintenance alerts and reminders",
    "Voice control with Alexa and Google Assistant",
    "Integration with security system for away mode",
  ]

  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Features content - moved to left (originally on right in reference) */}
          <div className="space-y-6 lg:space-y-8 lg:order-1">
            <div>
              <span className="text-blue-600 font-semibold text-sm uppercase tracking-wide">REMOTE CONTROL</span>
              <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-slate-800 leading-tight mt-2">
                You're in control - from anywhere
              </h2>
              <p className="text-lg text-slate-600 mt-4">
                Complete climate control at your fingertips with our intuitive mobile app
              </p>
            </div>

            <div className="space-y-3 lg:space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 lg:w-6 lg:h-6 text-blue-600 flex-shrink-0" />
                  <span className="text-slate-700 font-medium text-sm lg:text-base">{feature}</span>
                </div>
              ))}
            </div>

            <div className="bg-blue-50 rounded-lg p-4 lg:p-6">
              <h4 className="font-semibold text-slate-800 mb-3">Smart Home Integration</h4>
              <p className="text-slate-600 text-sm leading-relaxed">
                Our smart thermostat seamlessly integrates with your existing smart home ecosystem. Set up automation
                rules that work with your security system, lighting, and other smart devices for the ultimate in home
                comfort and efficiency.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white border border-blue-200 rounded-lg p-3 lg:p-4 text-center">
                <div className="text-xl lg:text-2xl font-bold text-blue-600">23%</div>
                <div className="text-xs lg:text-sm text-slate-600">Average Savings</div>
              </div>
              <div className="bg-white border border-blue-200 rounded-lg p-3 lg:p-4 text-center">
                <div className="text-xl lg:text-2xl font-bold text-blue-600">24/7</div>
                <div className="text-xs lg:text-sm text-slate-600">Remote Access</div>
              </div>
            </div>
          </div>

          {/* Mobile app mockup - moved to right (originally on left in reference) */}
          <div className="relative lg:order-2 mt-8 lg:mt-0">
            <Image
              src="composition-tablet-with-home-automation-app.jpg"
              alt="Smart thermostat mobile app interface"
              width={300}
              height={600}
              className="w-full max-w-sm mx-auto h-auto"
            />

            {/* App features overlay */}
            <div className="absolute top-4 lg:top-8 right-4 lg:right-8 bg-blue-600 text-white rounded-lg p-2 lg:p-4">
              <div className="text-xs lg:text-sm font-medium">Climate Control</div>
              <div className="text-xs opacity-90">Connected</div>
            </div>

            {/* Temperature control indicator */}
            <div className="absolute bottom-4 lg:bottom-8 left-4 lg:left-8 bg-white rounded-lg shadow-xl p-2 lg:p-4">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <div>
                  <div className="font-semibold text-slate-800 text-xs lg:text-sm">Eco Mode</div>
                  <div className="text-xs text-slate-600">Saving energy</div>
                </div>
              </div>
            </div>

            {/* Schedule indicator */}
            <div className="absolute top-1/2 right-2 lg:right-4 bg-green-500 text-white rounded-lg p-2 lg:p-3">
              <div className="text-xs font-medium">Schedule</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
