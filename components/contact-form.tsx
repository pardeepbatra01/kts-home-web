"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function ContactForm() {
  return (
    <section id="contact-form" className="bg-[#1B2634] py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto items-center">
          <div className="text-left">
            <h2 className="text-3xl font-bold text-white mb-2">
              Start building your smart home system today!
            </h2>
            <p className="text-sm text-gray-300">
              or Call 855-438-6500 for a FREE custom quote.
            </p>
          </div>
          
          <div className="bg-white rounded-lg p-6 shadow-lg w-full">
            <form className="space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <Input
                    type="text"
                    placeholder="First Name*"
                    className="w-full h-9 px-3 text-sm border border-gray-200 rounded focus:border-blue-500 focus:ring-0"
                  />
                </div>
                <div>
                  <Input
                    type="text"
                    placeholder="Last Name*"
                    className="w-full h-9 px-3 text-sm border border-gray-200 rounded focus:border-blue-500 focus:ring-0"
                  />
                </div>
              </div>
              
              <Input
                type="email"
                placeholder="Email Address*"
                className="w-full h-9 px-3 text-sm border border-gray-200 rounded focus:border-blue-500 focus:ring-0"
              />
              
              <Input
                type="tel"
                placeholder="Phone Number*"
                className="w-full h-9 px-3 text-sm border border-gray-200 rounded focus:border-blue-500 focus:ring-0"
              />
              
              <Button
                type="submit"
                className="w-full bg-[#2563EB] hover:bg-blue-600 text-white py-2 rounded text-sm font-medium transition-colors"
              >
                Start Your Quote
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
