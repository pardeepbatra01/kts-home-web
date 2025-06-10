import Image from "next/image"

export default function AITechnologySection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-6">
            AI Enhanced Technology that Detects Crime
          </h2>
        </div>

        <div className="relative">
        <iframe width="1296" height="729" src="https://www.youtube.com/embed/g1kNtyp-Jn4" title="Deter Intruders with the AI-Powered Outdoor Camera from Fluent Home" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>


          {/* Overlay content */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-xl"></div>
          <div className="absolute bottom-8 left-8 text-white">
            <h3 className="text-2xl font-bold mb-2">Smart Detection Technology</h3>
            <p className="text-lg opacity-90">Advanced AI algorithms identify threats before they become problems</p>
          </div>
        </div>
      </div>
    </section>
  )
}
