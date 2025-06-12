import { Shield, Camera, Lock, Zap, Eye, Users } from "lucide-react"

export default function BusinessSecurityFeatures() {
  const features = [
    {
      icon: Shield,
      title: "24/7 Business Monitoring",
      description:
        "Professional monitoring center staffed around the clock to protect your business assets and respond to emergencies immediately.",
    },
    {
      icon: Camera,
      title: "Commercial Security Cameras",
      description:
        "High-definition surveillance cameras with night vision, motion detection, and cloud storage for comprehensive business monitoring.",
    },
    {
      icon: Lock,
      title: "Access Control Systems",
      description:
        "Advanced keycard and biometric access control to manage employee entry and secure sensitive business areas.",
    },
    {
      icon: Zap,
      title: "Motion & Break Sensors",
      description:
        "Intelligent sensors that detect unauthorized movement and glass breakage, providing immediate alerts to potential threats.",
    },
    {
      icon: Eye,
      title: "Video Analytics",
      description:
        "AI-powered video analysis that can identify suspicious behavior, count customers, and provide valuable business insights.",
    },
    {
      icon: Users,
      title: "Employee Management",
      description:
        "Comprehensive staff access management with individual codes, schedules, and detailed entry/exit logging for accountability.",
    },
  ]

  return (
    <section className="py-16 lg:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Business Security System Features
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive commercial security solutions designed to protect your business, employees, and assets with
            enterprise-grade technology and professional monitoring.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
                <feature.icon className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-gray-600 mb-6">
            All business security systems include professional installation, training, and ongoing support.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500">
            <span>✓ Free Business Consultation</span>
            <span>✓ Custom System Design</span>
            <span>✓ Professional Installation</span>
            <span>✓ Staff Training Included</span>
            <span>✓ 24/7 Technical Support</span>
          </div>
        </div>
      </div>
    </section>
  )
}
