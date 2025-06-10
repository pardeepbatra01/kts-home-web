import Image from "next/image"
import { Smartphone, Shield, Bell, Eye } from "lucide-react"

export default function MobileAppSection() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 leading-tight">
              Handle every aspect of your home security through one connected app
            </h2>

            <p className="text-lg text-slate-600 leading-relaxed">
              Monitor, control, and customize your entire security system from anywhere. Get instant alerts, view live
              feeds, and manage all your smart home devices with our intuitive mobile app.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Shield className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800">Real-time Monitoring</h4>
                  <p className="text-sm text-slate-600">24/7 system status</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Bell className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800">Instant Alerts</h4>
                  <p className="text-sm text-slate-600">Immediate notifications</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Eye className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800">Live Video</h4>
                  <p className="text-sm text-slate-600">HD streaming</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Smartphone className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800">Remote Control</h4>
                  <p className="text-sm text-slate-600">Full system access</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <Image
              src="/Multiple-Layers-2.webp"
              alt="Mobile app interface showing security controls"
              width={400}
              height={600}
              className="w-full max-w-sm mx-auto h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
