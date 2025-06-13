"use client"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function FaqAccordion() {
  return (
    <div className="max-w-3xl mx-auto">
      <Accordion type="single" collapsible className="w-full space-y-4">
        <AccordionItem value="item-1" className="border rounded-lg border-gray-200 px-4">
          <AccordionTrigger className="text-left font-medium text-lg hover:text-blue-600">
            I'm Moving. May I Take My System With Me?
          </AccordionTrigger>
          <AccordionContent className="text-gray-700">
            Yes, Kts Home offers a moving program for customers in good standing. Contact our customer service team
            at least 30 days before your move, and we'll help coordinate the transfer of your system to your new home.
            Additional equipment may be required depending on the size and layout of your new residence.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2" className="border rounded-lg border-gray-200 px-4">
          <AccordionTrigger className="text-left font-medium text-lg hover:text-blue-600">
            Which Areas Do You Service?
          </AccordionTrigger>
          <AccordionContent className="text-gray-700">
            KTS Home provides services across Alberta, Canada. Our coverage includes major cities and surrounding regions
            throughout the province. For specific information about service in your area, please visit our Locations page
            or contact our customer service team.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3" className="border rounded-lg border-gray-200 px-4">
          <AccordionTrigger className="text-left font-medium text-lg hover:text-blue-600">
            Where Are You Located?
          </AccordionTrigger>
          <AccordionContent className="text-gray-700">
            KTS Home is headquartered in Calgary, Alberta. We have regional offices throughout Alberta to better serve
            our customers and provide prompt, reliable service to all our service areas.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-4" className="border rounded-lg border-gray-200 px-4">
          <AccordionTrigger className="text-left font-medium text-lg hover:text-blue-600">
            What Hours Is Your Call Center Open?
          </AccordionTrigger>
          <AccordionContent className="text-gray-700">
            Our monitoring center operates 24/7/365 for emergency response. For customer service inquiries, our
            representatives are available Monday through Friday from 8:00 AM to 9:00 PM, and Saturday from 9:00 AM to
            5:00 PM (local time). Technical support is available 24/7 for urgent system issues.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-5" className="border rounded-lg border-gray-200 px-4">
          <AccordionTrigger className="text-left font-medium text-lg hover:text-blue-600">
            My System Is Having Problems, What Can I Do?
          </AccordionTrigger>
          <AccordionContent className="text-gray-700">
            If you're experiencing issues with your system, first check that all components have power and that your
            control panel is connected. Many common issues can be resolved by rebooting your system. For persistent
            problems, contact our technical support team, who can remotely diagnose many issues or schedule a service
            appointment if necessary.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-6" className="border rounded-lg border-gray-200 px-4">
          <AccordionTrigger className="text-left font-medium text-lg hover:text-blue-600">
            May I Cancel My Agreement?
          </AccordionTrigger>
          <AccordionContent className="text-gray-700">
            Your service agreement outlines the terms and conditions for cancellation. Typically, you may cancel within
            the first 30 days for a full refund. After this period, cancellation may involve an early termination fee
            based on the remaining term of your agreement. Please contact our customer service team to discuss your
            specific situation.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-7" className="border rounded-lg border-gray-200 px-4">
          <AccordionTrigger className="text-left font-medium text-lg hover:text-blue-600">
            Does The System Come With A Warranty?
          </AccordionTrigger>
          <AccordionContent className="text-gray-700">
            Yes, all Kts Home equipment comes with a manufacturer's warranty. Additionally, customers with our
            premium service plans receive extended equipment warranties and service guarantees. The specific warranty
            terms depend on your service plan and equipment package.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-8" className="border rounded-lg border-gray-200 px-4">
          <AccordionTrigger className="text-left font-medium text-lg hover:text-blue-600">
            How Do I Download The Mobile App?
          </AccordionTrigger>
          <AccordionContent className="text-gray-700">
            The Kts Home mobile app is available for both iOS and Android devices. You can download it from the Apple
            App Store or Google Play Store by searching for "Kts Home." After installation, log in using the
            credentials provided during your system setup or account creation.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-9" className="border rounded-lg border-gray-200 px-4">
          <AccordionTrigger className="text-left font-medium text-lg hover:text-blue-600">
            May I Get A Discount On My Homeowner's Insurance?
          </AccordionTrigger>
          <AccordionContent className="text-gray-700">
            Many insurance companies offer discounts for homes with monitored security systems. The discount amount
            varies by provider, but typically ranges from 5% to 20%. We can provide you with a certificate of monitoring
            that you can submit to your insurance company to qualify for these discounts.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-10" className="border rounded-lg border-gray-200 px-4">
          <AccordionTrigger className="text-left font-medium text-lg hover:text-blue-600">
            May I Change My Billing Date?
          </AccordionTrigger>
          <AccordionContent className="text-gray-700">
            Yes, you can request a change to your billing date by contacting our customer service team. We typically
            allow one billing date change per year to accommodate our customers' financial schedules. Please note that
            changing your billing date may result in a prorated charge or credit for the transition period.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-11" className="border rounded-lg border-gray-200 px-4">
          <AccordionTrigger className="text-left font-medium text-lg hover:text-blue-600">
            Do I Need A Permit For My Alarm System?
          </AccordionTrigger>
          <AccordionContent className="text-gray-700">
            Permit requirements vary by location. Many municipalities require alarm permits for monitored security
            systems to manage emergency response resources. During your system installation, our team will inform you of
            local requirements and can often assist with the permit application process. Failure to obtain required
            permits may result in fines for false alarms.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-12" className="border rounded-lg border-gray-200 px-4">
          <AccordionTrigger className="text-left font-medium text-lg hover:text-blue-600">
            Does Kts Home Have A Special Military Policy?
          </AccordionTrigger>
          <AccordionContent className="text-gray-700">
            Yes, Kts Home offers special considerations for active military personnel, including deployment policies
            and military discount programs. We understand the unique circumstances of military service and provide
            flexible options for system monitoring during deployments. Please contact our customer service team for
            details about our military policies.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}
