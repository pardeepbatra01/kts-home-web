import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function CommercialSecurityFaq() {
  const faqs = [
    {
      question: "Why Is A Security System Important For My Business?",
      answer:
        "A commercial security system protects your business assets, employees, and customers while reducing theft, vandalism, and liability risks. It can also lower insurance premiums and provide valuable business insights through video analytics.",
    },
    {
      question: "How Does A Business Security System Cost?",
      answer:
        "Commercial security system costs vary based on business size, number of entry points, camera requirements, and monitoring services. We offer customized quotes with flexible financing options to fit your business budget.",
    },
    {
      question: "How Do You Install Commercial Security Systems?",
      answer:
        "Our certified technicians perform professional installation with minimal business disruption. We schedule installations during off-hours when possible and provide comprehensive staff training on system operation.",
    },
    {
      question: "How Does A Business Security System Work?",
      answer:
        "Commercial security systems integrate cameras, sensors, access control, and monitoring services. When triggered, the system sends alerts to you and our monitoring center, which can dispatch emergency services if needed.",
    },
    {
      question: "Can I Monitor Multiple Business Locations?",
      answer:
        "Yes, our commercial security platform allows you to monitor multiple business locations from a single dashboard. You can view all cameras, manage access control, and receive alerts for all your properties in one place.",
    },
  ]

  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Frequently Asked Questions About Commercial Security Systems
          </h2>
          <p className="text-xl text-gray-600">
            Get answers to common questions about business security systems, installation, and monitoring services.
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border border-gray-200 rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold text-gray-900 hover:text-blue-600">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="text-center mt-12">
          <p className="text-lg text-gray-600 mb-6">Still have questions about commercial security systems?</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:1-855-GET-FLUENT"
              className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Call Business Sales: 1-855-GET-KTS
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
            >
              Schedule Free Consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
