import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function CarbonMonoxideFAQ() {
  const faqs = [
    {
      question: "What is a Carbon Monoxide Detector?",
      answer:
        "A carbon monoxide detector is a safety device that monitors the air for dangerous levels of carbon monoxide (CO), a colorless, odorless gas that can be deadly. Our smart detectors provide continuous monitoring and instant alerts to your smartphone and our monitoring center.",
    },
    {
      question: "How do Smart Carbon Monoxide Detectors Work?",
      answer:
        "Smart CO detectors use advanced electrochemical sensors to detect carbon monoxide levels in the air. When dangerous levels are detected, the device immediately sends alerts to your smartphone, sounds a local alarm, and notifies our 24/7 monitoring center for emergency response coordination.",
    },
    {
      question: "What is The Best Way to Prevent Carbon Monoxide?",
      answer:
        "Prevention includes regular maintenance of fuel-burning appliances, proper ventilation, never using generators or grills indoors, and installing quality CO detectors. Our smart detectors provide an additional layer of protection with professional monitoring and immediate emergency response.",
    },
    {
      question: "Where is The Best Place To Put A Carbon Monoxide Detector?",
      answer:
        "Install CO detectors on every level of your home, especially near sleeping areas and fuel-burning appliances. Avoid placing them in garages, kitchens, or areas with high humidity. Our professional installation team will determine optimal placement for maximum protection.",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-6">
            Frequently Asked Questions About Carbon Monoxide Detector
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
