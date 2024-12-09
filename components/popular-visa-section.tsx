import Image from "next/image"
import Link from "next/link"

export function PopularVisaSection() {
  const canadaVisas = [
    "PR Visa",
    "Work Visa",
    "Study Visa",
    "Express Entry Program",
    "PNP",
    "Business Visa",
    "Visit Visa",
    "Digital Nomad Visa"
  ]

  const countries = [
    { name: "AUSTRALIA", image: "/placeholder.svg?height=400&width=400" },
    { name: "GERMANY", image: "/placeholder.svg?height=400&width=400" },
    { name: "USA", image: "/placeholder.svg?height=400&width=400" },
    { name: "UK", image: "/placeholder.svg?height=400&width=400" },
    { name: "UAE", image: "/placeholder.svg?height=400&width=400" }
  ]

  return (
    <section className="container mx-auto px-4 py-12">
      <h2 className="text-4xl font-bold mb-4">Popular Visa</h2>
      <p className="text-lg mb-8">Y-Axis offers expert guidance and support that increases your chances of visa success.</p>
      
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <h3 className="text-2xl font-bold mb-6">CANADA</h3>
          <ul className="space-y-3">
            {canadaVisas.map((visa) => (
              <li key={visa} className="flex items-center gap-2">
                <span className="text-primary">›</span>
                <Link href="#" className="hover:text-primary">{visa}</Link>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
          {countries.map((country) => (
            <div key={country.name} className="relative bg-gray-200 rounded-lg overflow-hidden group">
              <Image
                src={country.image}
                alt={country.name}
                width={400}
                height={400}
                className="w-full aspect-square object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/50">
                <span className="text-white font-bold">{country.name}</span>
              </div>
              <div className="absolute left-0 bottom-0 w-8 h-1 bg-red-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

