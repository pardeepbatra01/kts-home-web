export function LicensingCanada() {
  const canadaData = [
    { province: "British Columbia", license: "License #BC-2024-001" },
    { province: "Nova Scotia", license: "Registration #NS-2024-456" },
    { province: "Saskatchewan", license: "License #SK-2024-789" },
    { province: "Quebec", license: "Permis #QC-2024-123" },
    { province: "Ontario", license: "License #ON-2024-987" },
    { province: "Newfoundland", license: "Registration #NL-2024-654" },
    { province: "Manitoba", license: "License #MB-2024-321" },
    { province: "Alberta", license: "Registration #AB-2024-147" },
    { province: "New Brunswick", license: "License #NB-2024-852" },
    { province: "Prince Edward Island", license: "Registration #PE-2024-963" },
    { province: "Northwest Territories", license: "License #NT-2024-741" },
    { province: "Nunavut", license: "Registration #NU-2024-258" },
    { province: "Yukon", license: "License #YT-2024-369" },
  ]

  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Canada</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Fluent Home is properly licensed and registered across all Canadian provinces and territories.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {canadaData.map((item, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-lg p-6 shadow-sm border border-gray-200 hover:shadow-md hover:border-blue-300 transition-all duration-300"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.province}</h3>
              <p className="text-blue-600 font-medium">{item.license}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
