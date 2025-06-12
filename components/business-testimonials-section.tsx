import { Star, Quote } from "lucide-react"

export default function BusinessTestimonialsSection() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      business: "Johnson's Retail Store",
      rating: 5,
      text: "Kts commercial security system has been a game-changer for our retail business. The cameras are crystal clear and the mobile app lets me check on the store even when I'm not there.",
      location: "Denver, CO",
    },
    {
      name: "Mike Rodriguez",
      business: "Rodriguez Auto Shop",
      rating: 5,
      text: "Professional installation and excellent customer service. The access control system makes managing employee entry so much easier, and the 24/7 monitoring gives me peace of mind.",
      location: "Phoenix, AZ",
    },
    {
      name: "Lisa Chen",
      business: "Chen's Restaurant Group",
      rating: 5,
      text: "We have multiple locations and Kts system lets us monitor all of them from one app. The video quality is outstanding and the support team is always helpful when we need assistance.",
      location: "Seattle, WA",
    },
  ]

  const logos = [
    { name: "Google", rating: "4.8/5" },
    { name: "Forbes", subtitle: "Top Security Company" },
    { name: "BBB", rating: "A+ Rating" },
    { name: "Angie's List", rating: "Super Service Award" },
  ]

  return (
    <section className="py-16 lg:py-20 bg-blue-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            How We Stack Up Against the Competition
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. See what business owners across the country are saying about our commercial
            security solutions and professional service.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <Quote className="w-8 h-8 text-blue-600 mb-4" />
              <p className="text-gray-600 mb-6 leading-relaxed">"{testimonial.text}"</p>
              <div>
                <div className="font-semibold text-gray-900">{testimonial.name}</div>
                <div className="text-blue-600 font-medium">{testimonial.business}</div>
                <div className="text-sm text-gray-500">{testimonial.location}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
          {logos.map((logo, index) => (
            <div key={index} className="text-center">
              <div className="bg-white rounded-xl p-6 shadow-md mb-4">
                <div className="text-2xl font-bold text-gray-800">{logo.name}</div>
              </div>
              <div className="text-sm text-gray-600">{logo.rating || logo.subtitle}</div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-full">
            <Star className="w-5 h-5 fill-current" />
            <span className="font-semibold">4.9/5 Average Business Rating</span>
          </div>
        </div>
      </div>
    </section>
  )
}
