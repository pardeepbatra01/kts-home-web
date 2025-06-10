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
            <ul className="space-y-2">
              <li><Link href="#" className="text-blue-100/80 hover:text-white text-sm">Security Systems</Link></li>
              <li><Link href="#" className="text-blue-100/80 hover:text-white text-sm">Video Surveillance</Link></li>
              <li><Link href="#" className="text-blue-100/80 hover:text-white text-sm">Smart Cameras</Link></li>
              <li><Link href="#" className="text-blue-100/80 hover:text-white text-sm">Door/Window Sensors</Link></li>
              <li><Link href="#" className="text-blue-100/80 hover:text-white text-sm">Motion Detectors</Link></li>
              <li><Link href="#" className="text-blue-100/80 hover:text-white text-sm">Professional Monitoring</Link></li>
            </ul>
          </div>

          {/* Home Automation */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Home Automation</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-blue-100/80 hover:text-white text-sm">Smart Thermostats</Link></li>
              <li><Link href="#" className="text-blue-100/80 hover:text-white text-sm">Smart Lighting</Link></li>
              <li><Link href="#" className="text-blue-100/80 hover:text-white text-sm">Smart Locks</Link></li>
              <li><Link href="#" className="text-blue-100/80 hover:text-white text-sm">Garage Door Control</Link></li>
              <li><Link href="#" className="text-blue-100/80 hover:text-white text-sm">Smart Switches</Link></li>
              <li><Link href="#" className="text-blue-100/80 hover:text-white text-sm">Voice Control</Link></li>
            </ul>
          </div>

          {/* Support & Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Home Cameras</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-blue-100/80 hover:text-white text-sm">Doorbell Camera</Link></li>
              <li><Link href="#" className="text-blue-100/80 hover:text-white text-sm">Outdoor Camera</Link></li>
              <li><Link href="#" className="text-blue-100/80 hover:text-white text-sm">Indoor Camera</Link></li>
              <li><Link href="#" className="text-blue-100/80 hover:text-white text-sm">Floodlight Camera</Link></li>
            </ul>
          </div>

          {/* Learn More*/}
          <div>
            <h3 className="text-lg font-semibold mb-4">Learn More</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-blue-100/80 hover:text-white text-sm">Fluent Blog</Link></li>
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
            <h3 className="text-lg font-semibold mb-4">Canadian Headquarters</h3>
          
              <p><Link href="#" className="text-blue-100/80 hover:text-white text-sm">500 4th Ave SW Suite 2500
              Calgary, AB T2P2V6</Link></p>
              <h3 className="text-lg font-semibold mb-4">American Headquarters</h3>
          
          <p><Link href="#" className="text-blue-100/80 hover:text-white text-sm">138 E 12300 S
            STE C147
            Draper UT 84020</Link></p>
          </div>
         
          </div>
        </div>

        {/* Bottom Links */}
        <div className="flex flex-wrap justify-between items-center pt-8 border-t border-white/10 text-sm">
          <div className="flex space-x-6">
           
          </div>
          <p className="text-blue-100/80">&copy; 2024 Fluent Home Security. All rights reserved.</p>
        </div>
    </footer>
  )
}
