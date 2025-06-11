import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function SmartConvenienceSection() {
  return (
    <section className="py-20 bg-slate-800 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <div className="space-y-8">
            <h2 className="text-4xl lg:text-5xl font-bold leading-tight">More convenience. Enhanced security.</h2>

            <p className="text-xl text-slate-300 leading-relaxed">
              Experience the perfect blend of convenience and security with our smart door locks. Control access
              remotely, monitor entry activity, and enjoy peace of mind knowing your home is always protected.
            </p>

            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold text-sm">1</span>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Remote Access Control</h4>
                  <p className="text-slate-300">Lock or unlock your door from anywhere using your smartphone</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold text-sm">2</span>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Guest Access Management</h4>
                  <p className="text-slate-300">Create temporary access codes for visitors and service providers</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold text-sm">3</span>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Activity Monitoring</h4>
                  <p className="text-slate-300">Receive notifications and view logs of all door activity</p>
                </div>
              </div>
            </div>

            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">Get Your Smart Lock</Button>
          </div>

          {/* Smartphone control image */}
          <div className="relative">
            <Image
              src="person-using-smartphone-his-automated-home.jpg"
              alt="Hand using smartphone to control smart lock"
              width={400}
              height={500}
              className="w-full max-w-md mx-auto h-auto rounded-lg"
            />

            {/* Control overlay */}
            <div className="absolute bottom-8 left-8 bg-white text-slate-800 rounded-lg shadow-xl p-4">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                <div>
                  <div className="font-semibold text-sm">Door Unlocked</div>
                  <div className="text-xs text-slate-600">Via mobile app</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
