import { Star } from "lucide-react"

export default function TestimonialSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <div className="flex justify-center mb-4">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
          ))}
        </div>

        <blockquote className="text-3xl lg:text-4xl font-bold text-slate-800 mb-6 leading-relaxed">
          "The 24/7 monitoring service gave us incredible peace of mind. When our alarm was triggered, they responded
          immediately and coordinated with local authorities. Truly professional service!"
        </blockquote>

        <div className="text-lg text-slate-600">
          <span className="font-semibold">Sarah M.</span> - Verified Customer
        </div>
      </div>
    </section>
  )
}
