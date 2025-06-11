import Image from "next/image"
import { Shield, Wifi, Clock } from "lucide-react"

export default function FeatureCardsSection() {
  const features = [
    {
      icon: Shield,
      title: "Remotely protect your home",
      description: "Monitor and control your security system from anywhere in the world with our mobile app.",
      image: "/home-safety.jpg",
    },
    {
      icon: Wifi,
      title: "Z-Wave/Zigbee Panel",
      description: "Compatible with hundreds of smart home devices using industry-standard protocols.",
      image: "/panel-6.webp",
    },
    {
      icon: Clock,
      title: "24/7 Monitoring",
      description: "Professional monitoring service ensures your home is protected around the clock.",
      image: "support-blurb-1.jpg",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center space-y-6">
              <Image
                src={feature.image || "/placeholder.svg"}
                alt={feature.title}
                width={300}
                height={200}
                className="w-full h-48 object-cover rounded-lg"
              />

              <div className="space-y-4">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                  <feature.icon className="w-8 h-8 text-blue-600" />
                </div>

                <h3 className="text-xl font-bold text-slate-800">{feature.title}</h3>

                <p className="text-slate-600 leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
