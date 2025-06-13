import Link from "next/link"
import { ArrowRight, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function CustomerSupportSection() {
  return (
    <div className="bg-white p-8 md:p-10 rounded-lg shadow-md border border-gray-100">
      <div className="border-b border-gray-200 pb-6 mb-8 text-center">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">Have Questions Or Need Customer Support?</h2>
      </div>

      <p className="text-gray-600 mb-8 text-center text-lg">
        Our customer support team is ready to assist you with any questions or issues you may have with your KTS Home
        system.
      </p>

      <Button
        asChild
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-md transition-all mb-4"
      >
        <Link href="/help-center">
          Kts Help Center
          <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </Button>

      <div className="space-y-4 mt-8">
        <h3 className="text-lg font-medium text-gray-900 mb-4 text-center">Contact Support By Phone</h3>

        <Button
          variant="outline"
          className="w-full border-blue-600 text-blue-600 hover:bg-blue-50 font-medium justify-start"
        >
          <Phone className="mr-2 h-4 w-4" />
          <span className="mr-2">🇨🇦 CA:</span>
          <span>(587) 844-5377</span>
        </Button>


        <div className="mt-6 pt-6 border-t border-gray-200">
          <p className="text-sm text-gray-500 text-center">
            Our support team is available Monday through Friday from 8:00 AM to 8:00 PM MST, and Saturday from 9:00 AM
            to 5:00 PM MST.
          </p>
        </div>
      </div>
    </div>
  )
}
