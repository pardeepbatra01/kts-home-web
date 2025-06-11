import Image from "next/image"
import { Shield, Heart, Headphones } from "lucide-react"

export default function MonitoringFeatures() {
  const features = [
    {
      icon: Shield,
      title: "Complete Security Protection",
      description:
        "Our trained security professionals monitor your home 24/7, ready to respond to any security breach, break-in attempt, or emergency situation with immediate action.",
      image: "/protection-surveillance-safety-privacy-policy-concept.jpg",
    },
    {
      icon: Heart,
      title: "Medical Emergency Response",
      description:
        "Instant medical alert monitoring ensures help is always available. Our operators can quickly dispatch emergency medical services and contact your designated emergency contacts.",
      image: "/medical-alerts-blurb-1.jpg"
    },
    {
      icon: Headphones,
      title: "24/7 Expert Support",
      description:
        "Round-the-clock access to our trained security professionals who can assist with system questions, troubleshooting, and emergency coordination whenever you need it.",
      image: "/support-blurb-1.jpg",
    },
  ]

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center space-y-6">
              <Image
                src={feature.image || "/placeholder.svg"}
                alt={feature.title}
                width={400}
                height={300}
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

        <div className="text-center mt-16">
          <div className="bg-blue-50 rounded-xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-slate-800 mb-4">Why Choose Professional Monitoring?</h3>
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div>
                <h4 className="font-semibold text-blue-600 mb-2">Faster Response</h4>
                <p className="text-slate-600 text-sm">
                  Professional monitoring ensures emergency services are contacted immediately, often faster than
                  self-monitoring.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-blue-600 mb-2">Always Available</h4>
                <p className="text-slate-600 text-sm">
                  Our monitoring center never sleeps - providing protection even when you're away, asleep, or unable to
                  respond.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-blue-600 mb-2">Expert Training</h4>
                <p className="text-slate-600 text-sm">
                  Our operators are trained to handle emergencies professionally and coordinate with local authorities
                  effectively.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
