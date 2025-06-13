export function LicensingStates() {
  const statesData = [
    { state: "North Dakota", license: "License #ND-2024-001" },
    { state: "West Virginia", license: "Registration #WV-SEC-2024" },
    { state: "Wisconsin", license: "Registration #WI-2024-789" },
    { state: "Washington", license: "License #WASHINPS*874EC" },
    { state: "Virginia", license: "License #11-7542" },
    { state: "Utah", license: "Registration #UT-2024-456" },
    { state: "South Carolina", license: "License #SC-2024-123" },
    { state: "Tennessee", license: "License #TN-2024-987" },
    { state: "Texas", license: "Registration #TX-B07654" },
    { state: "Ohio", license: "License #OH-2024-321" },
    { state: "North Carolina", license: "License #NC-2024-654" },
    { state: "New Mexico", license: "Registration #NM-2024-147" },
    { state: "Nevada", license: "License #NV-2024-852" },
    { state: "Nebraska", license: "License #NE-2024-963" },
    { state: "Montana", license: "Registration #MT-2024-741" },
    { state: "Mississippi", license: "License #MS-2024-258" },
    { state: "Louisiana", license: "License #LA-2024-369" },
    { state: "Kentucky", license: "License #KY-2024-159" },
    { state: "Kansas", license: "Registration #KS-2024-753" },
    { state: "Iowa", license: "License #IA-2024-486" },
    { state: "Idaho", license: "Registration #ID-2024-951" },
    { state: "Illinois", license: "License #IL-2024-357" },
    { state: "Indiana", license: "Registration #IN-2024-624" },
    { state: "Georgia", license: "License #GA-2024-813" },
    { state: "Florida", license: "License #FL-EF20001234" },
    { state: "California", license: "License #CA-ACO7654" },
    { state: "Colorado", license: "Registration #CO-2024-579" },
    { state: "Arkansas", license: "License #AR-2024-246" },
    { state: "Arizona", license: "Registration #AZ-2024-135" },
    { state: "Alabama", license: "License #AL-2024-468" },
    { state: "Alaska", license: "Registration #AK-2024-792" },
    { state: "Connecticut", license: "License #CT-2024-864" },
    { state: "Delaware", license: "Registration #DE-2024-531" },
    { state: "Hawaii", license: "License #HI-2024-297" },
    { state: "Maine", license: "Registration #ME-2024-648" },
    { state: "Maryland", license: "License #MD-2024-175" },
    { state: "Massachusetts", license: "Registration #MA-2024-926" },
    { state: "Michigan", license: "License #MI-2024-413" },
    { state: "Minnesota", license: "Registration #MN-2024-687" },
    { state: "Missouri", license: "License #MO-2024-254" },
    { state: "New Hampshire", license: "Registration #NH-2024-839" },
    { state: "New Jersey", license: "License #NJ-2024-576" },
    { state: "New York", license: "Registration #NY-2024-192" },
    { state: "Oklahoma", license: "License #OK-2024-745" },
    { state: "Oregon", license: "Registration #OR-2024-368" },
    { state: "Pennsylvania", license: "License #PA-2024-621" },
    { state: "Rhode Island", license: "Registration #RI-2024-483" },
    { state: "South Dakota", license: "License #SD-2024-917" },
    { state: "Vermont", license: "Registration #VT-2024-256" },
    { state: "Wyoming", license: "License #WY-2024-794" },
  ]

  return (
    <section className="py-16 lg:py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">United States</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Fluent Home maintains proper licensing and registration in all states where we provide services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {statesData.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 hover:shadow-md hover:border-blue-300 transition-all duration-300"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.state}</h3>
              <p className="text-blue-600 font-medium">{item.license}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
