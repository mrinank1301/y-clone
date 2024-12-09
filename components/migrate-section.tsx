import Image from "next/image"
import Link from "next/link"

export function MigrateSection() {
  const countries = [
    "Canada", "Australia", "Germany",
    "UK", "Austria", "Singapore",
    "Dubai", "USA", "Quebec"
  ]

  return (
    <section className="bg-purple-700 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold">Migrate</h2>
            <p className="text-xl">Get personalized migration solutions and join the millions. Sign-up today!</p>
            
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
              {countries.map((country) => (
                <Link
                  key={country}
                  href="#"
                  className="border border-white/30 rounded px-4 py-2 text-center hover:bg-white/10 transition"
                >
                  {country}
                </Link>
              ))}
            </div>
            
            <div className="flex flex-wrap gap-4">
              <Link
                href="#"
                className="border border-white/30 rounded px-6 py-2 hover:bg-white/10 transition"
              >
                Free Assessment
              </Link>
              <Link
                href="#"
                className="border border-white/30 rounded px-6 py-2 hover:bg-white/10 transition"
              >
                Why Choose Us?
              </Link>
            </div>
          </div>
          
          <div className="relative h-[400px] md:h-[600px]">
            <Image
              src="/placeholder.svg?height=600&width=600"
              alt="Migration Services"
              fill
              className="object-cover rounded-lg"
            />
            <div className="absolute -left-2 top-1/2 w-4 h-16 bg-red-500 -translate-y-1/2" />
          </div>
        </div>
      </div>
    </section>
  )
}

