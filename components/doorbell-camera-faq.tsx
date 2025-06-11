import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function DoorbellCameraFAQ() {
  const faqs = [
    {
      question: "How is a Smart Doorbell Camera different from a regular doorbell?",
      answer:
        "A smart doorbell camera combines a traditional doorbell with HD video recording, two-way audio, motion detection, and smartphone connectivity. Unlike regular doorbells, you can see, hear, and speak to visitors remotely, receive instant alerts, and record all activity for security purposes.",
    },
    {
      question: "Do I need existing doorbell wiring to install a smart doorbell camera?",
      answer:
        "While hardwired installation provides the most reliable power, many of our smart doorbell cameras also offer battery-powered options. Our professional technicians will assess your current setup and recommend the best installation method for your home during the free consultation.",
    },
    {
      question: "Can I access my doorbell camera when I'm away from home?",
      answer:
        "Yes, you can access your doorbell camera from anywhere in the world using our mobile app. As long as you have an internet connection, you can view live video, receive alerts, communicate with visitors, and review recorded footage remotely.",
    },
    {
      question: "How long is video footage stored and where is it kept?",
      answer:
        "Video footage is stored both in the cloud and locally. Cloud storage includes 30 days of history with our standard plan, and you can also use local SD card storage as backup. All cloud data is encrypted and securely stored on our protected servers.",
    },
  ]

  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-slate-800 mb-4 lg:mb-6">
            Frequently Asked Questions About Smart Doorbell Cameras
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
