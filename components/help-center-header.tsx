"use client"
import Link from "next/link"
import { ChevronDown } from "lucide-react"
import { useState } from "react"

export default function HelpCenterHeader() {
  const [isLanguageOpen, setIsLanguageOpen] = useState(false)

  return (
    <header className="bg-white py-4 shadow-sm">
      <div className="container mx-auto flex items-center justify-between px-4">
        <Link href="/" className="flex items-center">
          <img src="logo.png" alt="Fluent Home" className="h-10 w-auto" />
        </Link>

        <div className="flex items-center space-x-6">
          <Link href="/help-center" className="text-sm font-medium text-gray-700 hover:text-blue-600">
            Support Home
          </Link>

          <Link href="/contact" className="text-sm font-medium text-gray-700 hover:text-blue-600">
            Contact Us
          </Link>

          <div className="relative">
            <button
              className="flex items-center space-x-1 text-sm font-medium text-gray-700 hover:text-blue-600"
              onClick={() => setIsLanguageOpen(!isLanguageOpen)}
            >
              <span>English</span>
              <ChevronDown className="h-4 w-4" />
            </button>

            {isLanguageOpen && (
              <div className="absolute right-0 mt-2 w-40 rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5">
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">
                  English
                </a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">
                  Français
                </a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">
                  Español
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}
