import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function SmartSwitchesFAQ() {
  const faqs = [
    {
      question: "Do smart switches work with my existing wiring?",
      answer:
        "Most smart switches are designed to work with standard residential wiring. Our professional electricians will assess your current wiring during installation to ensure compatibility and safe operation. Some older homes may require minor electrical updates.",
    },
    {
      question: "Can I install smart switches myself or do I need an electrician?",
      answer:
        "While some homeowners can install smart switches themselves, we strongly recommend professional installation for safety and warranty purposes. Our certified electricians ensure proper wiring, grounding, and integration with your smart home system.",
    },
    {
      question: "Will smart switches work if my internet goes down?",
      answer:
        "Yes, smart switches retain basic on/off functionality even without internet. You can still control them manually at the switch. Once internet connection is restored, all smart features like remote control, scheduling, and automation will resume working.",
    },
    {
      question: "Do smart switches work with dimmer lights and ceiling fans?",
      answer:
        "Yes, we offer different types of smart switches including dimmer switches for lights and fan control switches for ceiling fans. Our technicians will recommend the appropriate switch type based on your specific lighting and fan requirements.",
    },
  ]

  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-slate-800 mb-4 lg:mb-6">
            Frequently Asked Questions About Smart Switches
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
