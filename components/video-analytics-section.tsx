import Image from "next/image"
import { Brain, Camera, Shield } from "lucide-react"

export default function VideoAnalyticsSection() {
  return (
    <section className="py-20 bg-blue-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 leading-tight">
              Create a first line of defense using AI and Video Analytics
            </h2>

            <p className="text-lg text-slate-600 leading-relaxed">
              Advanced artificial intelligence analyzes video feeds in real-time to distinguish between normal activity
              and potential threats. Our smart system learns your property's patterns and only alerts you when something
              truly suspicious occurs.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Brain className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-semibold text-slate-800 mb-2">AI Learning</h4>
                <p className="text-sm text-slate-600">Adapts to your property's unique patterns</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Camera className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-semibold text-slate-800 mb-2">Smart Detection</h4>
                <p className="text-sm text-slate-600">Identifies real threats vs. false alarms</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-semibold text-slate-800 mb-2">Proactive Defense</h4>
                <p className="text-sm text-slate-600">Prevents crimes before they happen</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <Image
              src="personDetected.webp"
              alt="AI video analytics in action"
              width={600}
              height={500}
              className="w-full h-auto rounded-lg"
            />

           
          </div>
        </div>
      </div>
    </section>
  )
}
