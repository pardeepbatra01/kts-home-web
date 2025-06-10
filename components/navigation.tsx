"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronDown, Menu } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export default function Navigation() {
  return (
    <nav className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">F</span>
              </div>
              <span className="text-2xl font-bold text-slate-800" style={{ marginRight: "10px" }}>Fluent</span>
            </Link>
          </div>

          <div className="hidden lg:flex items-center space-x-8">
            <Link href="/why-fluent" className="text-slate-700 hover:text-blue-600 transition-colors font-medium whitespace-nowrap">
              Why Fluent
            </Link>

            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center space-x-1 text-slate-700 hover:text-blue-600 transition-colors font-medium whitespace-nowrap">
                <span>🏠 Home Security</span>
                <ChevronDown className="w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>Security Systems</DropdownMenuItem>
                <DropdownMenuItem>Monitoring</DropdownMenuItem>
                <DropdownMenuItem>Installation</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center space-x-1 text-slate-700 hover:text-blue-600 transition-colors font-medium whitespace-nowrap">
                <span>🏡 Home Automation</span>
                <ChevronDown className="w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>Smart Thermostats</DropdownMenuItem>
                <DropdownMenuItem>Smart Lighting</DropdownMenuItem>
                <DropdownMenuItem>Smart Locks</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center space-x-1 text-slate-700 hover:text-blue-600 transition-colors font-medium whitespace-nowrap">
                <span>📹 Cameras</span>
                <ChevronDown className="w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>Indoor Cameras</DropdownMenuItem>
                <DropdownMenuItem>Outdoor Cameras</DropdownMenuItem>
                <DropdownMenuItem>Doorbell Cameras</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center space-x-1 text-slate-700 hover:text-blue-600 transition-colors font-medium whitespace-nowrap">
                <span>🏢 Business Security</span>
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
                <span>🏢 Business Automation</span>
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
