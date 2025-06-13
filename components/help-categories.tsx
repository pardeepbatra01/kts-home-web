import Link from "next/link"
import { Monitor, Camera, Radio, Smartphone, HelpCircle, RefreshCw } from "lucide-react"

const categories = [
  {
    title: "FAQ",
    icon: <HelpCircle className="h-12 w-12 text-blue-600" />,
    description: "Frequently asked questions",
    link: process.env.NEXT_PUBLIC_BASE_PATH ? `${process.env.NEXT_PUBLIC_BASE_PATH}/faq` : '/faq',
  },
  {
    title: "Panels",
    icon: <Monitor className="h-12 w-12 text-blue-600" />,
    description: "Help with your control panel",
    link: "/help-center/panels",
  },
  {
    title: "Cameras",
    icon: <Camera className="h-12 w-12 text-blue-600" />,
    description: "Help with your security cameras",
    link: "/help-center/cameras",
  },
  {
    title: "Sensors",
    icon: <Radio className="h-12 w-12 text-blue-600" />,
    description: "Help with your sensors",
    link: "/help-center/sensors",
  },
  {
    title: "Mobile & Web",
    icon: <Smartphone className="h-12 w-12 text-blue-600" />,
    description: "Help with mobile and web apps",
    link: "/help-center/mobile-web",
  },
  
  {
    title: "Automation",
    icon: <RefreshCw className="h-12 w-12 text-blue-600" />,
    description: "Help with home automation",
    link: "/help-center/automation",
  },
]

export default function HelpCategories() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
      {categories.map((category, index) => (
        <Link
          href={category.link}
          key={index}
          className="bg-white rounded-xl shadow-md p-8 flex flex-col items-center text-center transition-all hover:shadow-lg hover:translate-y-[-2px] border border-gray-100"
        >
          <div className="mb-6">{category.icon}</div>
          <h3 className="text-2xl font-semibold mb-3 text-gray-800">{category.title}</h3>
          {category.description && <p className="text-base text-gray-600">{category.description}</p>}
        </Link>
      ))}
        </div>
      </div>
    </div>
  )
}
