"use client"

import { useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <html>
      <body>
        <div className="min-h-screen flex flex-col items-center justify-center px-4 py-16">
          <div className="text-center">
            <h1 className="text-[150px] md:text-[200px] font-bold text-blue-600 leading-tight">404</h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8">Something went wrong!</p>
            <div className="flex gap-4 justify-center">
              <Button
                onClick={() => reset()}
                className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-6 rounded-md text-lg flex items-center gap-2 transition-all hover:scale-105"
              >
                Try again
              </Button>
              <Link href="/">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-6 rounded-md text-lg flex items-center gap-2 transition-all hover:scale-105">
                  Go To Home Page <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </body>
    </html>
  )
}
