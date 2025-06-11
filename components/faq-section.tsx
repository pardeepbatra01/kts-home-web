import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function FAQSection() {
  const faqs = [
    {
      question: "What is a Control Panel in a Home Security System?",
      answer:
        "A control panel is the central hub of your smart home security system. It's where all your devices connect and communicate, allowing you to monitor and control your entire home from one location.",
    },
    {
      question: "How do Home Security System Control Panels Work?",
      answer:
        "Control panels receive signals from all connected devices like sensors, cameras, and smart locks. They process this information and can trigger alerts, activate automation, or send notifications to your mobile device.",
    },
    {
      question: "Where is The Best Place to Put The Home Security Panel?",
      answer:
        "The best location is typically near your main entrance, in a central location that's easily accessible but not immediately visible to visitors. Common locations include hallways, kitchens, or near the garage entrance.",
    },
    {
      question: "Does My Home Security Control Panel Need To Be Hardwired?",
      answer:
        "While hardwired panels offer the most reliable connection, modern wireless panels with battery backup provide excellent reliability and are easier to install. Our technicians will recommend the best option for your home.",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-6">
            Frequently Asked Questions About Smart Home Control Panel
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
