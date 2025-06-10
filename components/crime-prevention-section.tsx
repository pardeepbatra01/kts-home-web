import Image from "next/image"

export default function CrimePreventionSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-6">
            Stopping crime in its tracks before it even begins
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Our proactive security system doesn't just record crimes - it prevents them. Advanced AI detection combined
            with immediate response capabilities keeps your property safe.
          </p>
        </div>

        <div className="relative">
        <video
            width="100%"
            height="auto"
            controls
            autoPlay
            muted
            playsInline
            className="w-full h-auto rounded-xl shadow-2xl"
          >
            <source
              src="https://www.fluenthome.com/wp-content/uploads/2024/10/Co-branded-Video-Alarm.com_Video-Monitoring-opt.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  )
}
