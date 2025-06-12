import { Shield, CreditCard, Users, Key, Smartphone, Activity, Lock, FileText } from "lucide-react"

export default function AccessControlFeatures() {
  const features = [
    {
      icon: Shield,
      title: "Permission-Based Security",
      description:
        "Grant specific access permissions to different employees based on their role and security clearance level.",
    },
    {
      icon: CreditCard,
      title: "Keycard Authentication",
      description:
        "Modern keycard systems with encrypted technology for secure and convenient employee access control.",
    },
    {
      icon: Users,
      title: "Multi-Location Access",
      description: "Manage access control across multiple business locations from a centralized management system.",
    },
    {
      icon: Key,
      title: "Secure Access Codes",
      description:
        "Individual PIN codes for each employee with the ability to easily update or revoke access as needed.",
    },
    {
      icon: Smartphone,
      title: "Mobile Access Control",
      description:
        "Remote management capabilities allowing you to control access permissions from anywhere using your mobile device.",
    },
    {
      icon: Activity,
      title: "Real-Time Monitoring",
      description: "Live monitoring of all access events with instant notifications for unauthorized access attempts.",
    },
    {
      icon: Lock,
      title: "Automatic Door Locking",
      description:
        "Automated locking systems that secure doors immediately after authorized access for maximum security.",
    },
    {
      icon: FileText,
      title: "Detailed Access Reports",
      description:
        "Comprehensive reporting system that tracks all access events with timestamps and user identification.",
    },
  ]

  return (
    <section className="py-16 lg:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Enhance Security with Access Control
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive access control solutions that provide security, convenience, and complete visibility into who
            enters your business premises and when.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-gray-600 mb-6">
            All access control systems include professional installation, employee training, and ongoing support.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500">
            <span>✓ Custom Access Levels</span>
            <span>✓ Biometric Options</span>
            <span>✓ Integration Ready</span>
            <span>✓ 24/7 Monitoring</span>
            <span>✓ Mobile Management</span>
          </div>
        </div>
      </div>
    </section>
  )
}
