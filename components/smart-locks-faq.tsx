import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function SmartLocksFAQ() {
  const faqs = [
    {
      question: "How secure are smart door locks compared to traditional locks?",
      answer:
        "Our smart locks use military-grade encryption and are ANSI Grade 1 certified, making them more secure than traditional locks. They feature tamper alerts, auto-lock functionality, and detailed access logs that provide superior security monitoring.",
    },
    {
      question: "What happens if my smartphone battery dies or I lose my phone?",
      answer:
        "Every smart lock includes multiple backup access methods including physical keys, backup PIN codes, and family member access through the app. You'll never be locked out of your home due to phone issues.",
    },
    {
      question: "Can I still use regular keys with a smart door lock?",
      answer:
        "Yes, all our smart locks maintain traditional key functionality as a backup. You can use both smart features and physical keys, giving you the best of both worlds for maximum convenience and security.",
    },
    {
      question: "How long does the battery last and how do I know when to replace it?",
      answer:
        "Our smart lock batteries typically last 8-12 months with normal use. The app will notify you when battery levels are low (usually 2-3 months before replacement is needed), and there's also a low battery indicator on the lock itself.",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-6">
            Frequently Asked Questions About Smart Door Locks
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
