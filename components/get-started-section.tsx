import { Button } from "@/components/ui/button"
import { Phone, MessageCircle, Calendar } from "lucide-react"

export default function GetStartedSection() {
  const steps = [
    {
      icon: MessageCircle,
      title: "Choose a free consultation",
      description: "Schedule an in-home consultation to design your perfect smart home system.",
    },
    {
      icon: Calendar,
      title: "Schedule the KTS Home App",
      description: "Book your professional installation and start enjoying your smart home.",
    },
    {
      icon: Phone,
      title: "Call for a Quote",
      description: "Speak with our experts to discuss your smart home needs and get a custom quote.",
    },
   
   
  ]

  return (
    <section className="py-20 bg-blue-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-6">
            How to Get Started With Our State-Of-The-Art KTS Home Automation Technology
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {steps.map((step, index) => (
            <div key={index} className="text-center space-y-6">
              <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto">
                <step.icon className="w-10 h-10 text-white" />
              </div>

              <h3 className="text-xl font-bold text-slate-800">{step.title}</h3>

              <p className="text-slate-600 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg">Get Started Today</Button>
        </div>
      </div>
    </section>
  )
}
