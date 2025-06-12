import { CheckCircle, X } from "lucide-react"

export default function OutdoorCameraComparison() {
  const features = [
    "4K Ultra HD video quality",
    "Color night vision",
    "AI-powered detection",
    "Weatherproof IP67 rating",
    "Two-way audio",
    "Professional installation",
    "24/7 customer support",
    "Cloud storage included",
    "Smart home integration",
    "Mobile app control",
  ]

  const competitors = [
    { name: "Kts Outdoor", color: "bg-blue-600" },
    { name: "Arlo", color: "bg-gray-400" },
    { name: "Ring", color: "bg-gray-400" },
    { name: "Nest", color: "bg-gray-400" },
  ]

  // Kts Outdoor has all features, others have random subset
  const comparisonData = features.map((feature, index) => ({
    feature,
    kts: true,
    arlo: index % 3 !== 0,
    ring: index % 2 !== 0,
    nest: index % 4 !== 0,
  }))

  return (
    <section className="py-16 lg:py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-slate-800 mb-4 lg:mb-6">
            How Our Outdoor Cameras Stack Up Against the Competition
          </h2>
          <p className="text-lg lg:text-xl text-slate-600 max-w-3xl mx-auto">
            See why Kts outdoor cameras offer the most comprehensive features and best value in the market
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[600px]">
              <thead>
                <tr className="border-b border-slate-200">
                  <th className="text-left p-4 lg:p-6 font-semibold text-slate-800">Features</th>
                  {competitors.map((competitor, index) => (
                    <th key={index} className="text-center p-4 lg:p-6">
                      <div
                        className={`inline-block px-3 lg:px-4 py-1 lg:py-2 rounded-lg text-white font-semibold text-sm lg:text-base ${competitor.color}`}
                      >
                        {competitor.name}
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, index) => (
                  <tr key={index} className="border-b border-slate-100 hover:bg-slate-50">
                    <td className="p-4 lg:p-6 font-medium text-slate-800 text-sm lg:text-base">{row.feature}</td>
                    <td className="p-4 lg:p-6 text-center">
                      <CheckCircle className="w-5 h-5 lg:w-6 lg:h-6 text-blue-600 mx-auto" />
                    </td>
                    <td className="p-4 lg:p-6 text-center">
                      {row.kts ? (
                        <CheckCircle className="w-5 h-5 lg:w-6 lg:h-6 text-green-600 mx-auto" />
                      ) : (
                        <X className="w-5 h-5 lg:w-6 lg:h-6 text-red-500 mx-auto" />
                      )}
                    </td>
                    <td className="p-4 lg:p-6 text-center">
                      {row.arlo ? (
                        <CheckCircle className="w-5 h-5 lg:w-6 lg:h-6 text-green-600 mx-auto" />
                      ) : (
                        <X className="w-5 h-5 lg:w-6 lg:h-6 text-red-500 mx-auto" />
                      )}
                    </td>
                    <td className="p-4 lg:p-6 text-center">
                      {row.arlo ? (
                        <CheckCircle className="w-5 h-5 lg:w-6 lg:h-6 text-green-600 mx-auto" />
                      ) : (
                        <X className="w-5 h-5 lg:w-6 lg:h-6 text-red-500 mx-auto" />
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="text-center mt-6 lg:mt-8">
          <p className="text-slate-600 mb-4">Ready to upgrade to the most advanced outdoor camera system?</p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 lg:px-8 py-3 rounded-lg font-semibold transition-colors">
            Get Your Kts Outdoor Cameras
          </button>
        </div>
      </div>
    </section>
  )
}
