import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function GarageDoorFAQ() {
  const faqs = [
    {
      question: "How secure are smart garage door controllers compared to traditional remotes?",
      answer:
        "Our smart garage door controllers use bank-level encryption and secure authentication protocols, making them more secure than traditional remotes. They feature rolling codes, activity logs, and the ability to revoke access instantly if needed.",
    },
    {
      question: "What happens if my internet connection goes down?",
      answer:
        "The smart garage door controller has local backup functionality and battery backup power. You can still operate the door manually, and the system will sync all activity once internet connection is restored. Basic functionality remains available even offline.",
    },
    {
      question: "Can I still use my existing garage door remote?",
      answer:
        "Yes, our smart controller works alongside your existing garage door opener and remotes. You can use both smart features and traditional remotes simultaneously, giving you multiple ways to access your garage.",
    },
    {
      question: "How do I know if my garage door opener is compatible?",
      answer:
        "Our smart controllers are compatible with most garage door openers manufactured after 1993. During your free consultation, our technicians will assess your current system and confirm compatibility before installation.",
    },
  ]

  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-slate-800 mb-4 lg:mb-6">
            Frequently Asked Questions About Smart Garage Door Control
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
