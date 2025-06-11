import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function SmartLocksHero() {
  return (
    <section className="relative bg-gradient-to-br from-blue-600 to-blue-800 py-20 lg:py-32 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="home-automation-with-device.jpg"
          alt="Modern home entrance with smart door lock"
          width={1600}
          height={800}
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 to-blue-800/80"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <div className="space-y-8 text-white">
            <div className="inline-block">
              <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wide">
                SMART ACCESS
              </span>
            </div>

            <h1 className="text-4xl lg:text-6xl font-bold leading-tight">Secure & convenient smart door locks</h1>

            <p className="text-xl text-blue-100 leading-relaxed max-w-xl">
              Control access to your home from anywhere in the world. Grant temporary access, monitor entry logs, and
              never worry about lost keys again with our advanced smart lock technology.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 text-lg font-semibold">
                Shop Smart Locks
              </Button>
              <Button className="bg-blue-500 hover:bg-blue-400 text-white px-8 py-3 text-lg">Learn More</Button>
            </div>
          </div>

          {/* Person at door image */}
          <div className="relative">
            <Image
              src="home-automation-with-device.jpg"
              alt="Person using smart door lock"
              width={400}
              height={500}
              className="w-full max-w-md mx-auto h-auto rounded-lg"
            />

            {/* Access granted overlay */}
            <div className="absolute top-8 right-8 bg-white rounded-lg shadow-xl p-4">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <div>
                  <div className="font-semibold text-slate-800 text-sm">Access Granted</div>
                  <div className="text-xs text-slate-600">Welcome home!</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
