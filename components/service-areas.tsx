"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

const albertaCities = [
  "Calgary",
  "Cold Lake",
  "Drayton Valley",
  "Edmonton",
  "Fort McMurray",
  "Grande Prairie",
  "Lethbridge",
  "Lloydminster",
  "Medicine Hat",
  "Prince Albert",
  "Red Deer",
  "St. Albert"
]

export default function ServiceAreas() {
  const [expandedCities, setExpandedCities] = useState<string[]>([])

  const toggleCity = (city: string) => {
    if (expandedCities.includes(city)) {
      setExpandedCities(expandedCities.filter((c) => c !== city))
    } else {
      setExpandedCities([...expandedCities, city])
    }
  }

  const locations = albertaCities

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 text-center">
          KTS Home Services Across Alberta
        </h2>
        <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto">
          Providing premium security and home automation solutions in the following cities:
        </p>

        <div className="max-w-4xl mx-auto">
          {/* Locations List */}
          <div className="w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {locations.map((location) => (
                <div key={location} className="border-b border-gray-200">
                  <button
                    className="w-full py-3 px-2 flex justify-between items-center hover:text-blue-600 transition-colors"
                    onClick={() => toggleCity(location)}
                  >
                    <span>{location}</span>
                    <ChevronDown
                      className={cn(
                        "w-4 h-4 transition-transform",
                        expandedCities.includes(location) ? "rotate-180" : "",
                      )}
                    />
                  </button>
                  {expandedCities.includes(location) && (
                    <div className="pb-3 px-2 text-sm text-gray-600">
                      <p>Available services in {location}:</p>
                      <ul className="list-disc pl-5 mt-2">
                        <li>Home Security Systems</li>
                        <li>Smart Home Automation</li>
                        <li>Professional Monitoring</li>
                        <li>Camera Systems</li>
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
