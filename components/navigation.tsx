"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronDown, Menu } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export default function Navigation() {
  return (
    <nav className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center mr-4">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg"><Image src="/images/logo.png" alt="Logo" width={24} height={24} className="w-6 h-6" /></span>
              </div>
            </Link>
          </div>

          <div className="hidden lg:flex items-center space-x-8">

            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center space-x-1 text-slate-700 hover:text-blue-600 transition-colors font-medium whitespace-nowrap">
                <span>🏠 Security Solutions</span>
                <ChevronDown className="w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem asChild>
                  <Link href={process.env.NEXT_PUBLIC_BASE_PATH ? `${process.env.NEXT_PUBLIC_BASE_PATH}/home-app` : '/home-app'}>Smart Home App</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href={process.env.NEXT_PUBLIC_BASE_PATH ? `${process.env.NEXT_PUBLIC_BASE_PATH}/control-panel` : '/control-panel'}>Control Panel</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href= {process.env.NEXT_PUBLIC_BASE_PATH ? `${process.env.NEXT_PUBLIC_BASE_PATH}/carbon-monoxide` : '/carbon-monoxide'}>CO Detector</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href={process.env.NEXT_PUBLIC_BASE_PATH ? `${process.env.NEXT_PUBLIC_BASE_PATH}/smoke-detector` : '/smoke-detector'}>Smart Smoke Detector</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href={process.env.NEXT_PUBLIC_BASE_PATH ? `${process.env.NEXT_PUBLIC_BASE_PATH}/professional-monitoring` : '/professional-monitoring'}>Professional Monitoring</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center space-x-1 text-slate-700 hover:text-blue-600 transition-colors font-medium whitespace-nowrap">
                <span>🏡 Smart Home Controls</span>
                <ChevronDown className="w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem asChild>
                  <Link href={process.env.NEXT_PUBLIC_BASE_PATH ? `${process.env.NEXT_PUBLIC_BASE_PATH}/smart-thermostat` : '/smart-thermostat'}>Smart Thermostats</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href={process.env.NEXT_PUBLIC_BASE_PATH ? `${process.env.NEXT_PUBLIC_BASE_PATH}/smart-lighting` : '/smart-lighting'}>Smart Lighting</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href={process.env.NEXT_PUBLIC_BASE_PATH ? `${process.env.NEXT_PUBLIC_BASE_PATH}/smart-lock` : '/smart-lock'}>Smart Locks</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href={process.env.NEXT_PUBLIC_BASE_PATH ? `${process.env.NEXT_PUBLIC_BASE_PATH}/garage-door-control` : '/garage-door-control'}>Garage Door Control</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href={process.env.NEXT_PUBLIC_BASE_PATH ? `${process.env.NEXT_PUBLIC_BASE_PATH}/smart-switches` : '/smart-switches'}>Smart Switches</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center space-x-1 text-slate-700 hover:text-blue-600 transition-colors font-medium whitespace-nowrap">
                <span>📹 Video Security</span>
                <ChevronDown className="w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem asChild>
                  <Link href={process.env.NEXT_PUBLIC_BASE_PATH ? `${process.env.NEXT_PUBLIC_BASE_PATH}/indoor-camera` : '/indoor-camera'}>Indoor Cameras</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href={process.env.NEXT_PUBLIC_BASE_PATH ? `${process.env.NEXT_PUBLIC_BASE_PATH}/outdoor-camera` : '/outdoor-camera'}>Outdoor Cameras</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href={process.env.NEXT_PUBLIC_BASE_PATH ? `${process.env.NEXT_PUBLIC_BASE_PATH}/doorbell-camera` : '/doorbell-camera'}>Doorbell Cameras</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center space-x-1 text-slate-700 hover:text-blue-600 transition-colors font-medium whitespace-nowrap">
                <span>🏢 Commercial Security</span>
                <ChevronDown className="w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>Commercial Systems</DropdownMenuItem>
                <DropdownMenuItem>Access Control</DropdownMenuItem>
                <DropdownMenuItem>Video Surveillance</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center space-x-1 text-slate-700 hover:text-blue-600 transition-colors font-medium whitespace-nowrap">
                <span>🏢 Enterprise Solutions</span>
                <ChevronDown className="w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>Building Management</DropdownMenuItem>
                <DropdownMenuItem>Energy Management</DropdownMenuItem>
                <DropdownMenuItem>Smart Controls</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center space-x-1 text-slate-700 hover:text-blue-600 transition-colors font-medium whitespace-nowrap">
                <span>Partnerships</span>
                <ChevronDown className="w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>Dealer Program</DropdownMenuItem>
                <DropdownMenuItem>Installer Network</DropdownMenuItem>
                <DropdownMenuItem>Technology Partners</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          <div className="flex items-center space-x-4">
            <Button 
              onClick={() => {
                const contactSection = document.getElementById('contact-form')
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' })
                }
              }} 
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 font-medium"
            >
              Get A Free Quote
            </Button>
            <Button variant="ghost" size="sm" className="lg:hidden">
              <Menu className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}
