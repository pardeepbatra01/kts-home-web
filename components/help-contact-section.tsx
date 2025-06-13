import Link from "next/link"
import { Mail, Rss, Facebook, Twitter } from "lucide-react"

export default function HelpContactSection() {
  return (
    <section className="bg-blue-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold mb-2">Can't find what you're looking for?</h2>
            <p className="text-blue-100">Our award-winning customer care team is here for you.</p>

            <Link
              href="/contact"
              className="inline-flex items-center mt-4 px-6 py-2 border border-white text-sm font-medium rounded-md text-white hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-900 focus:ring-white"
            >
              <Mail className="mr-2 h-4 w-4" />
              Contact Support
            </Link>
          </div>

          <div className="flex flex-col items-center">
            <div className="bg-white p-4 rounded-lg shadow-lg relative">
              <div className="flex space-x-2">
                <Link href="#" className="bg-orange-400 p-3 rounded hover:opacity-90">
                  <Rss className="h-6 w-6 text-white" />
                </Link>
                <Link href="#" className="bg-blue-600 p-3 rounded hover:opacity-90">
                  <Facebook className="h-6 w-6 text-white" />
                </Link>
                <Link href="#" className="bg-blue-400 p-3 rounded hover:opacity-90">
                  <Twitter className="h-6 w-6 text-white" />
                </Link>
              </div>
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white rotate-45"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
