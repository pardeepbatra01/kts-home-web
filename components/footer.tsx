"use client"

import Image from "next/image"
import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#0A1628] text-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-6 gap-10 mb-12">

          {/* Home Security */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Home Security</h3>
            <ul className="space-y-2"> <li><Link href={process.env.NEXT_PUBLIC_BASE_PATH ? `${process.env.NEXT_PUBLIC_BASE_PATH}/home-app` : '/home-app'} className="text-blue-100/80 hover:text-white text-sm">Smart Home App</Link></li>
              <li><Link href={process.env.NEXT_PUBLIC_BASE_PATH ? `${process.env.NEXT_PUBLIC_BASE_PATH}/control-panel` : '/control-panel'} className="text-blue-100/80 hover:text-white text-sm">Control Panel</Link></li>
              <li><Link href={process.env.NEXT_PUBLIC_BASE_PATH ? `${process.env.NEXT_PUBLIC_BASE_PATH}/carbon-monoxide` : '/carbon-monoxide'} className="text-blue-100/80 hover:text-white text-sm">CO Detector</Link></li>
              <li><Link href={process.env.NEXT_PUBLIC_BASE_PATH ? `${process.env.NEXT_PUBLIC_BASE_PATH}/smoke-detector` : '/smoke-detector'} className="text-blue-100/80 hover:text-white text-sm">Smart Smoke Detector</Link></li>
              <li><Link href={process.env.NEXT_PUBLIC_BASE_PATH ? `${process.env.NEXT_PUBLIC_BASE_PATH}/professional-monitoring` : '/professional-monitoring'} className="text-blue-100/80 hover:text-white text-sm">Professional Monitoring</Link></li>
                  </ul>
          </div>
          {/* Home Automation */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Home Automation</h3>
            <ul className="space-y-2">
              <li><Link href={process.env.NEXT_PUBLIC_BASE_PATH ? `${process.env.NEXT_PUBLIC_BASE_PATH}/smart-thermostat` : '/smart-thermostat'} className="text-blue-100/80 hover:text-white text-sm">Smart Thermostats</Link></li>
              <li><Link href={process.env.NEXT_PUBLIC_BASE_PATH ? `${process.env.NEXT_PUBLIC_BASE_PATH}/smart-lighting` : '/smart-lighting'} className="text-blue-100/80 hover:text-white text-sm">Smart Lighting</Link></li>
              <li><Link href={process.env.NEXT_PUBLIC_BASE_PATH ? `${process.env.NEXT_PUBLIC_BASE_PATH}/smart-lock` : '/smart-lock'} className="text-blue-100/80 hover:text-white text-sm">Smart Locks</Link></li>
              <li><Link href={process.env.NEXT_PUBLIC_BASE_PATH ? `${process.env.NEXT_PUBLIC_BASE_PATH}/smart-garage-door` : '/smart-garage-door'} className="text-blue-100/80 hover:text-white text-sm">Garage Door Control</Link></li>
              <li><Link href={process.env.NEXT_PUBLIC_BASE_PATH ? `${process.env.NEXT_PUBLIC_BASE_PATH}/smart-switches` : '/smart-switches'} className="text-blue-100/80 hover:text-white text-sm">Smart Switches</Link></li>
            </ul>
          </div>

          {/* Support & Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Home Cameras</h3>
            <ul className="space-y-2">
              <li><Link href={process.env.NEXT_PUBLIC_BASE_PATH ? `${process.env.NEXT_PUBLIC_BASE_PATH}/doorbell-camera` : '/doorbell-camera'} className="text-blue-100/80 hover:text-white text-sm">Doorbell Camera</Link></li>
              <li><Link href={process.env.NEXT_PUBLIC_BASE_PATH ? `${process.env.NEXT_PUBLIC_BASE_PATH}/outdoor-camera` : '/outdoor-camera'} className="text-blue-100/80 hover:text-white text-sm">Outdoor Camera</Link></li>
              <li><Link href={process.env.NEXT_PUBLIC_BASE_PATH ? `${process.env.NEXT_PUBLIC_BASE_PATH}/indoor-camera` : '/indoor-camera'} className="text-blue-100/80 hover:text-white text-sm">Indoor Camera</Link></li>
            </ul>
          </div>

          {/* Learn More*/}
          <div>
            <h3 className="text-lg font-semibold mb-4">Learn More</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-blue-100/80 hover:text-white text-sm">Kts Blog</Link></li>
              <li><Link href="#" className="text-blue-100/80 hover:text-white text-sm">FAQ</Link></li>
            </ul>
            <h3 className="text-lg font-semibold mb-4">Learn More</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-blue-100/80 hover:text-white text-sm">Support</Link></li>
              <li><Link href="#" className="text-blue-100/80 hover:text-white text-sm">Careers</Link></li>
              <li><Link href="#" className="text-blue-100/80 hover:text-white text-sm">Licensing</Link></li>
              <li><Link href="#" className="text-blue-100/80 hover:text-white text-sm">Rep Verification</Link></li>
            </ul>

          </div>
          <div>
            <div></div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-blue-100/80 hover:text-white text-sm">Email</Link></li>
              <li><Link href="#" className="text-blue-100/80 hover:text-white text-sm">Phone</Link></li>
            </ul>
          </div>
         
          </div>
        </div>

        {/* Bottom Links */}
        <div className="flex flex-wrap justify-center items-center pt-8 border-t border-white/10 text-sm">
          <p className="text-blue-100/80">&copy; 2025 KTS Home Security. All rights reserved.</p>
        </div>
    </footer>
  )
}
