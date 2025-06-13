"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronDown, Menu } from "lucide-react"
import { useState, useRef } from "react"

interface DropdownItem {
  label: string
  href: string
}

interface NavItem {
  id: string
  label: string
  hasDropdown: boolean
  href?: string
  dropdownItems?: DropdownItem[]
}

export default function Navigation() {
  const [hoveredDropdown, setHoveredDropdown] = useState<string | null>(null)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  const handleMouseEnter = (dropdown: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
    setHoveredDropdown(dropdown)
  }

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setHoveredDropdown(null)
    }, 300) // Small delay to prevent menu from closing when moving between trigger and content
  }

  // Navigation items with their dropdown content
  const navItems: NavItem[] = [
    {
      id: "home-security",
      label: "Security Solutions",
      hasDropdown: true,
      dropdownItems: [
        { label: "Smart Home App", href: process.env.NEXT_PUBLIC_BASE_PATH ? `${process.env.NEXT_PUBLIC_BASE_PATH}/home-app` : '/home-app' },
        { label: "Control Panel", href: process.env.NEXT_PUBLIC_BASE_PATH ? `${process.env.NEXT_PUBLIC_BASE_PATH}/control-panel` : '/control-panel' },
        { label: "CO Detector", href: process.env.NEXT_PUBLIC_BASE_PATH ? `${process.env.NEXT_PUBLIC_BASE_PATH}/carbon-monoxide` : '/carbon-monoxide' },
        { label: "Smart Smoke Detector", href: process.env.NEXT_PUBLIC_BASE_PATH ? `${process.env.NEXT_PUBLIC_BASE_PATH}/smoke-detector` : '/smoke-detector' },
        { label: "Professional Monitoring", href: process.env.NEXT_PUBLIC_BASE_PATH ? `${process.env.NEXT_PUBLIC_BASE_PATH}/professional-monitoring` : '/professional-monitoring' },
      ],
    },
    {
      id: "smart-home-controls",
      label: "Smart Home Controls",
      hasDropdown: true,
      dropdownItems: [
        { label: "Smart Thermostats", href: process.env.NEXT_PUBLIC_BASE_PATH ? `${process.env.NEXT_PUBLIC_BASE_PATH}/smart-thermostat` : '/smart-thermostat' },
        { label: "Smart Lighting", href: process.env.NEXT_PUBLIC_BASE_PATH ? `${process.env.NEXT_PUBLIC_BASE_PATH}/smart-lighting` : '/smart-lighting' },
        { label: "Smart Locks", href: process.env.NEXT_PUBLIC_BASE_PATH ? `${process.env.NEXT_PUBLIC_BASE_PATH}/smart-lock` : '/smart-lock' },
        { label: "Smart Garage Door Control", href: process.env.NEXT_PUBLIC_BASE_PATH ? `${process.env.NEXT_PUBLIC_BASE_PATH}/garage-door-control` : '/garage-door-control' },
        { label: "Smart Switches", href: process.env.NEXT_PUBLIC_BASE_PATH ? `${process.env.NEXT_PUBLIC_BASE_PATH}/smart-switches` : '/smart-switches' },
      ],
    },
    {
      id: "cameras",
      label: "Video Security",
      hasDropdown: true,
      dropdownItems: [
        { label: "Indoor Cameras", href: process.env.NEXT_PUBLIC_BASE_PATH ? `${process.env.NEXT_PUBLIC_BASE_PATH}/indoor-camera` : '/indoor-camera' },
        { label: "Outdoor Cameras", href: process.env.NEXT_PUBLIC_BASE_PATH ? `${process.env.NEXT_PUBLIC_BASE_PATH}/outdoor-camera` : '/outdoor-camera' },
        { label: "Doorbell Cameras", href: process.env.NEXT_PUBLIC_BASE_PATH ? `${process.env.NEXT_PUBLIC_BASE_PATH}/doorbell-camera` : '/doorbell-camera' },
      ],
    },
    {
      id: "commercial-security",
      label: "Commercial Security",
      hasDropdown: true,
      dropdownItems: [
        { label: "Commercial Security Systems", href: process.env.NEXT_PUBLIC_BASE_PATH ? `${process.env.NEXT_PUBLIC_BASE_PATH}/commercial-security` : '/commercial-security' },
        { label: "Monitoring & Security", href: "#" },
        { label: "Intrusion Monitoring", href: "#" },
      ],
    },
    {
      id: "Enterprise Solutions",
      label: "Enterprise Solutions",
      hasDropdown: true,
      dropdownItems: [
        { label: "Access Control", href: process.env.NEXT_PUBLIC_BASE_PATH ? `${process.env.NEXT_PUBLIC_BASE_PATH}/access-control` : '/access-control' },
        { label: "Smart Security", href: "#" },
        { label: "Camera System", href: "#" },
      ],
    },
    {
      id: "partnerships",
      label: "Partnerships",
      hasDropdown: true,
      dropdownItems: [
        { label: "Common Sense", href: process.env.NEXT_PUBLIC_BASE_PATH ? `${process.env.NEXT_PUBLIC_BASE_PATH}/partnership` : '/partnership' },
        { label: "Intact Assurance", href: "#" },
        
      ],
    },
  ]

  return (
    <nav className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center mr-4">
          <Link href="/" className="flex items-center">
              <div className="w-32 h-16 flex items-center justify-center">
                <Image 
                  src="logo.png" 
                  alt="Logo" 
                  width={120} 
                  height={60} 
                  className="w-full h-full object-contain" 
                  priority
                />
              </div>
            </Link>
          </div>

          <div className="hidden lg:flex items-center space-x-6 mx-8">
            {navItems.map((item: NavItem) => (
              <div
                key={item.id}
                className="relative"
                onMouseEnter={() => handleMouseEnter(item.id)}
                onMouseLeave={handleMouseLeave}
              >
                {item.hasDropdown ? (
                  <div className="flex items-center text-slate-700 hover:text-blue-600 transition-colors font-medium cursor-pointer relative group">
                    <span className="whitespace-nowrap text-sm">{item.label}</span>
                    <ChevronDown
                      className={`w-4 h-4 ml-1 transition-transform duration-200 ${
                        hoveredDropdown === item.id ? "rotate-180" : ""
                      }`}
                    />
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                  </div>
                ) : (
                  <Link
                    href={item.href ?? '#'}
                    className="flex items-center text-slate-700 hover:text-blue-600 transition-colors font-medium relative group whitespace-nowrap text-sm"
                  >
                    {item.label}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                )}

                {/* Dropdown Menu */}
                {item.hasDropdown && hoveredDropdown === item.id && item.dropdownItems && (
                  <div
                    className="absolute top-full left-0 mt-2 w-56 bg-white shadow-lg rounded-md py-1 z-50"
                    onMouseEnter={() => handleMouseEnter(item.id)}
                    onMouseLeave={handleMouseLeave}
                  >
                    {item.dropdownItems.map((dropdownItem, index) => (
                      <Link
                        key={index}
                        href={dropdownItem.href}
                        className="block px-4 py-2 text-sm text-slate-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                      >
                        {dropdownItem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>  

          <div className="flex items-center space-x-4 ml-4">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 font-medium transform hover:scale-105 transition-all duration-200 shadow-md hover:shadow-lg">
              Get A Free Quote
            </Button>
            <Button variant="ghost" size="sm" className="lg:hidden hover:bg-blue-50 transition-colors">
              <Menu className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}
