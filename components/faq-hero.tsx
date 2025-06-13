export default function FaqHero() {
  return (
    <div className="relative h-[300px] md:h-[400px] lg:h-[500px] overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/protection-surveillance-safety-privacy-policy-concept.jpg')",
        }}
      />

      {/* Blue Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-800/70 to-blue-600/60" />

      {/* Content */}
      <div className="relative container mx-auto h-full flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">FAQ</h1>
          <p className="mt-4 text-xl text-white/90">Find answers to commonly asked questions</p>
        </div>
      </div>
    </div>
  )
}
