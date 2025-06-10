"use client"

export default function WhyFluentSection() {
  const bgStyle = {
    backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url("/why-fluent-bg.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }

  return (
    <section className="min-h-[500px] relative flex items-center" style={bgStyle}>
      <div className="max-w-7xl mx-auto px-4 py-20 relative z-10">
        <div className="max-w-2xl">
          <div className="inline-block bg-yellow-400 px-3 py-1 mb-4 text-black text-sm font-medium uppercase tracking-wider">
            HOME SECURITY
          </div>
          <h2 className="text-4xl font-bold text-white mb-6">Why Fluent</h2>
          <p className="text-lg text-white/90 leading-relaxed">
            At Fluent, we take care of everything so you don't have to. From expert installation by certified professionals to 24/7 monitoring, we're here every step of the way to ensure your home is fully protected. Plus, with 0% financing options, securing your home has never been more affordable.
          </p>
        </div>
      </div>
    </section>
  )
}
