import Image from "next/image"
import Link from "next/link"

export default function ProductShowcase() {
  const products = [
    {
      image: "/smart-control-panel.webp",
      name: "Smart Control Panel",
      link: "#"
    },
    {
      image: "/smart-thermosta.png",
      name: "Smart Thermostat",
      link: "#"
    },
    {
      image: "/weiser-doorlock.png",
      name: "Smart Locks",
      link: "#"
    },
    {
      image: "/Indoor (1).png",
      name: "Indoor Camera",
      link: "#"
    },
    {
      image: "/DoorbellFront.webp",
      name: "Video Doorbell",
      link: "#"
    },
    {
      image: "/indoor-camera-2-1.png",
      name: "Outdoor Camera",
      link: "#"
    },
    {
      image: "/MYQPCK_HERO_1.png",
      name: "Smart Garage Door",
      link: "#"
    },
    {
      image: "/ADC-V729_straight_facing_lights_080823.webp",
      name: "Floodlights",
      link: "#"
    },
    {
      image: "/smart-smoke-detector.webp",
      name: "Smart Smoke Detector",
      link: "#"
    },
    {
      image: "/CO2-2GIG.png",
      name: "Carbon Monoxide Detector",
      link: "#"
    },
    {
      image: "/home-app.png",
      name: "Fluent Home App",
      link: "#"
    },
    {
      image: "support-blurb-1.jpg",
      name: "24/7 Monitoring",
      link: "#"
    },
  ]

  return (
    <section className="py-20 bg-[#4A4A4A] text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {products.map((product, index) => (
            <div key={index} className="text-center flex flex-col items-center">
              <div className="bg-white rounded-full w-32 h-32 flex items-center justify-center mb-3 overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={100}
                  height={100}
                  className="object-contain"
                />
              </div>
              <h3 className="text-sm font-semibold mb-1">{product.name}</h3>
              <Link 
                href={product.link}
                className="text-xs text-blue-400 hover:text-blue-300 transition-colors mt-1"
              >
                Learn More »
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <h2>Call to learn more about customization and let us help you design your own Smart Home System.
          </h2>
          
        </div>
      </div>
    </section>
  )
}
