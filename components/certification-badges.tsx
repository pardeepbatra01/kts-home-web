import Image from "next/image"

export default function CertificationBadges() {
  return (
    <section className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold text-slate-800 mb-4">Trusted & Certified</h3>
          <p className="text-slate-600">
            Our products meet the highest industry standards for security and reliability
          </p>
        </div>

        <div className="flex justify-center items-center space-x-12 opacity-60">
          <div className="text-center">
            <Image
              src="ulListed.png"
              alt="UL Listed Certification"
              width={120}
              height={80}
              className="mx-auto mb-2"
            />
            <p className="text-sm text-slate-600">UL Listed</p>
          </div>

          <div className="text-center">
            <Image
              src="FC.svg"
              alt="FCC Certified"
              width={120}
              height={80}
              className="mx-auto mb-2"
            />
            <p className="text-sm text-slate-600">FCC Certified</p>
          </div>

          <div className="text-center">
            <Image
              src="energyStar.png"
              alt="Energy Star Qualified"
              width={120}
              height={80}
              className="mx-auto mb-2"
            />
            <p className="text-sm text-slate-600">Energy Star</p>
          </div>
        </div>
      </div>
    </section>
  )
}
