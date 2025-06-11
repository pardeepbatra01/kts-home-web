import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function IndoorCameraFAQ() {
  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-slate-800 mb-4">
            Frequently Asked Questions About Indoor Security Cameras
          </h2>
          <p className="text-lg text-slate-600">
            Get answers to common questions about our indoor camera systems and features.
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          <AccordionItem value="item-1" className="border border-slate-200 rounded-lg px-6">
            <AccordionTrigger className="text-left font-semibold text-slate-800 hover:text-blue-600">
              How do I set up Fluent Indoor Security Cameras?
            </AccordionTrigger>
            <AccordionContent className="text-slate-600 pt-4">
              Our certified technicians provide professional installation and setup of your indoor cameras. The process
              typically takes 1-2 hours and includes camera placement, Wi-Fi connection, mobile app configuration, and
              testing of all features. We also provide a complete walkthrough of how to use your new system.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2" className="border border-slate-200 rounded-lg px-6">
            <AccordionTrigger className="text-left font-semibold text-slate-800 hover:text-blue-600">
              Can I access my indoor cameras when I'm away from home?
            </AccordionTrigger>
            <AccordionContent className="text-slate-600 pt-4">
              Yes! Our mobile app allows you to view live feeds, receive alerts, and control your indoor cameras from
              anywhere with an internet connection. You can monitor your home while at work, traveling, or anywhere
              else. The app works on both iOS and Android devices.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3" className="border border-slate-200 rounded-lg px-6">
            <AccordionTrigger className="text-left font-semibold text-slate-800 hover:text-blue-600">
              How does the privacy mode work on indoor cameras?
            </AccordionTrigger>
            <AccordionContent className="text-slate-600 pt-4">
              Privacy mode allows you to disable recording and live viewing when you're home. You can activate it
              manually through the app or set it to automatically enable based on your location using geofencing. When
              privacy mode is active, the camera lens physically covers itself and all recording stops.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4" className="border border-slate-200 rounded-lg px-6">
            <AccordionTrigger className="text-left font-semibold text-slate-800 hover:text-blue-600">
              What's the video quality and night vision range?
            </AccordionTrigger>
            <AccordionContent className="text-slate-600 pt-4">
              Our indoor cameras record in full 1080p HD resolution for crystal-clear video quality. The advanced night
              vision technology provides clear visibility up to 25 feet in complete darkness using infrared LEDs. The
              cameras automatically switch between day and night modes based on lighting conditions.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5" className="border border-slate-200 rounded-lg px-6">
            <AccordionTrigger className="text-left font-semibold text-slate-800 hover:text-blue-600">
              How does the AI person detection work?
            </AccordionTrigger>
            <AccordionContent className="text-slate-600 pt-4">
              Our AI-powered person detection uses advanced algorithms to distinguish between people, pets, and other
              moving objects. This reduces false alerts from pets, shadows, or other non-threatening movements. You'll
              only receive notifications for actual human activity, making your alerts more meaningful and actionable.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-6" className="border border-slate-200 rounded-lg px-6">
            <AccordionTrigger className="text-left font-semibold text-slate-800 hover:text-blue-600">
              Is cloud storage included with indoor cameras?
            </AccordionTrigger>
            <AccordionContent className="text-slate-600 pt-4">
              Yes! All Fluent indoor cameras include secure cloud storage for your recorded footage. Videos are
              encrypted and stored safely in the cloud, accessible through your mobile app or web portal. You can view,
              download, and share recordings as needed. Storage duration varies by plan, with options for extended
              retention.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  )
}
