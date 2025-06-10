"use client"

import { useState } from 'react'

export default function LocationsSection() {
  const [expandedStates, setExpandedStates] = useState<string[]>([])

  const toggleState = (state: string) => {
    setExpandedStates(prev =>
      prev.includes(state)
        ? prev.filter(s => s !== state)
        : [...prev, state]
    )
  }

  const usLocations = [
    { state: "Alabama", cities: ["Birmingham", "Mobile", "Montgomery", "Huntsville"] },
    { state: "Arizona", cities: ["Phoenix", "Tucson", "Mesa", "Chandler"] },
    { state: "Arkansas", cities: ["Little Rock", "Fort Smith", "Fayetteville", "Springdale"] },
    { state: "California", cities: ["Los Angeles", "San Diego", "San Jose", "San Francisco"] },
    { state: "Colorado", cities: ["Denver", "Colorado Springs", "Aurora", "Fort Collins"] },
    { state: "Connecticut", cities: ["Bridgeport", "New Haven", "Hartford", "Stamford"] },
    { state: "Delaware", cities: ["Wilmington", "Dover", "Newark", "Middletown"] },
    { state: "Florida", cities: ["Jacksonville", "Miami", "Tampa", "Orlando"] },
    { state: "Georgia", cities: ["Atlanta", "Augusta", "Columbus", "Savannah"] },
    { state: "Idaho", cities: ["Boise", "Nampa", "Meridian", "Idaho Falls"] },
    { state: "Illinois", cities: ["Chicago", "Aurora", "Rockford", "Joliet"] },
    { state: "Indiana", cities: ["Indianapolis", "Fort Wayne", "Evansville", "South Bend"] },
    { state: "Iowa", cities: ["Des Moines", "Cedar Rapids", "Davenport", "Sioux City"] },
    { state: "Kansas", cities: ["Wichita", "Overland Park", "Kansas City", "Topeka"] },
    { state: "Kentucky", cities: ["Louisville", "Lexington", "Bowling Green", "Owensboro"] },
    { state: "Louisiana", cities: ["New Orleans", "Baton Rouge", "Shreveport", "Lafayette"] },
    { state: "Maine", cities: ["Portland", "Lewiston", "Bangor", "South Portland"] },
    { state: "Maryland", cities: ["Baltimore", "Frederick", "Rockville", "Gaithersburg"] },
    { state: "Massachusetts", cities: ["Boston", "Worcester", "Springfield", "Lowell"] },
    { state: "Michigan", cities: ["Detroit", "Grand Rapids", "Warren", "Sterling Heights"] },
    { state: "Minnesota", cities: ["Minneapolis", "Saint Paul", "Rochester", "Duluth"] },
    { state: "Mississippi", cities: ["Jackson", "Gulfport", "Southaven", "Hattiesburg"] },
    { state: "Missouri", cities: ["Kansas City", "Saint Louis", "Springfield", "Columbia"] },
    { state: "Montana", cities: ["Billings", "Missoula", "Great Falls", "Bozeman"] },
    { state: "Nebraska", cities: ["Omaha", "Lincoln", "Bellevue", "Grand Island"] },
    { state: "Nevada", cities: ["Las Vegas", "Henderson", "Reno", "North Las Vegas"] },
    { state: "New Hampshire", cities: ["Manchester", "Nashua", "Concord", "Derry"] },
    { state: "New Jersey", cities: ["Newark", "Jersey City", "Paterson", "Elizabeth"] },
    { state: "New Mexico", cities: ["Albuquerque", "Las Cruces", "Rio Rancho", "Santa Fe"] },
    { state: "New York", cities: ["New York City", "Buffalo", "Rochester", "Yonkers"] },
    { state: "North Carolina", cities: ["Charlotte", "Raleigh", "Greensboro", "Durham"] },
    { state: "North Dakota", cities: ["Fargo", "Bismarck", "Grand Forks", "Minot"] },
    { state: "Ohio", cities: ["Columbus", "Cleveland", "Cincinnati", "Toledo"] },
    { state: "Oklahoma", cities: ["Oklahoma City", "Tulsa", "Norman", "Broken Arrow"] },
    { state: "Oregon", cities: ["Portland", "Salem", "Eugene", "Gresham"] },
    { state: "Pennsylvania", cities: ["Philadelphia", "Pittsburgh", "Allentown", "Erie"] },
    { state: "Rhode Island", cities: ["Providence", "Warwick", "Cranston", "Pawtucket"] },
    { state: "South Carolina", cities: ["Charleston", "Columbia", "North Charleston", "Mount Pleasant"] },
    { state: "South Dakota", cities: ["Sioux Falls", "Rapid City", "Aberdeen", "Brookings"] },
    { state: "Tennessee", cities: ["Nashville", "Memphis", "Knoxville", "Chattanooga"] },
    { state: "Texas", cities: ["Houston", "San Antonio", "Dallas", "Austin"] },
    { state: "Utah", cities: ["Salt Lake City", "West Valley City", "Provo", "West Jordan"] },
    { state: "Vermont", cities: ["Burlington", "Essex", "South Burlington", "Colchester"] },
    { state: "Virginia", cities: ["Virginia Beach", "Norfolk", "Chesapeake", "Richmond"] },
    { state: "Washington", cities: ["Seattle", "Spokane", "Tacoma", "Vancouver"] },
    { state: "West Virginia", cities: ["Charleston", "Huntington"] },
    { state: "Wisconsin", cities: ["Milwaukee"] },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-6 text-center">Fluent Home Service Locations</h2>
          <h2 className="text-xl font-bold text-gray-800 mb-8">United States</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-x-4 gap-y-0">
          {usLocations.map((location, index) => (
            <div key={index} className="mb-4">
              <div
                className="flex items-center justify-between py-2 cursor-pointer group"
                onClick={() => toggleState(location.state)}
              >
                <h3 className="text-sm font-semibold text-gray-700">{location.state}</h3>
                <span className="text-blue-600 w-4 text-center">{expandedStates.includes(location.state) ? '▼' : '▶'}</span>
              </div>
              {expandedStates.includes(location.state) && (
                <ul className="mt-2 space-y-1">
                  {location.cities.map((city, cityIndex) => (
                    <li key={cityIndex} className="text-sm text-gray-600 hover:text-blue-600 cursor-pointer transition-colors pl-2">
                      {city}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
        
        <div className="h-px bg-gray-200 w-full"></div>

        <div className="mt-16">
          <h2 className="text-xl font-bold text-gray-800 mb-8">Canada</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-x-4 gap-y-0">
            {[
              { 
                state: "Alberta",
                cities: ["Calgary", "Cold Lake", "Drayton Valley", "Edmonton", "Fort McMurray", "Grande Prairie", "Lethbridge", "Lloydminster", "Medicine Hat", "Prince Albert", "Red Deer", "St. Albert"]
              },
              {
                state: "Manitoba",
                cities: ["Thompson", "Dauphin", "Portage la Prairie"]
              },
              {
                state: "Ontario",
                cities: ["North York", "Oshawa", "Toronto", "Windsor"]
              },
              {
                state: "British Columbia",
                cities: ["Dawson Creek", "Fort St. John", "Kamloops", "Nanaimo", "Surrey"]
              },
              {
                state: "Quebec",
                cities: ["Laurentides", "Montreal"]
              },
              {
                state: "New Brunswick",
                cities: ["New Brunswick"]
              },
              {
                state: "Nova Scotia",
                cities: ["North Preston", "Truro"]
              },
              {
                state: "Saskatchewan",
                cities: ["Moosejaw", "Nipawin", "Regina", "Saskatoon"]
              }
            ].map((location, index) => (
              <div key={index} className="mb-4">
                <div
                  className="flex items-center justify-between py-2 cursor-pointer group"
                  onClick={() => toggleState(location.state)}
                >
                  <h3 className="text-sm font-semibold text-gray-700">{location.state}</h3>
                  <span className="text-blue-600 w-4 text-center">{expandedStates.includes(location.state) ? '▼' : '▶'}</span>
                </div>
                {expandedStates.includes(location.state) && (
                  <ul className="mt-2 space-y-1">
                    {location.cities.map((city, cityIndex) => (
                      <li key={cityIndex} className="text-sm text-gray-600 hover:text-blue-600 cursor-pointer transition-colors pl-2">
                        {city}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
