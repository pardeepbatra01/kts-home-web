"use client"

import Link from "next/link"

export default function Header() {
  return (
    <header className="bg-slate-800 text-white py-2 px-4 content">
      <div className="max-w-7xl mx-auto flex justify-end items-center space-x-6 text-sm">
          <Link href={process.env.NEXT_PUBLIC_BASE_PATH ? `${process.env.NEXT_PUBLIC_BASE_PATH}/locations` : '/locations'} className="hover:text-blue-300 transition-colors">
            Locations
          </Link>
          <Link href={process.env.NEXT_PUBLIC_BASE_PATH ? `${process.env.NEXT_PUBLIC_BASE_PATH}/support` : '/support'} className="hover:text-blue-300 transition-colors">
            Support
          </Link>
          <Link href={process.env.NEXT_PUBLIC_BASE_PATH ? `${process.env.NEXT_PUBLIC_BASE_PATH}/help-center` : '/help-center'} className="hover:text-blue-300 transition-colors">
            Help Center
          </Link>
      </div>
    </header>
  )
}
