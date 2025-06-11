import { Check, X } from "lucide-react"

export default function IndoorCameraComparison() {
  return (
    <section className="py-16 lg:py-20 bg-slate-100">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-slate-800 mb-4">
            How Our Indoor Cameras Stack Up Against the Competition
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Compare features and see why Fluent indoor cameras offer the best value and performance for your home
            security needs.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full bg-white rounded-lg shadow-lg overflow-hidden">
            <thead>
              <tr className="bg-slate-50">
                <th className="text-left p-4 font-semibold text-slate-800">Features</th>
                <th className="text-center p-4 font-semibold text-white bg-blue-600">Fluent</th>
                <th className="text-center p-4 font-semibold text-slate-800">Wyze</th>
                <th className="text-center p-4 font-semibold text-slate-800">Ring</th>
                <th className="text-center p-4 font-semibold text-slate-800">Nest</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              <tr>
                <td className="p-4 font-medium text-slate-800">1080p HD Video</td>
                <td className="p-4 text-center">
                  <Check className="w-5 h-5 text-green-600 mx-auto" />
                </td>
                <td className="p-4 text-center">
                  <Check className="w-5 h-5 text-green-600 mx-auto" />
                </td>
                <td className="p-4 text-center">
                  <Check className="w-5 h-5 text-green-600 mx-auto" />
                </td>
                <td className="p-4 text-center">
                  <Check className="w-5 h-5 text-green-600 mx-auto" />
                </td>
              </tr>
              <tr className="bg-slate-50">
                <td className="p-4 font-medium text-slate-800">Night Vision</td>
                <td className="p-4 text-center">
                  <Check className="w-5 h-5 text-green-600 mx-auto" />
                </td>
                <td className="p-4 text-center">
                  <Check className="w-5 h-5 text-green-600 mx-auto" />
                </td>
                <td className="p-4 text-center">
                  <Check className="w-5 h-5 text-green-600 mx-auto" />
                </td>
                <td className="p-4 text-center">
                  <Check className="w-5 h-5 text-green-600 mx-auto" />
                </td>
              </tr>
              <tr>
                <td className="p-4 font-medium text-slate-800">Two-Way Audio</td>
                <td className="p-4 text-center">
                  <Check className="w-5 h-5 text-green-600 mx-auto" />
                </td>
                <td className="p-4 text-center">
                  <Check className="w-5 h-5 text-green-600 mx-auto" />
                </td>
                <td className="p-4 text-center">
                  <Check className="w-5 h-5 text-green-600 mx-auto" />
                </td>
                <td className="p-4 text-center">
                  <Check className="w-5 h-5 text-green-600 mx-auto" />
                </td>
              </tr>
              <tr className="bg-slate-50">
                <td className="p-4 font-medium text-slate-800">Pan & Tilt (360°)</td>
                <td className="p-4 text-center">
                  <Check className="w-5 h-5 text-green-600 mx-auto" />
                </td>
                <td className="p-4 text-center">
                  <Check className="w-5 h-5 text-green-600 mx-auto" />
                </td>
                <td className="p-4 text-center">
                  <X className="w-5 h-5 text-red-500 mx-auto" />
                </td>
                <td className="p-4 text-center">
                  <X className="w-5 h-5 text-red-500 mx-auto" />
                </td>
              </tr>
              <tr>
                <td className="p-4 font-medium text-slate-800">AI Person Detection</td>
                <td className="p-4 text-center">
                  <Check className="w-5 h-5 text-green-600 mx-auto" />
                </td>
                <td className="p-4 text-center">
                  <X className="w-5 h-5 text-red-500 mx-auto" />
                </td>
                <td className="p-4 text-center">
                  <Check className="w-5 h-5 text-green-600 mx-auto" />
                </td>
                <td className="p-4 text-center">
                  <Check className="w-5 h-5 text-green-600 mx-auto" />
                </td>
              </tr>
              <tr className="bg-slate-50">
                <td className="p-4 font-medium text-slate-800">Cloud Storage Included</td>
                <td className="p-4 text-center">
                  <Check className="w-5 h-5 text-green-600 mx-auto" />
                </td>
                <td className="p-4 text-center">
                  <X className="w-5 h-5 text-red-500 mx-auto" />
                </td>
                <td className="p-4 text-center">
                  <X className="w-5 h-5 text-red-500 mx-auto" />
                </td>
                <td className="p-4 text-center">
                  <X className="w-5 h-5 text-red-500 mx-auto" />
                </td>
              </tr>
              <tr>
                <td className="p-4 font-medium text-slate-800">Professional Installation</td>
                <td className="p-4 text-center">
                  <Check className="w-5 h-5 text-green-600 mx-auto" />
                </td>
                <td className="p-4 text-center">
                  <X className="w-5 h-5 text-red-500 mx-auto" />
                </td>
                <td className="p-4 text-center">
                  <X className="w-5 h-5 text-red-500 mx-auto" />
                </td>
                <td className="p-4 text-center">
                  <X className="w-5 h-5 text-red-500 mx-auto" />
                </td>
              </tr>
              <tr className="bg-slate-50">
                <td className="p-4 font-medium text-slate-800">24/7 Customer Support</td>
                <td className="p-4 text-center">
                  <Check className="w-5 h-5 text-green-600 mx-auto" />
                </td>
                <td className="p-4 text-center">
                  <X className="w-5 h-5 text-red-500 mx-auto" />
                </td>
                <td className="p-4 text-center">
                  <X className="w-5 h-5 text-red-500 mx-auto" />
                </td>
                <td className="p-4 text-center">
                  <X className="w-5 h-5 text-red-500 mx-auto" />
                </td>
              </tr>
              <tr>
                <td className="p-4 font-medium text-slate-800">Privacy Mode</td>
                <td className="p-4 text-center">
                  <Check className="w-5 h-5 text-green-600 mx-auto" />
                </td>
                <td className="p-4 text-center">
                  <X className="w-5 h-5 text-red-500 mx-auto" />
                </td>
                <td className="p-4 text-center">
                  <X className="w-5 h-5 text-red-500 mx-auto" />
                </td>
                <td className="p-4 text-center">
                  <Check className="w-5 h-5 text-green-600 mx-auto" />
                </td>
              </tr>
              <tr className="bg-slate-50">
                <td className="p-4 font-medium text-slate-800">Smart Home Integration</td>
                <td className="p-4 text-center">
                  <Check className="w-5 h-5 text-green-600 mx-auto" />
                </td>
                <td className="p-4 text-center">
                  <X className="w-5 h-5 text-red-500 mx-auto" />
                </td>
                <td className="p-4 text-center">
                  <Check className="w-5 h-5 text-green-600 mx-auto" />
                </td>
                <td className="p-4 text-center">
                  <Check className="w-5 h-5 text-green-600 mx-auto" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="text-center mt-8">
          <p className="text-slate-600 mb-4">
            See why thousands of homeowners choose Fluent for their indoor security needs.
          </p>
        </div>
      </div>
    </section>
  )
}
