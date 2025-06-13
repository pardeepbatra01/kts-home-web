import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function CustomerLoginSection() {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
      <div className="border-b border-gray-200 pb-4 mb-6">
        <h2 className="text-2xl font-semibold text-gray-900">Are You An Existing Customer?</h2>
      </div>

      <p className="text-gray-600 mb-8">
        Access your Fluent Home account to manage your security system, view activity, update settings, and more.
      </p>

      <Button
        asChild
        className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-md transition-all"
      >
        <Link href="https://fluent.alarm.com/login" target="_blank" rel="noopener noreferrer">
          My Fluent Login
          <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </Button>

      <div className="mt-8 pt-6 border-t border-gray-200">
        <h3 className="text-lg font-medium text-gray-900 mb-4">First Time Logging In?</h3>
        <p className="text-gray-600 mb-4">
          If this is your first time accessing your account, you'll need to set up your login credentials.
        </p>
        <Button variant="outline" asChild className="border-blue-600 text-blue-600 hover:bg-blue-50 font-medium">
          <Link href="https://fluent.alarm.com/login/signup" target="_blank" rel="noopener noreferrer">
            Create Account
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  )
}
