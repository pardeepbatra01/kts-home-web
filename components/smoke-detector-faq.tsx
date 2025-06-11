import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function SmokeDetectorFAQ() {
  const faqs = [
    {
      question: "What is a Smart Smoke Detector and How Does it Work?",
      answer:
        "A smart smoke detector uses advanced dual-sensor technology (photoelectric and ionization) to detect different types of fires. It connects to your home's Wi-Fi network to send instant alerts to your smartphone and our 24/7 monitoring center when smoke is detected, enabling faster emergency response.",
    },
    {
      question: "How do Smart Smoke Detectors Prevent False Alarms?",
      answer:
        "Our smart smoke detectors use advanced algorithms and dual-sensor technology to distinguish between actual fire threats and common false alarm triggers like cooking smoke or steam. The system analyzes multiple data points before triggering an alarm, significantly reducing false alarms while maintaining sensitivity to real fires.",
    },
    {
      question: "Where is The Best Place to Install Smoke Detectors?",
      answer:
        "Install smoke detectors on every level of your home, inside each bedroom, outside sleeping areas, and in hallways. Avoid kitchens, bathrooms, and areas with high humidity. Mount them on ceilings or high on walls, at least 4 inches from corners. Our professional installation team ensures optimal placement for maximum coverage.",
    },
    {
      question: "How Often Should Smoke Detector Batteries Be Replaced?",
      answer:
        "Our smart smoke detectors feature long-life lithium batteries that typically last 5-10 years. The system automatically monitors battery levels and sends low-battery alerts to your smartphone well before replacement is needed. Professional monitoring also tracks battery status to ensure continuous protection.",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-6">
            Frequently Asked Questions About Smart Smoke Detectors
          </h2>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border border-slate-200 rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold text-slate-800 hover:text-blue-600">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-slate-600 leading-relaxed">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
