import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function OutdoorCameraFAQ() {
  const faqs = [
    {
      question: "How do Outdoor Security Cameras work in all weather conditions?",
      answer:
        "Our outdoor cameras are built with IP67 weatherproof rating, meaning they're completely protected against dust and can withstand heavy rain, snow, and extreme temperatures from -4°F to 140°F. The cameras feature advanced image sensors that automatically adjust for optimal performance in all lighting and weather conditions.",
    },
    {
      question: "What's the difference between wired and wireless outdoor cameras?",
      answer:
        "Wired cameras connect via Ethernet cable (PoE) providing the most reliable connection and continuous power, ideal for permanent installations. Wireless cameras connect via Wi-Fi and can be battery or solar powered, offering more flexible placement options. Our technicians will recommend the best option based on your property layout and needs.",
    },
    {
      question: "How far can outdoor security cameras see at night?",
      answer:
        "Our outdoor cameras feature advanced color night vision technology that can clearly see up to 30 feet in complete darkness. The cameras automatically switch between color and infrared modes based on lighting conditions to provide the clearest possible image quality 24/7.",
    },
    {
      question: "Can outdoor cameras integrate with my existing smart home system?",
      answer:
        "Yes, our outdoor cameras seamlessly integrate with most smart home platforms including Alexa, Google Assistant, and existing security systems. You can set up automation rules, receive alerts on multiple devices, and coordinate with other smart home devices like lights and door locks for comprehensive security.",
    },
  ]

  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-slate-800 mb-4 lg:mb-6">
            Frequently Asked Questions About Outdoor Security Cameras
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
