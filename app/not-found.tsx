import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Footer from "@/components/footer"

export default function NotFound() {
  return (
    <>
      <div className="min-h-[60vh] flex flex-col items-center justify-center px-4 py-16">
        <div className="text-center">
          <h1 className="text-[150px] md:text-[200px] font-bold text-blue-600 leading-tight">404</h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8">The page you were looking for does not exist</p>
          <div className="flex justify-center">
            <Link href="/">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-6 rounded-md text-lg flex items-center gap-2 transition-all hover:scale-105">
                Go To Home Page <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
