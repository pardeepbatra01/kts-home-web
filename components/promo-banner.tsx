import { Button } from "@/components/ui/button"
import { Phone } from "lucide-react"

export default function PromoBanner() {
  return (
    <div className="bg-slate-700 text-white py-4">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex-1 text-center md:text-left">
          <span className="font-bold underline">LIMITED TIME OFFER:</span>
          <span className="ml-2">
            Free Installation ($500 Value) With The Purchase Of A New Smart Home System. Call Us Now!
          </span>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700 text-white flex items-center space-x-2 px-6 py-2">
          <Phone className="w-4 h-4" />
          <span>855-438-6500</span>
        </Button>
      </div>
    </div>
  )
}
