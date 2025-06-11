import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function ThermostatFAQ() {
  const faqs = [
    {
      question: "Can I Replace My Old Thermostat with a Smart Thermostat?",
      answer:
        "Yes, most homes can upgrade to a smart thermostat. Our professional technicians will assess your current HVAC system and wiring during installation to ensure compatibility. We handle all the technical details to make the upgrade seamless.",
    },
    {
      question: "What are the Benefits of a Smart Thermostat?",
      answer:
        "Smart thermostats offer numerous benefits including energy savings of up to 23%, remote control via smartphone, learning your schedule automatically, integration with other smart home devices, and detailed energy usage reports to help optimize your comfort and costs.",
    },
    {
      question: "How Much Money Can a Smart Thermostat Save Me?",
      answer:
        "On average, homeowners save 10-23% on their heating and cooling costs with a smart thermostat. The exact savings depend on your current usage patterns, home size, and local energy rates. Many customers see the thermostat pay for itself within 1-2 years.",
    },
    {
      question: "Do Smart Thermostats Work with All HVAC Systems?",
      answer:
        "Our smart thermostats are compatible with most residential HVAC systems including gas, oil, electric, heat pumps, and multi-stage systems. During your free consultation, our technicians will verify compatibility and recommend the best model for your specific system.",
    },
  ]

  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-slate-800 mb-4 lg:mb-6">
            Frequently Asked Questions About Smart Home Thermostat
          </h2>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border border-slate-200 rounded-lg px-4 lg:px-6"
            >
              <AccordionTrigger className="text-left font-semibold text-slate-800 hover:text-blue-600 text-sm lg:text-base">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-slate-600 leading-relaxed text-sm lg:text-base">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
