import Image from "next/image"
import { Lightbulb, Smartphone, Zap, Palette } from "lucide-react"

export default function SmartBulbProduct() {
  const features = [
    {
      icon: Lightbulb,
      title: "Intelligent Setup",
      description: "Easy installation and automatic device recognition",
    },
    {
      icon: Palette,
      title: "Custom Scenes",
      description: "Create personalized lighting scenes for any occasion",
    },
    {
      icon: Smartphone,
      title: "App Control",
      description: "Full control from your smartphone anywhere in the world",
    },
    {
      icon: Zap,
      title: "Energy Efficient",
      description: "LED technology saves up to 80% on energy costs",
    },
  ]

  const specifications = [
    { label: "Brightness", value: "800-1600 lumens" },
    { label: "Color Range", value: "16 million colors" },
    { label: "Connectivity", value: "Wi-Fi + Zigbee" },
    { label: "Lifespan", value: "25,000+ hours" },
    { label: "Energy Rating", value: "Energy Star" },
    { label: "Dimming", value: "1-100%" },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Product details - moved to right (originally on left) */}
          <div className="space-y-8 lg:order-2">
            <div>
              <span className="text-blue-600 font-semibold text-sm uppercase tracking-wide">SMART TECHNOLOGY</span>
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 leading-tight mt-2">Smart Lights</h2>
              <p className="text-lg text-slate-600 mt-4">Brilliant ideas for intelligent security</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <feature.icon className="w-5 h-5 text-blue-600" />
                    </div>
                    <h4 className="font-semibold text-slate-800">{feature.title}</h4>
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>

            <div className="bg-blue-50 rounded-lg p-6">
              <h4 className="font-semibold text-slate-800 mb-3">Technical Specifications</h4>
              <div className="grid grid-cols-2 gap-4">
                {specifications.map((spec, index) => (
                  <div key={index} className="flex justify-between text-sm">
                    <span className="text-slate-600">{spec.label}:</span>
                    <span className="text-slate-800 font-medium">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Smart bulb image - moved to left (originally on right) */}
          <div className="relative lg:order-1">
            <Image
              src="side-view-woman-relaxing-home.jpg"
              alt="Smart LED Light Bulb"
              width={400}
              height={500}
              className="w-full max-w-md mx-auto h-auto"
            />

            {/* Feature callouts */}
            <div className="absolute top-8 right-8 bg-blue-600 text-white rounded-lg p-3">
              <div className="text-sm font-medium">16M Colors</div>
            </div>
            <div className="absolute bottom-8 left-8 bg-green-600 text-white rounded-lg p-3">
              <div className="text-sm font-medium">Energy Star</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
