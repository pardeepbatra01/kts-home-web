"use client"

import { useState } from 'react'

export default function LocationsSection() {
  const cities = ["Calgary", "Cold Lake", "Drayton Valley", "Edmonton", "Fort McMurray", "Grande Prairie", "Lethbridge", "Lloydminster", "Medicine Hat", "Prince Albert", "Red Deer", "St. Albert"]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-6 text-center">Kts Home Service Locations</h2>
          <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">Serving Alberta,Canada</h2>
        </div>
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center"></h3>
          <div className="flex flex-wrap justify-center gap-4">
            {cities.map((city, index) => (
              <div key={index} className="px-4 py-2 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <span className="text-gray-700 hover:text-blue-600 cursor-pointer">{city}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
