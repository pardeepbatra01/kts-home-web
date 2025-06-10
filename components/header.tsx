"use client"

import Link from "next/link"

export default function Header() {
  return (
    <header className="bg-slate-800 text-white py-2 px-4 content">
      <div className="max-w-7xl mx-auto flex justify-end items-center space-x-6 text-sm">
          <Link href="/locations" className="hover:text-blue-300 transition-colors">
            Locations
          </Link>
          <Link href="/support" className="hover:text-blue-300 transition-colors">
            Support
          </Link>
          <Link href="/help" className="hover:text-blue-300 transition-colors">
            Help Center
          </Link>
      </div>
    </header>
  )
}
