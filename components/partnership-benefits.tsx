export default function PartnershipBenefits() {
  const benefits = [
    {
      title: "Easy Operation Anytime",
      description:
        "Our partnership program is designed for easy implementation with comprehensive training and ongoing support. Start generating revenue quickly with our proven business model and established customer base.",
    },
    {
      title: "Overall Smart Solutions",
      description:
        "Offer complete smart home security solutions to your customers with our full product line. From basic security to advanced automation, provide everything your customers need for their smart home journey.",
    },
    {
      title: "Long Term Success",
      description:
        "Build a sustainable business with our recurring revenue model. Monthly monitoring fees and ongoing service contracts provide steady income while helping customers maintain their security systems.",
    },
  ]

  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center md:text-left">
              <h3 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
              <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
