import Link from "next/link"
import { Facebook, Instagram } from "lucide-react"

export default function HelpCenterFooter() {
  return (
    <footer className="bg-gray-100 pt-8 pb-4">
      <div className="container mx-auto px-4">
        <div className="flex justify-center mb-6">
          <img src="logo.png" alt="Fluent Home" className="h-8 w-auto opacity-60" />
        </div>

        <div className="flex justify-center space-x-4 mb-6">
          <Link href="#" className="text-gray-500 hover:text-blue-600">
            <Facebook className="h-5 w-5" />
          </Link>
          <Link href="#" className="text-gray-500 hover:text-blue-600">
            <Instagram className="h-5 w-5" />
          </Link>
        </div>

        <div className="text-center text-sm text-gray-500">
          <p>Copyright Fluent© 2024, All Rights Reserved</p>
          <p className="mt-2">Knowledge Base Software powered by Helpdesk</p>
        </div>
      </div>
    </footer>
  )
}
